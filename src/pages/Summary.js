import React, { useState, useEffect } from "react";
import useStats from "../utils/useStats";
import CountrySelector from "../components/CountrySelector";
import CountryCard from "../components/CountryCard";
import AsyncSelector from "../components/AsyncSelector";
import styled from "styled-components";
import ShowDate from "../components/ShowDate";
import { device } from "../styles/device";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1;
  justify-content: center;
  justify-items: center;
  align-content: center;

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    max-width: 320px;
  }

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    max-width: 375px;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    max-width: 414px;
  }
  @media (max-width) {
    display: flex;
    flex-direction: column;
    max-width: 414px;
  }

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: auto;
    max-width: 760px;
  }

  @media ${device.laptop} {
    max-width: 1000px;
  }

  @media ${device.laptopL} {
    max-width: 1440px;
  }

  @media ${device.desktop} {
    max-width: 1600px;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
  }

  @media ${device.desktopL} {
    justify-content: center;
    align-content: center;
    justify-items: center;
    margin: 0 auto;
  }
`;

const Header = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 3rem;
  color: #639a67;

  @media ${device.desktop} {
    margin-top: 5rem;
  }
`;

const Summary = () => {
  const [selectedState, setSelectedState] = useState();

  const stats = useStats("https://api.covid19api.com/summary");

  if (!stats) {
    return <div>..Loading</div>;
  }

  return (
    <Grid>
      <Header>COVID-19 Tracker</Header>
      <CountrySelector setSelectedState={setSelectedState} countries={stats} />
      <br />
      <div
        style={{
          display: `flex`,
          justifyContent: `center`
        }}
      >
        <CountryCard selectedState={selectedState} />
      </div>
      <ShowDate date={stats.Date} />
    </Grid>
  );
};

export default Summary;
