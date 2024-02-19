
import { SmoothCorners } from "react-smooth-corners";

import Slider from "../components/home/slider";
import Select from "../components/home/select";
import Logo from '../images/trivia.png'

function Home() {

    return (
        <div className="bg-svg vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <div className="container bg-secondary shadow rounded-4 pt-5 pb-4 position-relative">
                            <img src={Logo} className="position-absolute top-0 start-50 translate-middle w-50" alt='Trivia Logo' style={{maxWidth: "200px"}}></img>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8">
                                    <div className="form-floating mt-4 mb-3">
                                        <input type="text" className="form-control rounded-3" id="nickname" placeholder="" />
                                        <label htmlFor="nickname">NickName</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-112 col-md-6">
                                    <Select />
                                </div>
                            </div>
                            <div className="row justify-content-center mb-3">
                                <div className="col-11 col-md-6">
                                    <Slider />
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
                                    >
                                        Play ▶
                                    </SmoothCorners>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;