import {useEffect, useState} from "react";
import {redirect} from "react-router-dom";

const Home = () => {
    const [ user, setUser ] = useState(null);
    const [ page, setPage ] = useState(null);

    useEffect(() => {
        let userLocal = JSON.parse(window.localStorage.getItem("user"));
        if (userLocal) {
            setUser(userLocal);
            loadPageByRole(userLocal.role);
        } else {
            window.location.href = "/";
        }
    }, []);

    const getRole = (role) => {
        if (role === 0)
            return 'Estudiante';
        return 'Profesor';
    }

    const loadPageByRole = (role) => {
        console.log(role);
        if (role === 0) {
            setPage(<div>
                Gestiones Académicas
            </div>);
        } else {
            setPage(<div>
                Carga de Notas
            </div>);
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setPage(null);
        window.location.href = "/";
    }

    return (
        <div className={"container mt-5"}>
            {user ? (
                <>
                    <h1 className={"is-size-1"}>Bienvenido {user.username} </h1>
                    <h2>Tu rol es: {getRole(user.role)}</h2>
                </>
            ) : null}
            <hr/>
            {page}
            <hr/>

            <button onClick={logout} className="button mt-4">Cerrar Sesión</button>
        </div>
    );
};

export default Home;