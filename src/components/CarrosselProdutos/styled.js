import styled from "styled-components";

export const CarrosselP = styled.div`
.carrosselProdutos {
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  background-color: azure;
  padding: 20px;
  padding-bottom: 60px;
    
}

.carrosselProdutos h2 {
  text-align: center;
  margin-bottom: 20px;
} 

.carrosselProdutos img {
  width: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  margin: auto;
} 

.carrosselProdutos .slick-dots {
  text-align: center;
  
}

.carrosselProdutos .slick-dots li {
  
  display: inline-block;
  margin: 0 20px;
  background-color: transparent;
  width: 40px;

}

.carrosselProdutos .slick-dots li button {
  position: relative;
  content: "";
  width: 40px;
  height: 20px;
  border-radius: 5px;
  background-color: transparent;
  padding: 0;

  
}

.carrosselProdutos .slick-dots li button:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;

  height: 10px;

  border-radius: 4px;

  background-color: rgba(255, 0, 0, 0.863);

}

`