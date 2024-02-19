import Logo from '../images/trivia.png'

function home() {
    return (
        <div className="bg-primary vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="container bg-secondary rounded-3 pt-5 pb-4 position-relative">
                            <img src={Logo} className="position-absolute top-0 start-50 translate-middle w-50" alt='Trivia Logo'></img>
                            <div className="row">
                                <div className="col-12">
                                    <div class="form-floating my-3">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="" />
                                        <label for="floatingInput">NickName</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <button type="button" class="btn btn-secondary fw-bold">Play ▶</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;