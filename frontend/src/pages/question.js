import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Question = () => {
    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=medium&type=multiple`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Category: {data.category}</p>
            <p>level: {data.level}</p>
        </div>
    );
};

export default Question;