import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai';
import instagramLogo from '../../imagens/logos/instagramlogo.webp';
import facebookLogo from '../../imagens/logos/facebooklogo.png';
import youtubeLogo from '../../imagens/logos/youtubelogo.jpg';

import { Footerr } from "./styled"; 

export default function Footer () {
    let a1Open = false;
    let a2Open = false;
    let a3Open = false;
    function clicougroupOfAnchors(e) {
        const el = e.target;
        const anchors1 = document.getElementById('anchors1');
        const anchors2 = document.getElementById('anchors2');
        const anchors3 = document.getElementById('anchors3');
        const arrowIconD1 = document.getElementById('arrowIconD1');
        const arrowIconD2 = document.getElementById('arrowIconD2');
        const arrowIconD3 = document.getElementById('arrowIconD3');
        const arrowIconR1 = document.getElementById('arrowIconR1');
        const arrowIconR2 = document.getElementById('arrowIconR2');
        const arrowIconR3 = document.getElementById('arrowIconR3');
        
        if (el.id === 'a1') {
            if (!a1Open) {
                anchors1.style.display = 'block';
                arrowIconD1.style.display = 'block';
                arrowIconR1.style.display = 'none';
                
            } else {
                anchors1.style.display = 'none';
                arrowIconD1.style.display = 'none';
                arrowIconR1.style.display = 'block';
            }
            a1Open = !a1Open;
        }
        else if (el.id === 'a2') {
            if (!a2Open) {
                anchors2.style.display = 'block';
                arrowIconD2.style.display = 'block';
                arrowIconR2.style.display = 'none';
            } else {
                anchors2.style.display = 'none';
                arrowIconD2.style.display = 'none';
                arrowIconR2.style.display = 'block';
            }
            a2Open = !a2Open;
        }

        else if (el.id === 'a3') {
            if (!a3Open) {
                anchors3.style.display = 'block';
                arrowIconD3.style.display = 'block';
                arrowIconR3.style.display = 'none';
            } else {
                anchors3.style.display = 'none';
                arrowIconD3.style.display = 'none';
                arrowIconR3.style.display = 'block';
            }
            a3Open = !a3Open;
        }

        
    }

    return (
        <Footerr>
            <div className="groupOfAnchors" onClick={clicougroupOfAnchors}>
                <p id="a1">Sobre a Hzine <AiOutlineArrowRight className="arrowIconR" id="arrowIconR1"/> <AiOutlineArrowDown className="arrowIconD" id="arrowIconD1"/></p>
                <div id="anchors1">
                    <p><a>Nossa história</a></p>
                    <p><a>Trabalhe conosco</a></p>
                </div>
            </div>
            <div className="groupOfAnchors" onClick={clicougroupOfAnchors}>
                <p id="a2">Ajuda <AiOutlineArrowRight className="arrowIconR" id="arrowIconR2"/> <AiOutlineArrowDown className="arrowIconD" id="arrowIconD2"/></p>
                <div id="anchors2">
                    <p><a>Fale conosco</a></p>
                    <p><a>Política de privacidade</a></p>
                </div>
            </div>
            <div className="groupOfAnchors" onClick={clicougroupOfAnchors}>
                <p id="a3">Nossas marcas <AiOutlineArrowRight className="arrowIconR" id="arrowIconR3" /> <AiOutlineArrowDown className="arrowIconD" id="arrowIconD3"/></p>
                <div id="anchors3">
                    <p><a>Hzine1</a></p>
                    <p><a>Hzine2</a></p>
                </div>
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