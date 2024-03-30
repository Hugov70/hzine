import styled from "styled-components";

export const Bannerr = styled.div ` 
    * {
    margin: 0;
    padding: 0;

    }

    .carrossel {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    }

    .carrossel .slick-dots {
    position: absolute;
    bottom: 10px;

    left: 50%;

    transform: translateX(-50%);
    list-style: none;
    padding: 0;
    margin: 0;
    }

    .carrossel .slick-dots li {
    display: inline-block;
    margin: 0 5px;

    }

    .carrossel .slick-dots li button {
    position: relative;
    width: 20px;

    height: 20px;

    border-radius: 50%;

    background-color: transparent;

    border: 2px solid black;

    padding: 0;
    }

    .carrossel .slick-dots li button:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 99%;

    height: 99%;

    border-radius: 50%;

    background-color: red;

    } 

    .carrossel img {
    width: 100%;
    }
`