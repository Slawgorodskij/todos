import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {auth} from "../services/firebase";
import {loginSuccess} from "../store/user/userAction";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const resetError = () => {
        setErrorEmail('');
        setErrorPassword('');
    }
    const validate = () => {
        resetError()
        if (!email) {
            setErrorEmail('Адрес электронной почты не указан')
            return false
        }
        if (!password) {
            setErrorPassword('Пароль не указан')
            return false
        }
        return true
    }

    const showErrorMessage = (error) => {
        resetError();
        if (error === 'auth/invalid-email') setEmail('Адрес электронной почты недействителен')

        if (error === 'auth/user-disabled') setEmail('Вы отключены')

        if (error === 'auth/user-not-found') setEmail('Нет пользователя, соответствующего данному электронному письму')

        if (error === 'auth/wrong-password') {
            setEmail('Адрес электроннной почты или пароль неверен');
            setPassword('Адрес электроннной почты или пароль неверен');
        }
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (validate()) {
            auth.signInWithEmailAndPassword(email, password)
                .then(({user}) => {
                    dispatch(loginSuccess(user))
                    navigate('/')
                })
                .catch((error) => {
                    showErrorMessage(error.code.toString())
                })
        }
    }

    return (
        <section>
            <h1>Вход</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="field">
                    <label className="label">
                        Адрес электронной почты
                    </label>
                    <div className="control">
                        <input
                            type="email"
                            className="input"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    {errorEmail &&
                        <p className="help is-danger">
                            {errorEmail}
                        </p>
                    }
                </div>
                <div className="field">
                    <label className="label">
                        Пароль
                    </label>
                    <div className="control">
                        <input
                            type="password"
                            className="input"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    {errorPassword &&
                        <p className="help is-danger">
                            {errorPassword}
                        </p>
                    }
                </div>
                <div className="field is-grouped is-grouped-right">
                    <div className="control">
                        <input
                            type="reset"
                            className="button is-link is-light"
                            value="Сброс"
                        />
                    </div>
                    <div className="control">
                        <input
                            type="submit"
                            className="button is-primary"
                            value="Войти"
                        />
                    </div>
                </div>
            </form>
        </section>
    );
};
