import React from 'react';
import { FiTruck } from 'react-icons/fi';
import { RiHandCoinLine } from 'react-icons/ri';
import { IoHeadsetOutline } from 'react-icons/io5';
import {
  StyledContainer,
  StyledSingleItem,
  StyledIconDiv,
  StyledMessageDiv,
} from './style';

export const Services = (props) => {
  return (
  <StyledContainer sm={{ span: 22, offset: 1 }}>
      <SingleItem icon={<FiTruck/>} title='Free Delivery'/>
      <SingleItem icon={<RiHandCoinLine/>} title='30 days Returns guarantee'/>
      <SingleItem icon={<IoHeadsetOutline/>} title='24/7 online support'/>
  </StyledContainer>
  );
};

const SingleItem = (props) => {
  return (
    <StyledSingleItem>
      <StyledIconDiv>
       {props.icon}
      </StyledIconDiv>
      <StyledMessageDiv>
        <h2>{props.title}</h2>
        <p>
          Officia excepteur ullamco voluptate tempor aliquip esse cillum amet
          cillum.
        </p>
      </StyledMessageDiv>
    </StyledSingleItem>
  );
};
