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
            matches
              .map(({ value, children, ...delegated }) => (
                <ComboboxSelectOption
                  key={String(value)}
                  value={value}
                  {...delegated}
                >
                  {children}
                </ComboboxSelectOption>
              ))
              .sort((a, b) => {
                if (a.props.disabled === b.props.disabled) return 0;
                return a.props.disabled ? 1 : -1;
              })
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
      value={value !== undefined ? String(value) : undefined}
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
  value?: string | number | readonly string[];
  disabled?: boolean;
  keywords?: string[];
  children?: React.ReactNode;
  [key: string]: unknown;
};

type OptionsDataList = OptionElement[];
