import React from 'react';
import { ItemContainer } from '../../globalComponents/ItemContainer';
import phone from '../../images/phone.png';
import fidge from '../../images/fridge.png';
import { StyledCard, StyledStatistic, StyledDiscount, StyledRate, StyledInnerContainer} from './style';
import { Rate } from 'antd';


const items = [
    {
        name: 'IPhone 11',
        image: phone
    },
    {
        name: 'Refrigirator',
        image: fidge
    },
    {
        name: 'IPhone 11',
        image: phone
    },
    {
        name: 'Refrigirator',
        image: fidge
    },
]

export const BestSeller = (props) => {
    const itemList = items.map((data, index) => {
        return (
            <CardComponent data={data} key={index}/>
        )
    })
  return (
    <ItemContainer title='best seller'>
        <StyledInnerContainer>
            {itemList}
        </StyledInnerContainer>
    </ItemContainer>
  );
};


const CardComponent = (props) => {
    return (
        <StyledCard>
        <div>
            <img src={props.data.image} alt={props.data.image} />
        </div>
        <h2>{props.data.name}</h2>
        <div>
            <Statistic  value={300} prefix='$'/>
            <Statistic isdiscounted value={300} prefix='$'/>
            <StyledDiscount>-30%</StyledDiscount>
        </div>
        <StyledRate allowHalf defaultValue={4.5} />
      </StyledCard>
    )
}
const Statistic = (props) => {
    return (
        <StyledStatistic isdiscounted = {props.isdiscounted}>
            <p>{props.prefix}</p>
            <p>{props.value}</p>
        </StyledStatistic>
    )
}
