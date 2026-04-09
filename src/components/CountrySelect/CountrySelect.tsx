import ComboboxSelect, { ComboboxSelectOption } from "../ComboboxSelect";
import { SERVICES } from "../../constants/emergency-services";
import {
  COUNTRY_ALT_NAMES,
  COUNTRY_NAMES,
  type ValidCountryCode,
} from "../../constants";
import "./CountrySelect.css";
import { CheckIcon, WarningIcon } from "@phosphor-icons/react";
import Flag from "../Flag";

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
      label="Location"
      comboboxLabel="Search for Country"
      selectButtonContent={
        <>
          <span className="country-badge">
            <Flag country={value} height={36} />
            <span className="country-name updog">
              {COUNTRY_NAMES[value as ValidCountryCode]}
            </span>
          </span>
        </>
      }
    >
      {getCountryIds()
        .sort((firstCountryId, secondCountryId) => {
          const firstCountryName = COUNTRY_NAMES[firstCountryId];
          const secondCountryName = COUNTRY_NAMES[secondCountryId];
          return firstCountryName > secondCountryName ? 1 : -1;
        })
        .map((countryId) => {
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
            >
              <span className="option-wrapper">
                {value === countryId ? (
                  <CheckIcon size={16} aria-hidden={true} />
                ) : null}{" "}
                {countryName}{" "}
                {hasServices ? null : "(no information available)"}
                {hasServices ? null : (
                  <WarningIcon
                    size={24}
                    style={{
                      marginLeft: "auto",
                      flexShrink: 0,
                    }}
                  ></WarningIcon>
                )}
              </span>
            </ComboboxSelectOption>
          );
        })}
    </ComboboxSelect>
  );
}

const getCountryIds = () =>
  Object.keys(COUNTRY_NAMES) as Array<ValidCountryCode>;

export default CountrySelect;
