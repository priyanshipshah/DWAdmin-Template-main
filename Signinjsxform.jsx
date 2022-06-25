<>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>Dashboard - DWAdmin</title>
  {/* Bootstrap CSS*/}
  <link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.css" />
  {/* Style CSS (White)*/}
  <link rel="stylesheet" href="assets/css/White.css" />
  {/* Style CSS (Dark)*/}
  <link rel="stylesheet" href="assets/css/Dark.css" />
  {/* FontAwesome CSS*/}
  <link rel="stylesheet" href="assets/vendors/fontawesome/css/all.css" />
  {/* Icon LineAwesome CSS*/}
  <link
    rel="stylesheet"
    href="assets/vendors/lineawesome/css/line-awesome.min.css"
  />
  <div className="auth-dark">
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" title="Dark Or White" />
        <div className="slider round" />
      </label>
    </div>
  </div>
  <div className="container">
    <div className="row vh-100 d-flex justify-content-center align-items-center auth">
      <div className="col-md-7 col-lg-5">
        <div className="card">
          <div className="card-body">
            <h3 className="mb-5">SIGN IN</h3>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="row">
                <div className="col-6 text-left">
                  <div className="form-group form-check ml-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label ml-2" htmlFor="remember">
                      Remember
                    </label>
                  </div>
                </div>
                <div className="col-6 text-right">
                  <a href="forgot.html">Forgot your password?</a>
                </div>
              </div>
              <div className="form-group my-4">
                <a
                  href="../index.html"
                  className="btn btn-linear-primary btn-rounded px-5"
                >
                  Sign in
                </a>
              </div>
              <p>
                New member?{" "}
                <a href="signup.html" id="create_account">
                  Create account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Library Javascipt*/}
</>
