import { Col, Input } from 'antd';
import styled from 'styled-components';
import { fontFamily } from '../../globalAsset/fontFamily';
import { getCenter } from '../../utils/getCenter';
import { mobile, desktop } from '../../globalAsset/fontSize';
import { device } from '../../globalAsset/breakpoints';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  StyledPrimaryButton,
  StyledSpaceBetween,
} from '../../globalComponents/style';
import { Link } from 'react-router-dom';

export const StyledContainer = styled(StyledSpaceBetween)`
  align-items: flex-end;
  width: 95%;
  margin: 0 auto;
  flex-wrap: nowrap;
  @media ${device.laptop} {
    padding-right: 40px;
  }
`;

export const StyledAdDiv = styled.div`
  background-color: rgba(190, 17, 233, 0.26);
  border-radius: 20px;
  flex-basis: 73%;
  /* padding: 20px 0px; */
`;

export const StyledAdDivInner = styled(StyledSpaceBetween)`
  width: 90%;
  margin: 0 auto;
  flex-wrap: nowrap;
  padding: 20px 20px;
  & > div:first-child {
    flex-basis: 55%;
    width: 100%;
    & h1 {
      font-family: ${fontFamily.montserrat};
      font-weight: 500;
      font-size: ${mobile.large};
      color: ${(props) => props.theme.header};
    }
  }

  & > div:nth-child(2) {
    text-align: right;
    flex-basis: 43%;
    padding: 20px 0px;
    & img {
      width: 100%;
    }
  }

  @media ${device.laptop} {
    & > div:first-child {
        flex-basis: 55%;
      & h1 {
        font-size: 4vw;
      }
    }
  }
`;

export const StyledNavDiv = styled.div`
  flex-basis: 23%;
  filter: ${(props) => props.theme.shadow};
  border-radius: 20px;
  background: ${(props) => props.theme.foreground};
  padding: 10px 0px;
`;

export const StyledButton = styled(StyledPrimaryButton)`
     padding: 10px 40px;
  @media ${device.laptop} {
    padding: 10px 40px;
  }
`;

export const StyledSingleNav = styled(Link)`
  ${getCenter({ justifyContent: 'space-between' })};
  padding: 0px 10px;
  color: ${(props) => props.theme.textColor};
  font-size: ${mobile.normal};
  margin-bottom: 20px;
  text-transform: capitalize;

  & > div:first-child {
    ${getCenter()};

    &>:first-child{
        font-size: 1.6vw;
    }
    & p {
      margin: 0px;
      margin-left: 10px;
    }
  }

  &:hover {
    color: ${(props) => props.theme.pink};
  }

  @media ${device.laptop} {
    font-size: ${desktop.normal};
  }

  @media ${device.desktopL} {
    margin-bottom: 2vh;
  }
`;

export const StyledMore = styled(StyledSpaceBetween)`
    padding: 0px 10px;
    cursor: pointer;
    color: ${props => props.theme.pink};

    & p{
        margin: 0px;
    }
`