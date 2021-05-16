import {Col, Input} from 'antd';
import styled from 'styled-components';
import {fontFamily} from '../../globalAsset/fontFamily';
import {getCenter} from '../../utils/getCenter';
import {mobile, desktop} from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { StyledPrimaryButton } from '../../globalComponents/style';


export const StyledContainer = styled(Col)`
    margin-top: 38px;
    & h2{
        color: ${props => props.theme.header};
        font-weight: 400;
        font-size: 28px;
        letter-spacing: 1.5px;
    }


    & > div:first-child{
        width: 95%;
        margin: 0 auto;
        margin-bottom: 45px;
    }

    & > div{
        ${getCenter({justifyContent: 'space-between'})};
    }

    @media ${device.laptop}{
        & h2{
            font-size: 1.8vw;
            text-transform: capitalize;
        }
    }
`

export const StyledSingleItem = styled.div`
    flex-basis: 12%;
  /*   margin-left: 2%; */
    text-align: center;
   /*  padding: 10px; */

    &:first-child{
        margin-left: 0;
    }

    & p{
        color: ${props => props.theme.textColor};
        font-size: ${mobile.normal};
        margin-top: 10px;
        text-transform: capitalize;
    }


    & img{
        width: 87%;
    }

    @media ${device.laptop}{
        & p{
        font-size: 1.05vw;
    }
    }
`