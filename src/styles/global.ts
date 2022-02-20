import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --background-image: url('/img-back.png')
    }


    html{
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }


        @media(max-width: 720px) {
            font-size: 87.5%;
        }

    }



    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-image: var(--background-image);
        background-size: cover;
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }


`