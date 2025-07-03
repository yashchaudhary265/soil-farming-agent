import React, { useState, useEffect, useContext } from 'react';
import { Country, State } from 'country-state-city';
import { SoilContext } from './SoilContext';

export default function CountryStatePicker() {
  const [countryCode, setCountryCode] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [statesList, setStatesList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  const { setSelectedLocation } = useContext(SoilContext); // ✅ updated

  useEffect(() => {
    setCountriesList(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (countryCode) {
      setStatesList(State.getStatesOfCountry(countryCode));
      setStateCode('');
    } else {
      setStatesList([]);
    }
  }, [countryCode]);

  useEffect(() => {
    const selectedState = statesList.find(s => s.isoCode === stateCode);
    const selectedCountry = countriesList.find(c => c.isoCode === countryCode);

    if (selectedState && selectedState.latitude && selectedState.longitude) {
      setSelectedLocation({
        lat: parseFloat(selectedState.latitude),
        lng: parseFloat(selectedState.longitude)
      });
    } else if (selectedCountry && selectedCountry.latitude && selectedCountry.longitude) {
      setSelectedLocation({
        lat: parseFloat(selectedCountry.latitude),
        lng: parseFloat(selectedCountry.longitude)
      });
    }
  }, [countryCode, stateCode, countriesList, statesList, setSelectedLocation]);


  return (
    <div style={{ color: 'white', margin: '1rem' }}>
      <label>
        Select Country:
        <select value={countryCode} onChange={e => setCountryCode(e.target.value)}>
          <option value="">-- choose a country --</option>
          {countriesList.map(c => (
            <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Select State:
        <select
          value={stateCode}
          onChange={e => setStateCode(e.target.value)}
          disabled={!statesList.length}
        >
          <option value="">-- choose a state --</option>
          {statesList.map(s => (
            <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
          ))}
        </select>
      </label>

      {countryCode && (
        <p>👉 You selected: {countriesList.find(c => c.isoCode === countryCode)?.name}
          {stateCode && `, ${statesList.find(s => s.isoCode === stateCode)?.name}`}
        </p>
      )}
    </div>
  );
}
