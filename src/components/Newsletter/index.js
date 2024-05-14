import React from "react";
import { NewsLetter } from "./styled";

export default function Newsletter() {
    function handleSubmit (e) {
        e.preventDefault();
    }
    return (
        <NewsLetter>
            <div className="NewsLetter">
                <div className="header">
                    <h2>Receba nossa newsletter</h2>
                    <p><strong>Assine</strong> a nossa <strong>newsletter</strong> e receba as novidadesa e conteúdos exclusivos da <strong>hzine</strong></p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Seu nome"/>
                    <input type="email" placeholder="Seu email"/>
                    <p className="checkP"><input type="checkbox"/> Aceito os termos e condições</p>
                    <button type="submit">Inscreva-se</button>
                </form>
            </div>
        </NewsLetter>
    )
}