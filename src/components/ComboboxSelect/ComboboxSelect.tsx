import * as Ariakit from "@ariakit/react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { matchSorter } from "match-sorter";
import React from "react";

import styles from "./ComboboxSelect.module.css";

function ComboboxSelect({
  value: currentValue,
  onChange,
  children,
  selectButtonContent,
  comboboxLabel = "Search",
}: {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  selectButtonContent: React.ReactNode;
  comboboxLabel: string;
}) {
  const optionsDataList: OptionsDataList = React.Children.toArray(children)
    .filter(React.isValidElement<OptionElement>)
    .map(({ props }) => ({
      value: props.value,
      label: (props.label ?? String(props.children)) || props.value,
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
    <ComboboxSelectProviders
      onChange={onChange}
      currentValue={currentValue}
      setSearchValue={setSearchValue}
    >
      <Ariakit.Select
        value={currentValue}
        className={styles.selectButton}
        aria-label="Country"
      >
        {selectButtonContent || currentLabel}
        <Ariakit.SelectArrow />
      </Ariakit.Select>
      <Ariakit.SelectPopover
        sameWidth={true}
        className={styles.comboboxPopover}
      >
        <div className={styles.comboboxInputWrapper}>
          <Ariakit.Combobox
            autoSelect
            autoFocus
            className={styles.comboboxInput}
          />
          <Ariakit.ComboboxLabel className={styles.comboboxLabel}>
            <MagnifyingGlassIcon
              weight="regular"
              size={24}
              alt={comboboxLabel}
            />
          </Ariakit.ComboboxLabel>
        </div>
        <Ariakit.ComboboxList className={styles.comboboxList}>
          {matches.length > 0 ? (
            matches.map(({ label, value }) => (
              <ComboboxSelectOption key={value} value={value}>
                {label}
              </ComboboxSelectOption>
            ))
          ) : (
            <p className={styles.optionsInfo}>
              No countries match "{searchValue}"
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
      value={value}
      {...props}
      render={<Ariakit.ComboboxItem className={styles.comboboxItem} />}
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
        value={currentValue}
        setValue={(nextValue) => {
          React.startTransition(() => {
            onChange(nextValue);
          });
        }}
        placement="bottom-end"
      >
        {children}
      </Ariakit.SelectProvider>
    </Ariakit.ComboboxProvider>
  );
}

export default ComboboxSelect;

type OptionElement = {
  value: string;
  label?: string;
  disabled?: boolean;
  [key: string]: unknown;
};

type OptionData = {
  value: string;
  label: string;
};

type OptionsDataList = OptionData[];
