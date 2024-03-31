import styled from "styled-components";

export const Search = styled.span `


    * {
    margin: 0px;
    padding: 0px;
    }

    :root {
    --cor1: #211915;
    --cor2: #E30613;
    }

    .form {
        position: relative;
    }

    .form input[type='text'] {
        display: block;
        width: 90%;
        height: 15px;
        padding: 10px;
        margin: auto;
        margin-top: 25px;
        border-radius: 5px;
    }

    .form span.search {
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
    }
`