import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
`;

const ProductCards = ({ products, commodity }) => {
  return (
    <Section>
      {products.map((product, index) => {
        return (
          <ProductCard product={product} key={index} commodity={commodity} />
        );
      })}
    </Section>
  );
};

export default ProductCards;
