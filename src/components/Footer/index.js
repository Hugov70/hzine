import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai';
import instagramLogo from '../../imagens/logos/instagramlogo.webp';
import facebookLogo from '../../imagens/logos/facebooklogo.png';
import youtubeLogo from '../../imagens/logos/youtubelogo.jpg';

import { Footerr } from "./styled"; 

export default function Footer () {
    return (
        <Footerr>
            <div className="groupOfAnchors">
                <p>Sobre a Hzine <AiOutlineArrowRight className="arrowIconR"/></p>
            </div>
            <div className="groupOfAnchors">
                <p>Ajuda <AiOutlineArrowRight className="arrowIconR"/></p>
            </div>
            <div className="groupOfAnchors" >
                <p>Nossas marcas <AiOutlineArrowRight className="arrowIconR"/></p>
            </div>
            <div className="groupOfAnchors">
                <p>Formas de pagamento</p>
                <div id="paymentMethods">

                </div>
            </div>
            <div className="groupOfAnchors">
                <p>Selo de Segurança</p>
                <img className="securityStamp"/>
            </div>
            <div className="groupOfAnchors">
                <button>MAPA DO SITE</button>
            </div>
            <div className="network">
                <p>Hzine</p>
                <div className="networkLogos">
                    <img src={facebookLogo} />
                    <img src={instagramLogo}/>
                    <img src={youtubeLogo} />
                </div>
            </div>
            <div className="address">
                <p>
                    Hzine Suplements LTDA <br/>
                    Praça do GitHub, Internet, Computador <br/>
                    CEP: 000000-000
                </p>
            </div>
        </Footerr>
    )
    
}