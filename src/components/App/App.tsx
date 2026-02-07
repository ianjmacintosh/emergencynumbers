import { SERVICES } from "../../constants/emergency-services";
import { SUPPORTED_COUNTRIES } from "../../constants/supported-countries";

import CountryCard from "../CountryCard";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Emergency Numbers</h1>
      <p>
        Here are the official published emergency phone numbers you can call if
        you are in a foreign country and need help.
      </p>
      <p>
        Calling a local emergency service is usually best, but calling anyone is
        better than calling no one.
      </p>
      <p>Don't panic, be a hero.</p>

      {SUPPORTED_COUNTRIES.map(({ id, name }) => {
        const services = SERVICES[id];

        return <CountryCard key={id} name={name} services={services} />;
      })}
    </div>
  );
}

export default App;
