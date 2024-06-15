import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Login = () => {

    const [firstPlayer, setFirstPlayer] = useState("");
    const [secondPlayer, setSecondPlayer] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {if (isLogged === true) {Navigate("/game_design")}}, [isLogged]);
    
    async function loginUser(event) {
        event.preventDefault();
        const formData = new FormData();
        const data = Object.fromEntries(formData.entries());

        const login = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
        if (login.status === 200) {setIsLogged(true);}
        else {return {"Message": "Error"}}
    }

    return <>
        <h1>Tic-Toc_toe</h1>
        <div>Fill the form</div>

        <form onSubmit={loginUser}>
            <input type='text' name='player1' value={firstPlayer} onChange={
                (event) => {setFirstPlayer(event.target.value)
            }} />
            <br />
            <input type='text' name='player2' value={secondPlayer} onChange={
                (event) => {setSecondPlayer(event.target.value)}
            } />
            <br />
            <Link type='submit' to={"/game_design"}>START GAME</Link>
        </form>

        <div>Proved by Alireza Rezaeian 2024</div>
    </>;
};

export default Login;
