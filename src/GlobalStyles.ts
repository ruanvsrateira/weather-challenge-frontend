import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box!important;
    }

    html, #root, body {
        width: 100%;
        height: 100%;
        background-color: orange
    }

    table td, th{
        padding: 5px;
    }
`;
