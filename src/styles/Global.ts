import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Share+Tech+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@font-face {
  font-family:"Radiotechnika" ;
  src: local("Radiotechnika")
  url("./fonts/Radiotechnika/Radiotechnika.ttf") format("truetype");
}

 :root {
    --color-purple-900: #5200FF;
    --color-purple-800: #8F00FF;    
    --color-purple-700: #de00f5;    
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

  *::-webkit-scrollbar {
  width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #5200ff;
    border-radius: 10px;
    border: 3px solid #5200ff;
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


 main{    
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0;    
    outline:1px solid transparent;
  }

  
section{
  max-width:1400px;
}
  main{
    flex-direction: column;
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
