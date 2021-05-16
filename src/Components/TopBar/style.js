import {Col, Input} from 'antd';
import styled from 'styled-components';
import {fontFamily} from '../../globalAsset/fontFamily';
import {getCenter} from '../../utils/getCenter';
import {mobile, desktop} from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { StyledPrimaryButton } from '../../globalComponents/style';

export const StyledTopDiv = styled(Col)`
  margin-top: 50px;
  ${getCenter()};
`
export const StyledSearchInputDiv = styled.div`
  border: 1px solid ${props => props.theme.border};
  border-radius: 40px;
  ${getCenter({flexWrap: 'no-wrap'})};
  padding: 5px 10px;
  flex: 1;
  background-color: ${props => props.theme.foreground};
`

export const StyledInput = styled(Input)`
  font-family: ${fontFamily.ibm};
  color: ${props => props.theme.textColor};
  font-weight: 300;


  &::placeholder{
    color: ${props => props.theme.lightText};
    font-style: italic;
  }

  font-size:${mobile.normal};

  @media ${device.laptop}{
    font-size:${mobile.normal};
  }
`


export const StyledButton = styled(StyledPrimaryButton)`
  padding: 5px 40px;
  @media ${device.laptop}{
    padding: 12px 63px;
  }
`

export const StyledGrSearch = styled(AiOutlineSearch)`
  font-size:${mobile.medium};
  color: ${props => props.theme.boldText};
  @media ${device.laptop}{
    font-size:2.5vw;
    margin-left: 20px;
  }
`

export const StyledFaShoppingCart = styled(FaShoppingCart)`
  font-size:${mobile.medium};
  color: ${props => props.theme.boldText};
  flex-basis: 20%;

  @media ${device.laptop}{
    font-size:${mobile.medium};
  }
`

export const StyledCart = styled.div`
  flex-basis: 7%;
  text-align: right;
`