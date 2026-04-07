import "./Flag.css";
import { hasFlag } from "country-flag-icons";
import * as FlagIcon from "country-flag-icons/react/3x2";

type FlagProps = {
  country: string;
} & React.ComponentProps<FlagIcon.FlagComponent>;

const Flag = ({ country, ...delegated }: FlagProps) => {
  const normalizedCountry = country.toUpperCase();
  if (!hasFlag(normalizedCountry)) return <></>;
  const FlagElement = FlagIcon[normalizedCountry as keyof typeof FlagIcon];
  return <FlagElement className="flag-icon" {...delegated} />;
};

export default Flag;
