import { Statistic , Rate} from 'antd';
import styled from 'styled-components';
import { fontFamily } from '../../globalAsset/fontFamily';
import { getCenter } from '../../utils/getCenter';
import { mobile, desktop } from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';


export const StyledInnerContainer = styled.div`
    ${getCenter({justifyContent: 'space-between'})};
    width: 95%;
    margin: 0 auto;
`


export const StyledCard = styled.div`
  border-radius: 15px;
  filter: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.foreground};
  flex-basis: 23%;
  padding: 30px;
  height: 45vh;
  padding-bottom: 40px;


  & h2 {
    font-size: ${mobile.normal};
    margin-bottom: 0px;
  }

  & > div:first-child {
    width: 90%;
    padding-left: 10px;
    height: 70%;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  & > div:nth-child(3) {
    ${getCenter({ justifyContent: 'flex-start' })};
  }

  @media ${device.laptop} {
    & h2 {
      font-size: ${desktop.normal};
    }
  }
`;

export const StyledStatistic = styled.div`
  ${getCenter({ justifyContent: 'flex-start' })};
  font-size: ${(props) => (props.isdiscounted ? desktop.small : mobile.normal)};
  font-weight: ${(props) => (props.isdiscounted ? 'normal' : 'bold')};
  text-decoration: ${(props) => (props.isdiscounted ? 'line-through' : 'none')};
  margin-left: ${(props) => props.isdiscounted ? '10px' : '0px'};
  color: ${(props) =>
    props.isdiscounted ? props.theme.highlight : props.theme.boldText};

    & p {
        margin: 0px;
        margin-left: 5px;
    }
    & p:first-child{
        margin-left: 0px;
    }

  @media ${device.laptop} {
    font-size: ${(props) =>
      props.isdiscounted ? desktop.small : desktop.normal};
  }
`;

export const StyledDiscount = styled.p`
    margin-bottom: 0px;
    color: ${props => props.theme.green};
    font-size: ${mobile.small};
    margin-left: 10px;


    @media ${device.laptop}{
        font-size: ${desktop.small};
    }
`

export const StyledRate = styled(Rate)`
    font-size: ${mobile.small};
    color: #EF5E0D;
    margin-top: 5px;

    @media ${device.laptop}{
        font-size: 1vw;
    }
`