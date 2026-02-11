import * as Ariakit from "@ariakit/react";
import { matchSorter } from "match-sorter";
import { startTransition, useMemo, useState } from "react";
import { COUNTRY_NAMES } from "../../constants";

function CountrySelect({
  value: currentValue,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [searchValue, setSearchValue] = useState("");
  const countryNames = useMemo(() => Object.values(COUNTRY_NAMES), []);

  const matches = useMemo(() => {
    return matchSorter(countryNames, searchValue, {
      baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    });
  }, [countryNames, searchValue]);

  return (
    <div className="wrapper">
      <Ariakit.ComboboxProvider resetValueOnHide>
        <Ariakit.SelectProvider defaultValue={currentValue} setValue={onChange}>
          <Ariakit.SelectLabel>Favorite fruit</Ariakit.SelectLabel>
          <Ariakit.Select className="button" />
          <Ariakit.SelectPopover gutter={4} sameWidth className="popover">
            <div className="combobox-wrapper">
              <Ariakit.Combobox
                autoSelect
                placeholder="Search..."
                className="combobox"
              />
            </div>
            <Ariakit.ComboboxList>
              {matches.map((value) => (
                <Ariakit.SelectItem
                  key={value}
                  value={value}
                  className="select-item"
                  render={<Ariakit.ComboboxItem />}
                />
              ))}
            </Ariakit.ComboboxList>
          </Ariakit.SelectPopover>
        </Ariakit.SelectProvider>
      </Ariakit.ComboboxProvider>
    </div>
  );
}

export default CountrySelect;
