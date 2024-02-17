import React from "react";
import "./usercard.css";
export default function UserCard() {
  return (
    <div className="container user-card profile-page mt-2">
      <div class="card profile-header">
        <div className="body">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="profile-image float-md-right">
                {" "}
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <h4 className="m-t-0 m-b-0">
                <strong>Michael</strong> Deo
              </h4>
              <span className="job_post">Ui UX Designer</span>
              <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
              <div>
                <button className="btn btn-primary btn-round btn-simple">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
