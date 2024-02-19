import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Question = () => {
    const location = useLocation();
    const data = location.state;
    const [que, setQue] = useState([]);

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.level}&type=multiple`)
            .then(response => response.json())
            .then((data) => {
                setQue(data.results);
                console.log(data.results);
            })
            .catch(error => console.error(error));
    }, []);

    return (
<div className="bg-svg vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className="container bg-secondary shadow rounded-4 py-4 position-relative">
                            <div className="row">
                                <div className="col-12">
                                {que && que.length > 0 && que[0].question}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                    <div className="container bg-primary shadow rounded-4 py-2">
                            <div className="row">
                                <div className="col-12">
                                {que && que.length > 0 && que[0].question}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="container bg-secondary shadow rounded-4 py-2">
                            <div className="row">
                                <div className="col-12">
                                {que && que.length > 0 && que[0].question}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;