import React from 'react';
import { StyledContainer, StyledUnderline } from './style';

export const BottomInfo = (props) => {
  return (
    <StyledContainer sm={{ span: 20, offset: 2 }}>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          consectetur id facilisi sodales sollicitudin malesuada proin. Suscipit
          risus ut porttitor cursus consequat iaculis habitant enim.
        </p>
      </div>
      <div>
       <Briefs/>
       <Briefs/>
       <Briefs/>
      </div>
    </StyledContainer>
  );
};


const Briefs = (props) => {
    return (
        <div>
            <StyledUnderline/>
            <p>Why Choose Us</p>
            <p>Our services</p>
            <p>Contact Us</p>
            <p>Terms &amp; conditions</p>
        </div>
    )
}