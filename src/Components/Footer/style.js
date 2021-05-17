import { Col} from 'antd';
import styled from 'styled-components';
import { fontFamily } from '../../globalAsset/fontFamily';
import { getCenter } from '../../utils/getCenter';
import { mobile, desktop } from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';



export const StyledContainer = styled(Col)`
    text-align: center;


    & p{
        color: ${props => props.theme.textColor};
        font-size: 14px;
    }


    @media ${device.laptop}{
        & p {
            font-size: 0.9vw;
        }
    }

`