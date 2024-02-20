import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import he from 'he';

const Question = () => {
    const location = useLocation();
    const data = location.state;
    const [que, setQue] = useState([]);
    const [numQu, setNumQu] = useState(0);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.level}&type=multiple`)
            .then(response => response.json())
            .then((data) => {
                setQue(data.results);
                setAnswers([...data.results[0].incorrect_answers, data.results[0].correct_answer]);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const shuffledArray = answers;
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setAnswers(shuffledArray);
    }, [answers])

    useEffect(() => {
    if(numQu!=0) setAnswers([...que[numQu].incorrect_answers, que[numQu].correct_answer]);
    }, [numQu])

    return (
        <div className="bg-primary vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className="container bg-3 shadow rounded-3 py-4 position-relative">
                            <div className="row">
                                <div className="col-12 text-3 fw-bold">
                                    {que && que.length > 0 && he.decode(que[numQu].question)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 text-light">
                    {answers && answers.length > 0 && answers.map((element, index) => (
                        <div className="col-12 col-md-6 mt-3" onClick={() => setNumQu(numQu + 1)}>
                            <div className="container h-100 bg-secondary shadow-sm border border-2 rounded-3 py-2">
                                <div className="row align-items-center">
                                    <div className="col-1 pe-0">{index+1}</div>
                                    <div className="col-11">
                                        {he.decode(element)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;