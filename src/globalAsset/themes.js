import { createGlobalStyle } from 'styled-components';


export const lightTheme = {
    white: '#fff',
    primaryColor: '#EF5E0D',
    pink: '#FF1C4F',
    invertedBackground: '#F2F2F9',
    background: '#fff',
    foreground: '#FFFFFF',
    subtleBlack: '#5F5F5F',
    lightText: '#3E3E3E',
    boldText: '#000000',
    textColor:'#2C3452',
    icon: '#457E6A',
    primaryColor2: '#F03800',
    primaryColor3: '#BF12E9',
    highlight: '#C5C5C5',
    green: '#45B75E',
    /* shadow: "0px 2px 2px 1px rgb(204 204 204)", */
    shadow: "drop-shadow(0px 4px 20px rgba(201, 201, 201, 0.25))",
    border: '#B7ABAB',
    header: '#412C4E'

}

export const darkTheme = {
    header: '#fff',
    background: '#18191A',
    pink: '#FF1C4F',
    foreground: '#242526',
    white: '#fff',
    primaryColor: '#EF5E0D',
    subtleBlack: '#C6CDD6',
    lightText: '#fff',
    boldText: '#fff',
    textColor:'#fff',
    icon: '#457E6A',
    primaryColor2: '#F03800',
    highlight: '#363838',
    shadow: 'none',
    border: '#fff',
    invertedBackground: '#fff', 
    green: '#45B75E',
    primaryColor3: '#BF12E9',
}

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${props => props.theme.background};
        color: ${props => props.theme.boldText};
        transition: all 0.5s linear;
    }
`