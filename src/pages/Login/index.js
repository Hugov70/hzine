import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Loginn } from './styled';
import { get } from 'loadsh';


import * as actions from '../../store/modules/auth/actions';


export default function Login(props) {
    const menuAberto = useSelector(state => state.menu.menuAberto)
    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido')
        }

        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error('Senha inválida')
        }

        if (formErrors) return;

        dispatch(actions.loginRequest({ email, password, prevPath }));

    }



    return (
        <Loginn>
            <Nav />
            {!menuAberto ? <>
                <h2>Login</h2>
                <form className="formLogin" onSubmit={handleSubmit}>
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
                    <button type="submit">Entrar</button>
                </form>
                <a href="/"><button className="goBack">Voltar</button></a>
                <Footer />

            </>


                : ''}


        </Loginn>
    )
}



