import {Link } from 'react-router-dom';

const HomePage = () => {
    return <>
        <h1>Tic-Toc_toe</h1>
        <Link to={"/login"}>START</Link>
        <Link to={"/table"}>SCORES</Link>
        <div>Proved by Alireza Rezaeian 2024</div>
    </>;
};

export default HomePage;
