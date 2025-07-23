import { useState } from "react";
import logo from "../../assets/treina_recife_logo.png";

function Login() {
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[ManterConectado, setManterConectado] = useState(true);
    
    const enviarForumlario = () => {
        console.log({ email, senha, ManterConectado });
    }

    return (
        <div className="container">
            <div className="col-4">
        <img src={logo} alt="Treina Recife" width="350px" className="mb-5"/>

                <h1 className="mb-3">Login</h1>
                <div className="mb-3">
                    <label htmlFor="email-input" className="form-label">E-mail</label>
                  
                    <input
                     type="email" 
                     className="form-control" 
                     id="email-input" 
                     placeholder="name@example.com" 
                     defaultValue={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                </div>
                <div className="mb-3">
                
                    <label htmlFor="senha-input" className="form-label">Senha</label>
                    <input
                    type="password" 
                    className="form-control"
                     id="senha-input"
                     defaultValue={senha}
                     onChange={(e) => setSenha(e.target.value)}  />
                
                </div>
                <div className="form-check">
                
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="check-input"
                        defaultChecked={ManterConectado}
                        onChange={() => setManterConectado(!ManterConectado)}
                    />
                
                    <label class="form-check-label" htmlFor="check-input">
                        Matenha-me conectado
                    </label>
                </div>

                <button 
                type="button"
                className="btn btn-primary mb-5 w-100"
                onClick= {enviarForumlario}
                >
                 Entrar</button>



            </div>
                <a className="form-link" href="https://www.treinarecife.com.br/" target="_blank">Esqueci a senha</a>
        </div>
    )
}

export default Login; 