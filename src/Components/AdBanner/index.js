import React from 'react';
import { StyledContainer } from './style';
import lady from '../../images/lady.png';
export const AdBanner = (props) => {
  return (
    <StyledContainer sm={{ span: 20, offset: 2 }}>
      <div>
        <div>
          <h2>Ezone Ecommerce</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <img src={lady} alt='lady' />
        </div>
      </div>
    </StyledContainer>
  );
};
