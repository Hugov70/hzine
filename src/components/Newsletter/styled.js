import styled from 'styled-components';

export const NewsLetter = styled.div`
    :root {
    --cor1: #211915;
    --cor2: #E30613;
    --cor3: #F5F5F5;

    --fonte-padrao: Arial, Helvetica, sans-serif;
    --fonte-destaque: 'rough', sans-serif;
    --fonte-titulos: 'mooli', sans-serif ;
    }

    background-color: var(--cor2);
    color: white;
    padding: 20px;
    margin-top: 50px;
    position: relative;
    

    h2 {
        text-align: center;
        font-weight: bolder;
        font-size: 1.9em;
    }

    p {
        text-align: center;
        margin: 20px ;
    }

    input[type="text"], input[type="email"] {
        display: block;
        width: 95%;
        height: 40px;
        margin: auto;
        margin-top: 10px;
        padding: 0 10px;
        border: none;
        border-radius: 4px;
    }

    p.checkP {
        text-align: left;
        margin: 10px 0px;
        display: flex;
        align-items: center;
    }

    p.checkP input {
        margin-right: 10px;
    }

    button[type="submit"] {
        display: block;
        width: 100%;
        height: 50px;
        margin: auto;
        margin-top: 10px;
        padding: 0 10px;
        background-color: var(--cor1);
        color: white;
        border: none;
        border-radius: 4px;
        font-weight: bolder;
    }

    button[type="submit"]:hover {
        background-color: white;
        color: var(--cor1);
        border: 1px solid var(--cor1);
    }

    @media screen and (min-width: 1280px) {


            .NewsLetter {
                margin: auto;
                max-width: 1600px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .header {
                width: 400px;
                text-align: left;

                
            }

            h2 {
                text-align: left;
                margin-left: 20px ;
                font-weight: bolder;
                font-size: 1.9em;
                }

            p {
                text-align: left;
                margin: 5px 20px ;
            }

            form {
                width: 800px;
                position: absolute;
                top: 20px;
                left: 34%;
                margin-left: 20px;


            }

            input[type="text"], input[type="email"] {
                display: inline-block;
                width: 30%;
                margin-left: 10px;
            }

            button[type="submit"] {
                display: inline-block;
                width: 30%;
                height: 40px;
                margin: initial;
                position: absolute;
                top: 11px;
                left: 550px;
            }

            
            p.checkP {
                text-align: left;
                margin: 10px 10px;
                display: flex;
                align-items: center;
            }
           
        }

`