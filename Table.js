import { useEffect, useState } from "react";

const Table = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http:/127.0.0.1:8000/table", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((res) => {
                res.json().then((data) => setPlayers(data));
            });
        })();
    }, []);

    return <div>
        {players.map((player) => (
            <div></div>
        ))}
    </div>;
};

export default Table;
