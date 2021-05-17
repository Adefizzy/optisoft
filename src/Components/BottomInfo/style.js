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
    ${getCenter({justifyContent: 'space-between', flexWrap: 'nowrap'})};
    margin-top: 40px;
    font-weight: 400;
    font-size: 15px;
    line-height: 29px;
    color: ${props => props.theme.textColor};

    & > div:first-child{
        flex-basis: 25%;
    }
    & > div:nth-child(2){
        flex-basis: 55%;
        ${getCenter({justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'nowrap'})};
        & > div{
    
        }
    }

    @media ${device.laptop}{
        font-size: 1vw;
        line-height: 2vw;
    }
`

export const StyledUnderline = styled.div`
    width: 2vw;
    padding: 1px;
    background-color: ${props => props.theme.primaryColor2};
    margin-bottom: 15px;
`
export const StyledLocationDiv = styled.div`
    ${getCenter({flexWrap: 'nowrap'})};

    & >div{
        flex-basis: 43%;
    }

    & > div:first-child{
        margin-right: 20px;
    }
`