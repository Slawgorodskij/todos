import { Component } from "react";
import { Navigate } from "react-router-dom";
import { login } from "./api";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            errorEmail: '',
            errorPassword: '',
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.clearFormData();
    }

    clearFormData(){
        this.formData = {
            email: '',
            password: '',
        }
    }

    handleEmailChange(event){
        this.formData.email = event.target.value;
    }

    handlePasswordChange(event){
        this.formData.password = event.target.value;
    }

    resetErrorMessages(){
        this.setState((state)=>({
            errorEmail: '',
            errorPassword: '',
        }))
    }

    validate(){
        this.resetErrorMessages();
        if(!this.formData.email){
            this.setState((state)=>({
                errorEmail: 'Адрес электронной почты не указан',
            }));
            return false;
        }
        if(!this.formData.password){
            this.setState((state)=>({
                errorPassword: 'Пароль не указан',
            }));
            return false;
        }
        return true;
    }

    showErrorMessage(code){
        this.resetErrorMessages();
        if(code === 'auth/invalid-email'){
            this.setState((state)=>({
                errorEmail: 'Адрес электронной почты недействителен',
            }))
        }
        if(code === 'auth/user-disabled'){
            this.setState((state)=>({
                errorEmail: 'Вы отключены',
            }))
        }
        if(code === 'auth/user-not-found'){
            this.setState((state)=>({
                errorEmail: 'Нет пользователя, соответствующего данному электронному письму',
            }))          
        }
        if(code === 'auth/wrong-password'){
            this.setState((state)=>({
                errorEmail: 'Адрес электроннной почты или пароль неверен',
                errorPassword: 'Адрес электроннной почты или пароль неверен',
            }))
        }
    }

    async handleFormSubmit(event){
        event.preventDefault();
        if(this.validate()){
            const result = await login(this.formData.email, this.formData.password);
            if(typeof result !== 'object'){
            this.showErrorMessage(result);
        }
        }
    }
    
    render(){
        if(this.props.currentUser){
            return <Navigate to="/" replace />
        } else {
            return (
                <section>
                    <h1>Вход</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="field">
                            <label className="label">
                                Адрес электронной почты
                            </label>
                            <div className="control">
                                 <input
                                    type="email"
                                    className="input"
                                    onChange={this.handleEmailChange}
                                 />
                            </div>
                            {this.state.errorEmail &&
                            <p className="help is-danger">
                            {this.state.errorEmail}
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
                                    onChange={this.handlePasswordChange}
                                 />
                            </div>
                            {this.state.errorPassword &&
                            <p className="help is-danger">
                            {this.state.errorPassword}
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
            )
        }
    }
}