import React from 'react';
import { StyledContainer } from './style';

export const ItemContainer = (props) => {
    return (
        <StyledContainer sm={24} md={{span: 22, offset: 1}}>
        <div>
            <h2>{props.title}</h2>
        </div>
        <div>
            {props.children}
        </div>
        </StyledContainer>
    );
};