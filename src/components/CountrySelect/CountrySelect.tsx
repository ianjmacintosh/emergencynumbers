import ComboboxSelect, { ComboboxSelectOption } from "../ComboboxSelect";
import { SERVICES } from "../../constants/emergency-services";
import { COUNTRY_NAMES } from "../../constants";

function CountrySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <ComboboxSelect
      value={value}
      onChange={onChange}
      selectButtonContent={COUNTRY_NAMES[value as keyof typeof SERVICES]}
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
