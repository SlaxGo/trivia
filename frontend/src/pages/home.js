function home() {
    return (
        <div className="bg-primary vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6 bg-secondary rounded-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="" />
                                        <label for="floatingInput">NickName</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                <button type="button" class="btn btn-primary">Primary</button>
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