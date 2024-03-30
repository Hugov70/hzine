import styled from "styled-components";

export const Navv = styled.nav`

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

    .nav {
        background-color: var(--cor1);
        padding: 10px;
        position: relative;
        transition: left 1.3s ease; 
    }

    .nav h1 {
        font-family: var(--fonte-titulos); 
        color: white;
        text-align: center;
        margin-top: 5px;
        font-size: 2em;
    }

    .nav span.car {
        font-size: 1.4em;
        position: absolute;
        top: 30%;
        right: 6%;
        transform: translateY(-50%);
        color: white;
    }

    .nav span.menuBars {
        font-size: 1.4em;
        position: absolute;
        top: 30%;
        left: 6%;
        transform: translateY(-50%);
        color: white;
    }

    .menu {
        position: relative;
        padding: 10px;
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        
        transition: left 1.3s ease; 
        z-index: 999;
        margin: -15px -15px -15px -15px;
    }

    .menu .headerMenu {
        position: relative;
        background-color: var(--cor1);
        color: white;
        margin: 0px 0px 0px -5px;
        padding: 20px 20px;
        
    }

    .menu .headerMenu .menuClose {
        color: white;
        font-size: 2em;
        position: fixed;
        top: 3.5%;
        right: 4%;
    }

    .menu .headerMenu p.boasVindas {
        font-size: 1.2em;
        margin-bottom: 5px;
    }

    .menu .headerMenu p a {
        text-decoration: underline;
    }

    .menu aside {
        font-size: 1.2em;
        text-align: center;
        background-color: hsla(0, 0%, 66%, 0.178);
        width: 100%;
        padding: 10px;
        margin-right: -2%;
        margin-left: -2%;
        margin-bottom: 25px;
        
    }

    .menu aside img {
        margin-top: 5px;
        width: 50%;
    }

    .menu .produtos p {
        font-size: 1.2em;
        margin-bottom: 8px;
        margin-left: 15px;
    }

    .menu .userInteration {
        position: fixed;
        width: 85%;
        background-color: hsla(0, 0%, 66%, 0.288);
        margin: auto;
        padding: 10px;
        margin-left: 4%;
        border-radius: 5px;
        bottom: 5%;
    }

    .menu .userInteration p {
        font-size: 1.1em;
        margin: 20px 20px;
    }




`