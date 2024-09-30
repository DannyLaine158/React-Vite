import {useState} from "react";
import data from '../data/data.json';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ role, setRole ] = useState(0);
    const [ info, setInfo ] = useState(false);
    const navigate = useNavigate();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    const login = (e) => {
        e.preventDefault();
        let isLoggedIn = false;
        let user = {};

        for (let i = 0; i < data.length; i++) {
            user = data[i];
            if ( user.username === username &&
                    user.role.toString() === role.toString() &&
                    user.password === password ) {
                isLoggedIn = true;
                break;
            }
        }

        if (isLoggedIn) {
            console.log("Bienvenido");
            setInfo(false);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/home");
        } else {
            clearData();
        }
    }

    const clearData = () => {
        setInfo(true);
    }

    return (
        <div className={"container"}>
            <section className={"mt-5"}>
                <h1 className={"is-size-1"}>Iniciar Sesion</h1>
                <div className="card has-background-grey" style={{padding: "5%"}}>
                    <div className="card-body">
                        <div className="field">
                            <label className="label">User</label>
                            <div className="control">
                                <input style={{padding: '3%'}} onChange={handleChangeUsername}
                                       className="input" type="text" placeholder="e.g Alex Smith"/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input style={{padding: '3%'}} onChange={handleChangePassword}
                                       className="input" type="password" placeholder="**********"/>
                            </div>
                        </div>

                        <div className="control p-2" onChange={handleRoleChange}>
                            <label className="radio p-2">
                                <input type="radio" value={0} name="answer"/>
                                Estudiante
                            </label>
                            <label className="radio">
                                <input type="radio" value={1} name="answer"/>
                                Profesor
                            </label>
                        </div>

                        <button onClick={login} className="button mt-4">Iniciar Sesión</button>
                    </div>
                </div>

                { info ? (
                    <article className="message is-danger">
                        <div className="message-header">
                            <p>Danger</p>
                            <button className="delete" aria-label="delete"></button>
                        </div>
                        <div className="message-body">
                            Error&nbsp;
                            <strong>Las credenciales no coinciden</strong>
                        </div>
                    </article>
                ) : <></>}
            </section>
        </div>
    );
};

export default Login;