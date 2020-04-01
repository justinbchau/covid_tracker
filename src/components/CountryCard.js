import React, { useEffect } from "react";
import styled from "styled-components";
import useStats from "../utils/useStats";
import CardDetails from "./CardDetails";
import { device } from "../styles/device";

const Card = styled.div`
  height: 400px;
  width: 500px;
  border: 2px solid #323232;
  color: #639a67;
  border-radius: 5%;
  padding: 50px;
  left: 50%;
  top: 50%;
  margin: 100px auto;
  box-shadow: 2px 2px 3px 2px black;
  background-color: white;

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 300px;
    height: 450px;
  }

  @media ${device.mobileM} {
    width: 100vw;
    margin: auto;
    padding-top: 10px;
  }

  @media ${device.mobileL} {
    width: 414px;
  }

  @media ${device.tablet} {
    max-width: 768px;
    width: 400px;
  }

  @media ${device.laptop} {
    max-width: 800px;
    width: 400px;
  }

  @media ${device.laptopL} {
    max-width: 1440px;
    width: 500px;
    height: 400px;
  }

  @media ${device.desktop} {
    max-width: 2560px;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
  }
  @media ${device.desktopL} {
    margin: 5rem auto;
    justify-content: center;
    align-content: center;
  }
`;

const Title = styled.h1`
  margin-top: 10px;
  padding: 20px;
  font-weight: bold;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 3rem;

  @media ${device.mobileS} {
    margin-top: 2px;
    font-size: 2rem;
  }
  @media ${device.mobileM} {
    margin-top: 2px;
    font-size: 2rem;
  }
  @media ${device.mobileL} {
    margin-top: 2px;
    font-size: 2rem;
  }
`;

const CountryCard = ({ selectedState }) => {
  const stats = useStats("https://api.covid19api.com/summary");

  if (!stats) {
    return <div>...Loading</div>;
  }

  const renderStats = stats.Countries.filter(country => {
    return country.Country === selectedState;
  });

  return (
    <div>
      <Card>
        <Title>{selectedState}</Title>

        <CardDetails countryStats={renderStats} />
      </Card>
    </div>
  );
};

export default CountryCard;
