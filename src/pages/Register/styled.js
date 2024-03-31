import styled from "styled-components";

export const Registerr = styled.section`
    :root {
        --cor1: #211915;
        --cor2: #E30613;

        --fonte-padrao: Arial, Helvetica, sans-serif;
        --fonte-destaque: 'rough', sans-serif;
        --fonte-titulos: 'mooli', sans-serif ;
    }

    h2 {
        margin-top: 30px;
        text-align: center;
    }

    .formRegister {
        margin-bottom: 30px;
        padding: 30px;
    }

    .formRegister label {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .formRegister input {
        height: 40px;
        font-size: 18px;
        border: 1px solid #ddd;
        padding: 0 10px;
        border-radius: 4px;
        margin-top: 5px;

        &:focus {
            border: 1px solid var(--cor1);
        }
    }

    .formRegister button {
        width: 100%;
        height: 40px;
        background-color: var(--cor1);
        color: white;
        font-weight: bolder;
    }
`