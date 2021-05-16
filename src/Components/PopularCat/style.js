import styled from 'styled-components';
import {fontFamily} from '../../globalAsset/fontFamily';
import {getCenter} from '../../utils/getCenter';
import {mobile, desktop} from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';



export const StyledSingleItem = styled.div`
    flex-basis: 12%;
    text-align: center;

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