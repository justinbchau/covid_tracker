import React from "react";
import AsyncSelect from "react-select/async";

const AsyncSelector = ({ countries, setSelectedState }) => {
  if (!countries) {
    return <div>...Loading</div>;
  }

  const countryOptions = countries.Countries.forEach(
    country => country.Country
  );

  const handleChange = e => {
    console.log(e.target);
  };

  return (
    <AsyncSelect
      onInputChange={handleChange}
      loadOptions={countryOptions}
      cacheOptions
    />
  );
};

export default AsyncSelector;
