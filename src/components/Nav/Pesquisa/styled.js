import styled from "styled-components";

export const Search = styled.span `
    @import url('https://fonts.googleapis.com/css2?family=Mooli&display=swap');

    * {
    margin: 0px;
    padding: 0px;
    }

    :root {
    --cor1: #211915;
    --cor2: #E30613;

    --fonte-padrao: Arial, Helvetica, sans-serif;
    --fonte-destaque: 'rough', sans-serif;
    --fonte-titulos: 'mooli', sans-serif ;
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