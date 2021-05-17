import React from 'react';
import { StyledContainer,StyledInput, StyledInputComponent,StyledButton, StyledSocialMedia,StyledTitleDiv, StyledSocialMediaContainer, StyledTopDiv} from './style';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import {Input} from 'antd';



export const NewsLetter = (props) => {
    return (
        <StyledContainer sm={24}>
            <div>
                <StyledTopDiv>
                    <StyledTitleDiv>
                        <h4>Sign up for newsletter</h4>
                        <p>and get latest news &amp; update</p>
                    </StyledTitleDiv>
                    <StyledSocialMediaContainer>
                        <p>Follow us</p>
                        <StyledSocialMedia>
                            <AiOutlineTwitter/>
                        </StyledSocialMedia>
                        <StyledSocialMedia>
                            <FaFacebookF/>
                        </StyledSocialMedia>
                        <StyledSocialMedia>
                            <AiFillInstagram/>
                        </StyledSocialMedia>
                    </StyledSocialMediaContainer>
                </StyledTopDiv> 
            </div>
            <div>
                <StyledInputComponent>
                    <StyledInput placeholder='Enter your Email' bordered={false}/>
                    <StyledButton>Subscribe</StyledButton>
                </StyledInputComponent>
            </div>
        </StyledContainer>
    );
};