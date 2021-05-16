import React from 'react';
import { Col, Divider } from 'antd';
import {
  StyledContainer,
  StyledAdDiv,
  StyledNavDiv,
  StyledAdDivInner,
  StyledButton,
  StyledSingleNav,
  StyledMore
} from './style';
import phone from '../../images/phone.png';
import {
  IoFootballOutline,
  IoGlassesOutline,
  IoWomanOutline,
  IoManOutline,
  IoAddOutline
} from 'react-icons/io5';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { GrUserManager, GrUserFemale } from 'react-icons/gr';
import {
  GiMailShirt,
  GiChelseaBoot,
  GiEmeraldNecklace,
  GiHerbsBundle,
} from 'react-icons/gi';
import { TiWatch } from 'react-icons/ti';

const navItem = [
  {
    name: "woman's",
    icon: <IoWomanOutline />,
    hasMore: true,
  },
  {
    name: "men's",
    icon: <IoManOutline />,
    hasMore: true,
  },
  {
    name: 'Accessories',
    icon: <IoGlassesOutline />,
    hasMore: true,
  },
  {
    name: 'Clothing',
    icon: <GiMailShirt />,
  },
  {
    name: 'Shoes',
    icon: <GiChelseaBoot />,
  },
  {
    name: 'Watches',
    icon: <TiWatch />,
  },
  {
    name: 'Jewellery',
    icon: <GiEmeraldNecklace />,
  },
  {
    name: 'Health & Beauty',
    icon: <GiHerbsBundle />,
  },
  {
    name: 'sport',
    icon: <IoFootballOutline />,
  },
];
export const Banner = (props) => {
  const nav = navItem.map((item, index) => {
    return <NavItem data={item} key={index} />;
  });
  return (
    <Col sm={{ span: 24 }}>
      <StyledContainer>
        <StyledNavDiv>
            {nav}
            <Divider/>
            <StyledMore>
                <p>More Categories</p>
                <IoAddOutline/>
            </StyledMore>
        </StyledNavDiv>
        <StyledAdDiv>
          <StyledAdDivInner>
            <div>
              <h1>Shop the<br/> Latest Iphones</h1>
              <StyledButton>Shop Now</StyledButton>
            </div>
            <div>
              <img src={phone} alt='phone' />
            </div>
          </StyledAdDivInner>
        </StyledAdDiv>
      </StyledContainer>
    </Col>
  );
};

const NavItem = (props) => {
  return (
    <StyledSingleNav>
      <div>
        {props.data.icon}
        <p>{props.data.name}</p>
      </div>
      {props.data.hasMore && (
        <div>
          <MdKeyboardArrowRight />
        </div>
      )}
     
    </StyledSingleNav>
  );
};
