import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav";
import { toast } from 'react-toastify';
import isEmail from "validator/lib/isEmail";
import axios from "../../services/axios";
import history from "../../services/history";
import { get } from 'loadsh';

import Footer from "../../components/Footer";
import { Registerr } from "./styled";


export default function Register() {
    const menuAberto = useSelector(state => state.menu.menuAberto)

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit (e) {
        e.preventDefault(); 
        let formErrors = false;

        if(nome.length < 3 || nome.length > 255) {
            formErrors = true;
            toast.error('Campo nome deve ter entre 3 e 255 caracteres')
        }

        
        if(!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido')
        }

        if(password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error('A senha deve ter entre 6 e 50 caracteres')
        }

        if (formErrors) return;

        try {
            const response = await axios.post('/users', {
                nome, password, email
            })

            console.log(response.data)

            toast.success('Você fez seu cadastro');
            history.push('/login')
        } catch(err) {
            const errors = get(err, 'response.data.errors');


            
        }


    }

    return (
        <Registerr>
            <Nav />
            {!menuAberto ?  <>
                <h2>Crie sua conta</h2>
                <form className="formRegister"  onSubmit={handleSubmit}>
                    <label htmlFor="nome">
                        Nome:
                        <input type="text" 
                        value={nome} 
                        onChange={e => setNome(e.target.value)}
                        placeholder="Seu nome"
                        />
                    </label>
                    <label htmlFor="Email">
                        Email:
                        <input type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Seu email"
                        />
                    </label>
                    <label htmlFor="password">
                        Senha:
                        <input type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Sua senha"
                        />
                    </label>
                    <button type="submit">Criar conta</button>
                </form>
                <a href="/"><button className="goBack">Voltar</button></a>
                <Footer />
            </>
            
            
            : ''} 
            
        </Registerr>
    )
};