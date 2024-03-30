import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import CarrosselMsg from "../../components/CarroselMsg";
import SobreNos from "../../components/SobreNos";
import CarrosselProdutos from "../../components/CarrosselProdutos";

import Footer from "../../components/Footer";
import { Homee } from "./styled";


export default function Home() {
    const menuAberto = useSelector(state => state.menuAberto)
    return (
        <Homee>
            <Nav />
            {!menuAberto ?  <>
                <Banner />
                <CarrosselMsg />
                <SobreNos />
                <CarrosselProdutos />
                <Footer />
            
            </>
            
            
            : ''} 
            
        </Homee>
    )
};

