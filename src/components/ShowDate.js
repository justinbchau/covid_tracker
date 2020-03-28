import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #5b5656;
  opacity: 0.7;
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
