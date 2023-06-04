import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {auth} from "../services/firebase";
import {registerSuccess} from "../store/user/userAction";

export const Register = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [passwordConfirm, setPasswordConfirm] = useState('')

        const [errorEmail, setErrorEmail] = useState('')
        const [errorPassword, setErrorPassword] = useState('')
        const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('')

        const resetError = () => {
            setErrorEmail('');
            setErrorPassword('');
            setErrorPasswordConfirm('');
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
            if (!passwordConfirm) {
                setErrorPasswordConfirm('Повтор пароля не указан')
                return false
            }
            if (password !== '' && password !== passwordConfirm) {
                setErrorPassword('Пароли не совпадают')
                setErrorPasswordConfirm('Пароли не совпадают')
                return false
            }
            return true
        }
        const showErrorMessage = (error) => {
            if (error === 'auth/email-already-in-use') {
                setErrorEmail('Пользователь с таким адресов электронной почты уже зарегистрирован')
            }
            if (error === 'auth/weak-password') {
                setErrorPassword('Слишком простой пароль')
                setErrorPasswordConfirm('Слишком простой пароль')
            }
        }
        const handleFormSubmit = (event) => {
            event.preventDefault()
            if (validate()) {
                auth.createUserWithEmailAndPassword(email, password)
                    .then(({user}) => {
                        dispatch(registerSuccess(user))
                        navigate('/')
                    })
                    .catch((error) => {
                        showErrorMessage(error.code.toString())
                    })
            }
        }


        return (
            <section>
                <h1>Регистрация</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="field">
                        <label className="label">Адрес электронной почты</label>
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
                        <label className="label">Пароль</label>
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
                    <div className="field">
                        <label className="label">Повтор пароля</label>
                        <div className="control">
                            <input
                                type="password"
                                className="input"
                                onChange={(event) => setPasswordConfirm(event.target.value)}
                            />
                        </div>
                        {errorPasswordConfirm &&
                            <p className="help is-danger">
                                {errorPasswordConfirm}
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
                                value="Зарегистрироваться"
                            />
                        </div>
                    </div>
                </form>
            </section>
        );
    }
;
