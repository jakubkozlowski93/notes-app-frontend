import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    scrollbar-width: none;

  }
`
