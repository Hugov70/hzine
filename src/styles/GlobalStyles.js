import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor, sucessColor, infoColor, warningColor, errorColor } from "../config/colors";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        outline: none;
        box-sizing: border-box;
    }

    
    body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${sucessColor};
  color: white;
}

    .Toastify__progress-bar--success {
  background: white;
}
 
 
 
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${errorColor};
  color: white;
}

.Toastify__progress-bar--error {
  background: white;
}
`;

export const Container = styled.section`
    max-width: 360px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;