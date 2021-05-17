import styled from 'styled-components';
import {fontFamily} from '../../globalAsset/fontFamily';
import {getCenter} from '../../utils/getCenter';
import {mobile, desktop} from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';
import { Col, Input } from 'antd';
import topleft from '../../images/topleft.png';
import fullcircle from '../../images/fullcircle.png';
import halfcircle from '../../images/halfcircle.png';
import { AiOutlineTwitter } from 'react-icons/ai';
import { StyledPrimaryButton } from '../../globalComponents/style';


export const StyledContainer = styled(Col)`
    ${getCenter({justifyContent: 'space-between'})};
    margin-top: 60px;
`

export const StyledSingleItem = styled.div`
    ${getCenter({ justifyContent: 'space-between',flexWrap: 'nowrap'})};
    flex-basis: 30%;
`

export const StyledIconDiv = styled.div`
    border-radius: 50%;
    width: 5vw;
    height: 5vw;
    ${getCenter()};
    font-size: ${mobile.large};
    color: ${props => props.theme.pink};
    filter: ${(props) => props.theme.shadow};
    background: ${(props) => props.theme.foreground};


@media ${device.laptop}{
    font-size: ${desktop.large};
}


`

export const StyledMessageDiv = styled.div`
    flex-basis: 75%;

    & h2{
        color: ${props => props.theme.header};
        font-weight: bolder;
        font-size: 18px;
        text-transform: capitalize;
    }

    & p{
        color: ${props => props.theme.textColor};
        font-size: 14px;
    }


    @media ${device.laptop}{
        & h2{
       
        font-size: 1.25vw;
      
    }

    & p{
        
        font-size: 0.9vw;
    }
    }


`