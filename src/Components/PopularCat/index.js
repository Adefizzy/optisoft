import React from 'react';
import cosmetics from '../../images/cometics.png';
import phone from '../../images/Ellipse 9.png'
import fashion from '../../images/Ellipse 8.png';
import electronics from '../../images/Ellipse 7.png';
import { StyledContainer, StyledSingleItem } from './style';
import { ItemContainer } from '../../globalComponents/ItemContainer';


const items = [
    {
        name: 'Phones & Accessories',
        image: phone,
    },
    {
        name: 'Phones & Accessories',
        image: phone,
    },
    {
        name: 'Health and Beauty',
        image: cosmetics,
    },
    {
        name: 'Electronics',
        image: electronics,
    },
    {
        name: 'Fashion',
        image: fashion,
    },

    {
        name: 'Fashion',
        image: fashion,
    },

]

export const PopularCat = (props) => {
    const itemList = items.map((data, index) => {
        return (
            <SingleItem data={data} key={index}/>
        )
    })
    return (
        <ItemContainer title='Popular Categories'>
            {itemList}
        </ItemContainer>
    );
};

const SingleItem = (props) => {
    return (
        <StyledSingleItem>
            <img src={props.data.image} alt='phone and accessories'/>
            <p>{props.data.name}</p>
        </StyledSingleItem>
    )
}