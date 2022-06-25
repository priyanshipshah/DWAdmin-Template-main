<>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>Dashboard - KotakAdmin</title>
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
    <div className="row vh-100 d-flex justify-content-center align-items-center auth my-4">
      <div className="col-md-7 col-lg-5">
        <div className="card">
          <div className="card-body">
            <h3 className="mb-5">SIGN UP</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
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
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Role:</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  defaultValue="Bike"
                />
                <label htmlFor="vehicle1">Admin/HR</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  defaultValue="Car"
                />
                <label htmlFor="vehicle2"> Employee</label>
                <br />
                {/* <input type="" class="form-control mb-1" value=""> */}
                {/* <option value="" selected="selected">Unnati primary skills</option> */}
              </div>
              <p className="px-5">
                Your password is 8-20 characters, includes on letter and one
                number
              </p>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirm_password"
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div>
              <div className="form-group form-check text-left ml-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agree"
                />
                <label className="form-check-label ml-2" htmlFor="agree">
                  I agree to the{" "}
                  <a href="">Terms of Service &amp; Privacy Policy</a>
                </label>
              </div>
              <div className="form-group">
                <a
                  href="signin.html"
                  className="btn btn-linear-primary btn-rounded"
                >
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Library Javascipt*/}
</>
