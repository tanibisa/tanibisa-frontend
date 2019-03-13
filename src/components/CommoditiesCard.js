import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Card = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const CardImage = styled.img`
  border-radius: 5px 5px;
`;

const StyledHr = styled.hr`
  width: 216px;
  border-top: 3px solid #62cc84;
`;

const PriceText = styled.p`
  color: #726767;
  margin-bottom: 50px;
`;

const CardButton = styled.button`
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  margin: 30px 0;
  border: none;
  color: #fff;
  background: #6dcc84;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: hsla(138, 48%, 71%, 1);
  }
`;

const CommoditiesCard = ({ item }) => {
  return (
    <Card>
      <CardImage src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <StyledHr />
      <PriceText>{item.price}</PriceText>
      <Link to="/commodities/apple">
        <CardButton>See More</CardButton>
      </Link>
    </Card>
  );
};

export default CommoditiesCard;
