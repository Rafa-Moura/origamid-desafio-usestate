import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        font-family: sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`;
