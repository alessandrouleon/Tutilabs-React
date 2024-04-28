import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body,
#root {
  min-height: 100vh;
  max-width: 100vw;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ECECEC;
}

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }

  *,
  button,
  input {
    border: 0;
    background: none;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`;
