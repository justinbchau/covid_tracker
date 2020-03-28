import React from "react";
import styled from "styled-components";

const SelectDiv = styled.div`
  position: relative;
  text-align: center;
  margin-top: 150px;
  font-size: 2rem;
  color: #639a67;
`;

const Select = styled.select`
  margin-left: 10px;
  width: 170px;
  height: 35px;
  margin: 10px;
  font-size: 18px;
`;

const CountrySelector = ({ countries, setSelectedState }) => {
  return (
    <SelectDiv>
      Country:
      <Select onChange={e => setSelectedState(e.target.value)}>
        {countries.Countries.map(country => {
          return (
            <option value={country.Country} key={country.Country}>
              {country.Country}
            </option>
          );
        })}
      </Select>
    </SelectDiv>
  );
};

export default CountrySelector;
