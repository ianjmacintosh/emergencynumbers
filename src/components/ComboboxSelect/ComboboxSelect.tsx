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
  const optionsDataList: OptionsDataList = React.Children.toArray(children)
    .filter(React.isValidElement<OptionElement>)
    .map(({ props }) => ({
      value: props.value,
      label: props.label ?? String(props.children),
    }));

  const currentLabel = optionsDataList.find(
    ({ value }) => value === currentValue,
  )?.label;

  const [searchValue, setSearchValue] = React.useState("");

  const matches = matchSorter(optionsDataList, searchValue, {
    baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    keys: ["label"],
  });

  return (
    <Ariakit.ComboboxProvider
      resetValueOnHide
      setValue={(nextValue) => {
        React.startTransition(() => {
          setSearchValue(nextValue);
        });
      }}
    >
      <Ariakit.SelectProvider
        defaultValue={currentValue}
        setValue={(nextValue) => {
          React.startTransition(() => {
            onChange(nextValue);
          });
        }}
      >
        <Ariakit.Select value={currentValue}>
          {currentLabel}
          <Ariakit.SelectArrow />
        </Ariakit.Select>
        <Ariakit.SelectPopover>
          <div>
            <Ariakit.Combobox autoSelect />
          </div>
          <Ariakit.ComboboxList>
            {matches.map(({ label, value }) => (
              <ComboboxSelectOption key={value} value={value}>
                {label}
              </ComboboxSelectOption>
            ))}
          </Ariakit.ComboboxList>
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </Ariakit.ComboboxProvider>
  );
}

export function ComboboxSelectOption({
  value,
  children,
  ...props
}: React.PropsWithChildren<OptionElement>) {
  return (
    <Ariakit.SelectItem
      value={value}
      {...props}
      render={<Ariakit.ComboboxItem />}
    >
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
