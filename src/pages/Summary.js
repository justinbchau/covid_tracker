import React, { useState, useEffect } from "react";
import useStats from "../utils/useStats";
import CountrySelector from "../components/CountrySelector";
import CountryCard from "../components/CountryCard";
import AsyncSelector from "../components/AsyncSelector";
import styled from "styled-components";
import ShowDate from "../components/ShowDate";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

const Header = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 3rem;
  color: #639a67;
`;

const Summary = () => {
  const [selectedState, setSelectedState] = useState();

  const stats = useStats("https://api.covid19api.com/summary");

  if (!stats) {
    return <div>..Loading</div>;
  }

  return (
    <Grid>
      <Header>Covid-19 Tracker</Header>
      <CountrySelector setSelectedState={setSelectedState} countries={stats} />
      <br />
      <CountryCard selectedState={selectedState} />
      <ShowDate date={stats.Date} />
    </Grid>
  );
};

export default Summary;
