import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #222;
  }

  body {
    margin: 10px;
  }

  h4.title {
    font-size: 1.5rem;
    font-weight: 400;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`

export default GlobalStyle;
