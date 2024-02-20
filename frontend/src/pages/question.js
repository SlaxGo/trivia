import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Countdown from 'react-countdown';
import he from 'he';

const Question = () => {
    const location = useLocation();
    const data = location.state;
    const [que, setQue] = useState([]);
    const [numQu, setNumQu] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(0);

    function shuffleArray(array) {
        console.log(array)
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        console.log(shuffledArray)
        return shuffledArray;
      }

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.level}&type=multiple`)
            .then(response => response.json())
            .then((data) => {
                setQue(data.results);
                setAnswers(shuffleArray([...data.results[0].incorrect_answers, data.results[0].correct_answer]));
            })
            .catch(error => console.error(error));
    }, []);


    useEffect(() => {
        if (numQu != 0 && numQu < 10){setAnswers(shuffleArray([...que[numQu].incorrect_answers, que[numQu].correct_answer]));    }
    }, [numQu])

    function handleAnswer(element) {
        if (element == que[numQu].correct_answer){ alert("Giusto"); setCorrectAnswer(correctAnswer+1);}
        else alert("Sbagliato")
        setNumQu(numQu + 1);
    }

    function handleTime() {
        setNumQu(numQu + 1);
    }

    const renderTimer = ({ seconds }) => {
        const bgClass = seconds <= 10 ? "bg-danger text-light" : "bg-3 text-3";
        return <div className={`position-absolute bottom-0 end-0 mb-4 me-4 ${bgClass} justify-content-center align-items-center d-flex`}
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}>
            <span className="fw-semibold">{seconds}</span>
        </div>
    }

    return (
        <div className="bg-primary vh-100 d-flex align-items-center position-relative">
        {numQu <10 ? (
          <>
            <Countdown
              date={Date.now() + 45000}
              zeroPadTime={0}
              key={numQu}
              renderer={renderTimer}
              onComplete={handleTime}
            />
      
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
                  <div key={index} type="button" className="col-12 col-md-6 mt-3" onClick={() => handleAnswer(element)}>
                    <div className="container h-100 bg-secondary shadow-sm border border-2 rounded-3 py-2">
                      <div className="row align-items-center">
                        <div className="col-1 pe-0">{index + 1}</div>
                        <div className="col-11">
                          {he.decode(element)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                  <div className="container bg-3 shadow rounded-3 py-4 position-relative">
                    <div className="row">
                      <div className="col-12 text-3 fw-bold">
                        Hai ottenuto {correctAnswer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
      
    );
};

export default Question;