import React from "react";
import UserCard from "./UserCard/UserCard";
export default function Patients() {
  return (
    <div className="mt-4">
      <h4 style={{ fontFamily: "sans-serif" }} className="text-muted">
        Total Patients: 40
      </h4>
      <hr />
      <div className="row">
        <div className="col col-6">
          <UserCard />
        </div>
        <div className="col col-6">
          <UserCard />
        </div>
        <div className="col col-6">
          <UserCard />
        </div>
      </div>
    </div>
  );
}
