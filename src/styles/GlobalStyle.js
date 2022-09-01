import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    :root{
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #333;
        --border-color: #2e344e;
        --background-light-color: #f1f1f1;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
        list-style: none;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--background-light-color);
        color: var(--font-light-color)
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
    }




`;

export default GlobalStyle;
