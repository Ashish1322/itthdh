import { useContext, useState } from "react";
import SignupImage from "../assets/signup.png";
import { Link } from "react-router-dom";

import { HisContext } from "../HisContext";
export default function Signup() {
  const { signup } = useContext(HisContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  return (
    <section className=" d-flex align-items-center" style={{ height: "70vh" }}>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={SignupImage} className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <h3 className="mb-3  me-3" style={{ fontFamily: "sans-serif" }}>
                Register Yourself Now !
              </h3>

              {/* Email input */}
              <div className="form-outline mb-3">
                <input
                  onChange={(e) => setName(e.currentTarget.value)}
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="row">
                <div className="form-outline mb-3 col">
                  <input
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form-outline mb-3 col">
                  <input
                    onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                    type="number"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-3 col">
                  <input
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-outline mb-3 col">
                  <select
                    onChange={(e) => setGender(e.currentTarget.value)}
                    className="form-select"
                    style={{ height: "48px" }}
                    aria-label="Default select example"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}

                <div className="text-center text-lg-start mt-2 pt-2">
                  <button
                    onClick={() =>
                      signup(email, password, phoneNumber, gender, name)
                    }
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/" className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
