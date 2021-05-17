import { Col, Input } from 'antd';
import styled from 'styled-components';
import { fontFamily } from '../../globalAsset/fontFamily';
import { getCenter } from '../../utils/getCenter';
import { mobile, desktop } from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import bg1 from '../../images/Vector (1).png';
import bg2 from '../../images/Vector.png';



export const StyledContainer = styled(Col)`
    background-color: ${props => props.theme.primaryColor3};
    height: 43vh;
    border-radius: 30px;
    background-image: url(${bg1}),url(${bg2});
    background-position:bottom left, top left;
    background-repeat: no-repeat, no-repeat;
    background-origin: border-box, content-box;
    background-size: 50%, 70% 100%; 
    margin-top: 100px;

    & > div{
        width: 90%;
        margin-left: auto;
        ${getCenter({justifyContent: 'space-between'})};
        overflow: hidden;
        height: 100%;

        & > div:first-child{
            height: 100%;
            flex: 1;
            ${getCenter({flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'nowrap'})};

            & h2{
                font-size: 48px;
                color: ${props => props.theme.white};
                font-weight: 700;
            }

            & p {
                font-size: 18px;
                color: ${props => props.theme.white};
                font-weight: 600;
                width: 80%;
            }
        }

        & > div:nth-child(2){
            height: 100%;
            flex-basis: 50%;
            & img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                /* object-position: 20px;
                object-fit: contain; */
            }
        }
        
    }

    @media ${device.laptop}{
        & > div{
        & > div:first-child{
            & h2{
                font-size: 3.3vw;            
            }

            & p {
                font-size: 1.25vw;
            }
        }
    }
    }
`