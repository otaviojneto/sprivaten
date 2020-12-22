import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


* {
        border:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif ;
        margin: 0;
        outline: none !important;
        padding: 0;

        ::before,
        ::after {
            box-sizing: inherit;
        }

    }

        body,
        html {
            font-size: 16px;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        textarea {
            resize: none;
        }
    `;

export default GlobalStyle;
