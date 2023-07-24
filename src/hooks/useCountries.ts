import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export default function useCountries() {
  const getAll = () => formattedCountries;

  const getByValue = (country: string) => {
    return formattedCountries.find((item) => item.value === country);
  };

  return {
    getAll,
    getByValue,
  };
}
