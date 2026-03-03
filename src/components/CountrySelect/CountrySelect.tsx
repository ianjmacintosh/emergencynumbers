import ComboboxSelect, { ComboboxSelectOption } from "../ComboboxSelect";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_ALT_NAMES, COUNTRY_NAMES } from "../../constants";
import { hasFlag } from "country-flag-icons";
import * as FlagIcon from "country-flag-icons/react/3x2";
import styles from "./CountrySelect.module.css";

function CountrySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const Flag = hasFlag(value) ? FlagIcon[value as keyof typeof FlagIcon] : null;
  return (
    <ComboboxSelect
      value={value}
      onChange={onChange}
      comboboxLabel="Search for Country"
      selectButtonContent={
        <>
          <span className={styles.countryBadge}>
            {Flag && <Flag className={styles.flag} />}
            <span>{COUNTRY_NAMES[value as keyof typeof SERVICES]}</span>
          </span>
        </>
      }
    >
      {/* <ComboboxSelectOption key="1" value="foo" keywords="foo">
        Foo (no data)
      </ComboboxSelectOption> */}
      {getCountryIds().map((countryId) => {
        const hasServices = countryId in SERVICES;
        const countryName = COUNTRY_NAMES[countryId];
        const countryKeywords = [countryName];

        if (countryId in COUNTRY_ALT_NAMES)
          countryKeywords.push(...COUNTRY_ALT_NAMES[countryId]!);
        return (
          <ComboboxSelectOption
            key={countryId}
            value={countryId}
            keywords={countryKeywords}
            disabled={!hasServices}
          >
            {countryName} {hasServices ? null : "(no data)"}
          </ComboboxSelectOption>
        );
      })}
    </ComboboxSelect>
  );
}

const getCountryIds = () =>
  Object.keys(COUNTRY_NAMES) as Array<keyof typeof COUNTRY_NAMES>;

export default CountrySelect;
