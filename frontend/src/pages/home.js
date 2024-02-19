function home() {
    return (
        <div className="bg-primary vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-12">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder=""/>
                                <label for="floatingInput">NickName</label>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default home;