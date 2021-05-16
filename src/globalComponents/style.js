import styled from 'styled-components';
import { fontFamily } from '../globalAsset/fontFamily';
import { getCenter } from '../utils/getCenter';
import { mobile, desktop } from '../globalAsset/fontSize';
import { device } from '../globalAsset/breakpoints';
import { Col } from 'antd';

export const StyledPrimaryButton = styled.button`
  border-radius: 40px;
  border: none;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  font-family: ${fontFamily.ibm};
  font-weight: 500;
  font-size: ${mobile.normal};
  cursor: pointer;

  @media ${device.laptop} {
    font-size: ${desktop.normal};
  }
`;

export const StyledSpaceBetween = styled.div`
  width: 100%;
  ${getCenter({ justifyContent: 'space-between' })};
`;

export const StyledContainer = styled(Col)`
  margin-top: 38px;
  margin-bottom: 30px;

  & > div:first-child {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 30px;

    & > h2 {
      color: ${(props) => props.theme.boldText};
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 1.5px;
    }
  }

  & > div {
    ${getCenter({ justifyContent: 'space-between' })};
  }

  @media ${device.laptop} {
    & > div:first-child {
      & > h2 {
        font-size: 1.8vw;
        text-transform: capitalize;
      }
    }
  }
`;
