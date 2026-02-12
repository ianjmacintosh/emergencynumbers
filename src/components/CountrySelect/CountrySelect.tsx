import ComboboxSelect, { ComboboxSelectOption } from "../ComboboxSelect";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES } from "../../constants";
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
      selectButtonContent={
        <>
          <span className={styles.countryBadge}>
            {Flag && <Flag className={styles.flag} />}
            {COUNTRY_NAMES[value as keyof typeof SERVICES]}
          </span>
        </>
      }
    >
      {getCountryIds()
        .filter((country) => country in SERVICES)
        .map((countryId) => (
          <ComboboxSelectOption
            key={countryId}
            value={countryId}
            label={COUNTRY_NAMES[countryId] || "Unknown"}
          />
        ))}
    </ComboboxSelect>
  );
}

const getCountryIds = () =>
  Object.keys(COUNTRY_NAMES) as Array<keyof typeof COUNTRY_NAMES>;

export default CountrySelect;
