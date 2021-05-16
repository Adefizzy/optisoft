import React, { useState, useEffect } from 'react';
import { Badge } from 'antd';
import {
  StyledTopDiv,
  StyledSearchInputDiv,
  StyledGrSearch,
  StyledInput,
  StyledButton,
  StyledCart,
  StyledFaShoppingCart,
} from './style';

export const TopBar = (props) => {
  return (
    <StyledTopDiv xs={{ span: 24, offset: 0 }} lg={{ span: 14, offset: 8 }}>
      <StyledSearchInputDiv>
        <StyledGrSearch />
        <StyledInput bordered={false} placeholder='Search anything' />
        <StyledButton>Search</StyledButton>
      </StyledSearchInputDiv>
      <StyledCart>
        <Badge count={2}>
          <StyledFaShoppingCart />
        </Badge>
      </StyledCart>
    </StyledTopDiv>
  );
};
