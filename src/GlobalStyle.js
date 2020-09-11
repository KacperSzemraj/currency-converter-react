import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, ::after, ::before {
         box-sizing: inherit;
    }

    .body {
        max-width: 1000px;
        margin: 0 auto;
    }

    #root {
        font-family: 'Catamaran', sans-serif;
        display: block;
        min-height: 100vh;
        background-image: url("${background}");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;