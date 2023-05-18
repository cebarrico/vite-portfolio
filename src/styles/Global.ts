import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap');

 :root {
    --color-purple-900: #5200FF;
    --color-purple-800: #8F00FF;    
    --color-blue: #29B2FF;
    --color-red: #C65F5F;
    --color-yellow: #FFAA29;
    --color-green: #8FD665;    
    --color-gray-900: #212121;
    --color-gray-850: #242424;
    --color-gray-800: #424242;
    --color-gray-700: #6A6A6A;
    --color-gray-600: #757575;
    --color-gray-500: #9e9e9e;
    --color-gray-400: #bdbdbd;
    --color-gray-300: #e0e0e0;
    --color-gray-200: #eeeeee;
    --color-gray-100: #f5f5f5;

    font-size: 60%;   
  }

  
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; 
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-850);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;
    
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: "Fira Code", monospace;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
    font-family: "Fira Code", monospace;
  }

  button {
    cursor: pointer;
  }
`;