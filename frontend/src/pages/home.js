import { useEffect, useState } from "react";
import { SmoothCorners } from "react-smooth-corners";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Slider from "../components/home/slider";
import Select from "../components/home/select";
import Logo from '../images/trivia.png'

function Home() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [selCategory, setSelCategory] = useState("");
    const [level, setLevel] = useState(0);
    const [nameError, setNameError] = useState("");

    function handlePlay() {
        if (!name) {
            setNameError(true);
            return;
        }
        navigate("/question", { state: { name: name, category: selCategory, level: level } })
    }

    return (
        <div className="bg-svg vh-100 d-flex align-items-center">
            <motion.div
                className="col-12 text-center text-md-start"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 8,
                        stiffness: 30,
                        restDelta: 0.01,
                    },
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <div className="container bg-secondary shadow rounded-4 pt-5 pb-4 position-relative">
                                <img src={Logo} className="position-absolute top-0 start-50 translate-middle w-50" alt='Trivia Logo' style={{ maxWidth: "200px" }}></img>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-8">
                                        <div className="form-floating mt-4 mb-3">
                                            <input type="text" className={`form-control rounded-3 ${nameError ? 'is-invalid' : ''}`} id="nickname" placeholder=""
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <label htmlFor="nickname">NickName</label>
                                            <div className=" ms-1 invalid-feedback text-dark fw-semibold">
                                                Please choose a nickname.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-3">
                                    <div className="col-12 col-md-8">
                                        <Select setSelCategory={setSelCategory} />
                                    </div>
                                </div>
                                <div className="row justify-content-center mb-3">
                                    <div className="col-11 col-md-6">
                                        <Slider level={level} setLevel={setLevel} />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-6">
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
                                            onClick={() => handlePlay()}
                                        >
                                            Play ▶
                                        </SmoothCorners>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;