import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TelaDeLogin = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        // Se a autenticação for bem-sucedida, redirecione para /home
        navigate('/home');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default TelaDeLogin;