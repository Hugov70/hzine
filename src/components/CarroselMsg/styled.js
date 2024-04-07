import styled from "styled-components";
import * as colors from '../../config/colors'

export const CarrosselM = styled.div`
  .carousel-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: 70px;
  background-color: ${colors.grayColor};
  padding-bottom: 5px;
  margin-bottom: 30px;
  }

  .messages {
  display: inline-block;
  white-space: nowrap;
  animation: moveMessages 10s linear infinite; /* Ajuste a duração conforme necessário */
  }

  .messages span.item {
  position: relative;
  display: inline-block;
  width: 30%;
  top: 10%;
  margin-left: 10px;
  margin-right: 20px; /* Espaçamento entre as mensagens */
  }

  .messages span.text {
  margin-left: 40px;
  }

  .messages span .icons {
  font-size: 2em;
  position: absolute;
  top: 5%

  }


  @keyframes moveMessages {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
  }

`