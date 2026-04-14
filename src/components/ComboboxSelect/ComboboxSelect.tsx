import * as Ariakit from "@ariakit/react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { matchSorter } from "match-sorter";
import React from "react";

import "./ComboboxSelect.css";

function ComboboxSelect({
  value: currentValue,
  onChange,
  children,
  selectButtonContent,
  comboboxLabel = "Search",
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  selectButtonContent: React.ReactNode;
  comboboxLabel: string;
  label?: React.ReactNode;
}) {
  const optionsDataList: OptionsDataList = React.Children.toArray(children)
    .filter(React.isValidElement<OptionElement>)
    .map(({ props }) => ({ ...props }));

  const currentLabel = optionsDataList.find(
    ({ value }) => value === currentValue,
  )?.children;

  const [searchValue, setSearchValue] = React.useState("");

  const matches = matchSorter(optionsDataList, searchValue, {
    baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    keys: ["value", "keywords"],
  });

  return (
    <ComboboxSelectProviders
      onChange={onChange}
      currentValue={currentValue}
      setSearchValue={setSearchValue}
    >
      {label && (
        <Ariakit.SelectLabel className="select-label">
          {label}
        </Ariakit.SelectLabel>
      )}
      <Ariakit.Select
        value={currentValue}
        className="select-button"
        moveOnKeyDown={true}
        showOnKeyDown={false}
      >
        {selectButtonContent || currentLabel}
        <Ariakit.SelectArrow />
      </Ariakit.Select>
      <Ariakit.SelectPopover sameWidth={true} className="combobox-popover">
        <div className="combobox-input-wrapper">
          <Ariakit.Combobox autoSelect autoFocus className="combobox-input" />
          <Ariakit.ComboboxLabel className="combobox-label">
            <MagnifyingGlassIcon
              weight="regular"
              size={24}
              alt={comboboxLabel}
            />
          </Ariakit.ComboboxLabel>
        </div>
        <Ariakit.ComboboxList className="combobox-list">
          {matches.length > 0 ? (
            matches.map(({ value, children, ...delegated }) => (
              <ComboboxSelectOption
                key={String(value)}
                value={value}
                {...delegated}
              >
                {children}
              </ComboboxSelectOption>
            ))
          ) : (
            <p className="options-info">
              No countries or territories match "{searchValue}"
            </p>
          )}
        </Ariakit.ComboboxList>
      </Ariakit.SelectPopover>
    </ComboboxSelectProviders>
  );
}

export function ComboboxSelectOption({
  value,
  children,
  ...props
}: React.PropsWithChildren<OptionElement>) {
  return (
    <Ariakit.SelectItem
      value={value !== undefined ? String(value) : undefined}
      {...props}
      render={<Ariakit.ComboboxItem className="combobox-item" />}
    >
      {children}
    </Ariakit.SelectItem>
  );
}

export function ComboboxSelectProviders({
  children,
  onChange,
  currentValue,
  setSearchValue,
}: {
  children: React.ReactNode;
  onChange: (value: string) => void;
  currentValue: string;
  setSearchValue: (value: string) => void;
}) {
  const combobox = Ariakit.useComboboxStore({
    resetValueOnHide: true,
    setValue: (nextValue) => {
      React.startTransition(() => {
        setSearchValue(nextValue);
      });
    },
  });

  const select = Ariakit.useSelectStore({
    combobox,
    value: currentValue,
    setValue: onChange,
  });

  return (
    <Ariakit.ComboboxProvider store={combobox}>
      <Ariakit.SelectProvider store={select} placement="bottom-end">
        {children}
      </Ariakit.SelectProvider>
    </Ariakit.ComboboxProvider>
  );
}

export default ComboboxSelect;

type OptionElement = {
  value?: string | number | readonly string[];
  disabled?: boolean;
  keywords?: string[];
  children?: React.ReactNode;
  [key: string]: unknown;
};

type OptionsDataList = OptionElement[];
