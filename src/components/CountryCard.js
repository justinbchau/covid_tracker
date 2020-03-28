import React, { useEffect } from "react";
import styled from "styled-components";
import useStats from "../utils/useStats";
import CardDetails from "./CardDetails";

const Card = styled.div`
height: 400px;
width: 500px;
border: 2px solid #323232;
color: #639a67;
border-radius: 5%;
padding: 50px
position: absolute;
left: 50%;
top: 50%;
margin: 100px auto;
box-shadow: 5px 5px 3px black;
background-color: white;
`;

const Title = styled.h1`
  margin-top: 10px;
  padding: 20px;
  font-weight: bold;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 3rem;
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
    <Card>
      <Title>{selectedState}</Title>

      <CardDetails countryStats={renderStats} />
    </Card>
  );
};

export default CountryCard;
