import * as Ariakit from "@ariakit/react";
import { matchSorter } from "match-sorter";
import React from "react";

function ComboboxSelect({
  value: currentValue,
  onChange,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  const optionsDataList: OptionsDataList = React.useMemo(
    () =>
      React.Children.toArray(children)
        .filter(React.isValidElement<OptionElement>)
        .map(({ props }) => {
          return {
            value: props.value,
            label: props.label ?? String(props.children),
          };
        }),
    [children],
  );

  const currentLabel = optionsDataList.find(
    ({ value }) => value === currentValue,
  )?.label;

  const [searchValue, setSearchValue] = React.useState("");

  const matches = matchSorter(optionsDataList, searchValue, {
    baseSort: (a, b) => {
      return a.index < b.index ? -1 : 1;
    },
    keys: ["label"],
  });

  return (
    <div className="wrapper">
      <Ariakit.ComboboxProvider resetValueOnHide setValue={setSearchValue}>
        <Ariakit.SelectProvider defaultValue={currentLabel} setValue={onChange}>
          <Ariakit.Select className="button" value={currentValue}>
            {currentLabel}
            <Ariakit.SelectArrow className="chevron" />
          </Ariakit.Select>
          <Ariakit.SelectPopover gutter={4} sameWidth className="popover">
            <div className="combobox-wrapper">
              <Ariakit.Combobox
                autoSelect
                placeholder="Search..."
                className="combobox"
              />
            </div>
            <Ariakit.ComboboxList>
              {matches.map(({ value, label }) => (
                <ComboboxSelectOption key={value} value={value}>
                  {label}
                </ComboboxSelectOption>
              ))}
            </Ariakit.ComboboxList>
          </Ariakit.SelectPopover>
        </Ariakit.SelectProvider>
      </Ariakit.ComboboxProvider>
    </div>
  );
}

export function ComboboxSelectOption({
  value,
  children,
  ...props
}: React.PropsWithChildren<OptionElement>) {
  return (
    <Ariakit.SelectItem value={value} {...props}>
      {children}
    </Ariakit.SelectItem>
  );
}

export default ComboboxSelect;

type OptionElement = {
  value: string;
  label?: string;
  [key: string]: unknown;
};

type OptionData = {
  value: string;
  label: string;
};

type OptionsDataList = OptionData[];
