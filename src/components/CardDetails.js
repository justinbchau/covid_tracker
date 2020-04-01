import React from "react";
import styled from "styled-components";
import { device } from "../styles/device";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.div`
  margin-top: 10px;
  font-size: 2rem;

  @media ${device.mobileS} {
    margin: auto;
  }
  @media ${device.mobileM} {
    margin: auto;
  }
`;

const ListItem = styled.h5`
  padding-bottom: 35px;
`;
const CardDetails = ({ countryStats }) => {
  return (
    <Container>
      {countryStats.map(country => (
        <List key={country.Country}>
          <ListItem>Total Confirmed: {country.TotalConfirmed}</ListItem>
          <ListItem>Total Deaths: {country.TotalDeaths}</ListItem>
          <ListItem>Total Recovered: {country.TotalRecovered}</ListItem>
        </List>
      ))}
    </Container>
  );
};

export default CardDetails;
