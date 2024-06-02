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

    main.registerMain {
        max-width: 600px;
        margin: auto; 
    }

    .formRegister {
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
        border-radius: 4px;
    }

    .formRegister button:hover {
        background-color: var(--cor2);
    }

    p.withAcc  {
        text-align: center;
        text-decoration: underline;
        margin: -20px 0px 30px 0px;


    }

    p.withAcc a {
        color: black;
        cursor: pointer;
        opacity: 90%;
    }

    button.goBack {
        display: block;
        margin: auto;
        width: 50%;
        height: 40px;
        background-color: white;
        color: var(--cor2);
        margin-bottom: 30px;
        
    }

    button.goBack:hover {
        background-color: var(--cor2);
        color: white;

    }
`