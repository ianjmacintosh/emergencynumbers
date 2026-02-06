import { SERVICES } from "../../constants/emergency-services";
import { SUPPORTED_COUNTRIES } from "../../constants/supported-countries";

import CountryCard from "../CountryCard";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Emergency Numbers</h1>

      {SUPPORTED_COUNTRIES.map(({ id, name }) => {
        const services = SERVICES[id];

        return <CountryCard key={id} name={name} services={services} />;
      })}
    </div>
  );
}

export default App;
