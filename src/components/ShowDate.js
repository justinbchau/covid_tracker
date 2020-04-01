import React from "react";
import styled from "styled-components";
import { device } from "../styles/device";

const Container = styled.div`
  color: #5b5656;
  opacity: 0.7;

  @media ${device.mobileS} {
    text-align: center;
    margin-bottom: 20px;
  }
  @media ${device.mobileS} {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    text-align: center;
  }
`;

const ShowDate = ({ date }) => {
  if (!date) {
    return <div>...Loading</div>;
  }

  const formatDate = new Date(date);
  const newDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(formatDate);

  return <Container>Last Updated: {newDate}</Container>;
};

export default ShowDate;
