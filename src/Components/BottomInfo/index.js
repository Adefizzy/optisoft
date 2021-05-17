import React from 'react';
import { StyledContainer, StyledUnderline, StyledLocationDiv } from './style';

const list1 = [
    'Why Choose Us',
    'Our services',
    'Contact Us',
    'Terms & conditions'
]
const list2 = [
    'Monday - Friday | 8:00am-10pm',
    'Saturdays | 9:00am-11pm',
    'Sundays | 8:00am-9pm'
]

const list3 = [
    '3A Idowu Matins Victoria Island Lagos',
    'Call Us ~ 081078899008',
    'E-mail ~ info@keggo.com'
]
export const BottomInfo = (props) => {
  return (
    <StyledContainer sm={{ span: 22, offset: 1}}>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          consectetur id facilisi sodales sollicitudin malesuada proin. Suscipit
          risus ut porttitor cursus consequat iaculis habitant enim.
        </p>
      </div>
      <div>
       <Briefs textArr={list1}/>
       <StyledLocationDiv>
            <Briefs textArr={list2}/>
            <Briefs textArr={list3}/>
       </StyledLocationDiv>
       
      </div>
    </StyledContainer>
  );
};


const Briefs = (props) => {
    const textList = props.textArr.map((item, index) => {
        return(<p key={index}>{item}</p>)
    });

    return (
        <div>
            <StyledUnderline/>
            {textList}
        </div>
    )
}