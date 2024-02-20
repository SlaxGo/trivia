import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SmoothCorners } from "react-smooth-corners";
import { useNavigate } from 'react-router'
import { motion } from "framer-motion";
import Countdown from 'react-countdown';
import he from 'he';

const Question = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const data = location.state;
  const [que, setQue] = useState([]);
  const [numQu, setNumQu] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [loading, setLoading] = useState(0);

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
        setLoading(data.response_code);
      })
      .catch(error => console.error(error));
  }, []);


  useEffect(() => {
    if (numQu !== 0 && numQu < 10) { setAnswers(shuffleArray([...que[numQu].incorrect_answers, que[numQu].correct_answer])); }
  }, [numQu])

  function handleAnswer(element) {
    if (element === que[numQu].correct_answer)setCorrectAnswer(correctAnswer + 1);
    setClickedIndex(element);
    setTimeout(() => {
      setNumQu(numQu + 1);
      setClickedIndex(null);
    }, 1500);
  }

  function handleTime() {
    setNumQu(numQu + 1);
  }

  const renderTimer = ({ seconds }) => {
    const bgClass = seconds <= 7 ? "bg-danger text-light" : "bg-3 text-3";
    return <div className={`position-absolute bottom-0 end-0 mb-4 me-4 ${bgClass} justify-content-center align-items-center d-flex`}
      style={{ height: '40px', width: '40px', borderRadius: '50%' }}>
      <span className="fw-semibold">{seconds}</span>
    </div>
  }

  return (
    <div className="bg-svg2 vh-100 d-flex align-items-center position-relative">
      {que && que.length > 0 && loading===0 ? (
        <>
          {numQu < 10 ? (
            <>
              <Countdown
                date={Date.now() + 20000}
                zeroPadTime={0}
                key={numQu}
                renderer={renderTimer}
                onComplete={handleTime}
              />

              <div className="container">
                <motion.div
                  key={numQu}
                  className="row justify-content-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.1,
                    scale: {
                      type: "spring",
                      damping: 15,
                      stiffness: 120,
                      mass: 0.8,
                      restDelta: 0.01,
                    },
                  }}
                >

                  <div className="col-12 col-lg-8">
                    <div className="container bg-3 shadow rounded-3 py-4 position-relative">
                      <div className="row">
                        <div className="col-12 text-3 fw-bold">
                          {que && que.length > 0 && he.decode(que[numQu].question)}
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>

                <div className="row mt-3 text-light">
                  {answers && answers.length > 0 && answers.map((element, index) => (
                    <motion.div
                      key={element}
                      type="button"
                      className="col-12 col-md-6 mt-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{


                        scale: {
                          delay: 0.35 + (index / 2),
                          duration: 0.5,
                          type: "spring",
                          damping: 15,
                          stiffness: 120,
                          mass: 0.8,
                          restDelta: 0.01,
                        },
                      }}
                      onClick={() => handleAnswer(element)}
                    >
                      <div className={`container h-100 transition-e-o shadow-sm border border-2 rounded-3 py-3 ${
                             clickedIndex === element
                             ? element === que[numQu].correct_answer
                               ? 'bg-success'
                               : 'bg-danger'
                             : clickedIndex && element === que[numQu].correct_answer
                             ? 'bg-success'
                             : 'bg-secondary'
                      }`}>
                        <div className="row align-items-center">
                          <div className="col-1 pe-0">{index + 1}</div>
                          <div className="col-11 fw-semibold">
                            {he.decode(element)}
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                  <div className="container bg-secondary shadow rounded-3 py-4 position-relative">
                    <div className="row">
                      <div className="col-12 text-light fw-bold text-center">
                        Hai ottenuto {correctAnswer} punti
                      </div>
                    </div>
                    <div className="row justify-content-center">
                  <div className="col-12 col-md-6 mt-3">
                    <SmoothCorners
                      corners="10"
                      type="button"
                      className={
                        "btn btn-secondary rounded-4 py-4 fw-bold transition-e-o"
                      }
                      style={{
                        width: "100%",
                        height: "2.9rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => navigate(0)}

                    >
                      Riprova &#x21bb;
                    </SmoothCorners>
                  </div>
                  <div className="col-12 col-md-6 mt-3">
                    <SmoothCorners
                      corners="10"
                      type="button"
                      className={
                        "btn btn-secondary rounded-4 py-4 fw-bold transition-e-o"
                      }
                      style={{
                        width: "100%",
                        height: "2.9rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => navigate("/")}

                    >
                      Nuova partita ▶
                    </SmoothCorners>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) :
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="container bg-secondary shadow rounded-3 py-4 position-relative">
                <div className="row mb-3">
                  <div className="col-12 text-light fw-bold text-center">
                    Caricamento non riuscito.
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-8 col-md-6">
                    <SmoothCorners
                      corners="10"
                      type="button"
                      className={
                        "btn btn-secondary rounded-4 py-4 fw-bold transition-e-o"
                      }
                      style={{
                        width: "100%",
                        height: "2.9rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => navigate(0)}

                    >
                      Riprova
                    </SmoothCorners>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </div>

  );
};

export default Question;