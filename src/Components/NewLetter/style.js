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
    background-image: url(${topleft}), url(${fullcircle}), url(${halfcircle}), linear-gradient(to right, #EF5E0D, #F03800);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top left, 3% 90%, bottom center;
    height: 35vh;
    ${getCenter({flexDirection:'column', flexWrap: 'nowrap'})};

    & > div{
        width: 83%;
        margin: 0 auto;
    }
`

export const StyledSocialMedia = styled.div`
    background-color: #DD3502;
    border-radius: 50%;
    color: ${props => props.theme.white};
    font-size: ${mobile.normal};
    width: 20px;
    height:18px;
    ${getCenter()};
    margin-left: 10px;

    @media ${device.laptop}{
        font-size: ${desktop.normal};
        flex-basis: 2vw;
        height: 2vw;

    }
`



export const StyledSocialMediaContainer = styled.div`
    color: ${props => props.theme.white};
    ${getCenter({justifyContent: 'flex-end', flexWrap: 'nowrap'})};
    flex-basis: 40%;

    & p{
        margin-bottom: 0px;
    }
`

export const StyledTopDiv = styled.div`
    ${getCenter({justifyContent: 'space-between', flexWrap: 'nowrap'})};
    padding-left: 20px;
`

export const StyledTitleDiv = styled.div`
    
    & h4{
        color: ${props => props.theme.white};
        font-weight: 400;
        font-size: 24px;
    }

    & p{
        color: ${props => props.theme.white};
        font-size: 14px;
    }
`

export const StyledInputComponent = styled.div`
    background-color: ${props => props.theme.white};
    border-radius: 40px;
    padding: 5px;
    ${getCenter({flexWrap: 'nowrap'})};
    width: 45%;
    margin-top: 10px;
`

export const StyledButton = styled(StyledPrimaryButton)`
    padding: 8px 25px;
    font-weight: bolder;
    letter-spacing: 1.5px;
`

export const StyledInput = styled(Input)`
  font-family: ${fontFamily.ibm};
  color: ${props => props.theme.textColor};
  font-weight: 300;
  padding-left: 30px;


  &::placeholder{
    color: ${props => props.theme.subtleblack};
    font-weight: bolder;
  }

  font-size:18px;

  @media ${device.laptop}{
    font-size:1.25vw;
  }
`