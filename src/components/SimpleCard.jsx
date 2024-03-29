import React from "react";
import avatar from "../assets/index.jpg";

const SimpleCard = ({ userData, deleteCard, handleDetails }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="d-flex justify-content-between p-3">
          <div className="d-flex flex-column ml-auto mt-3">
            <h5>{userData.firstName ?? userData.name}</h5>
            <div className="d-flex mt-2">
              <img
                src="https://cdn3.iconfinder.com/data/icons/feather-5/24/phone-512.png"
                alt=""
                width="18px"
                height="15px"
                className="m-1"
              />
              <p className="card-text">{userData.email}</p>
            </div>
            <div className="d-flex mt-1">
              <img
                src="https://cdn3.iconfinder.com/data/icons/feather-5/24/phone-512.png"
                alt=""
                width="18px"
                height="15px"
                className="m-1"
              />
              <p className="card-text">{userData.phone}</p>
            </div>
            <div className="mt-4">
              <button className="btn btn-dark">Edit</button>
              <button className="btn btn-danger m-2" onClick={deleteCard}>
                Delete
              </button>
              <button className="btn btn-warning" onClick={handleDetails}>
                Details
              </button>
            </div>
          </div>
          <div className="d-flex flex-column mr-auto">
            <button className="btn btn-primary">Personal</button>
            <img
              className="mt-1"
              src={avatar}
              alt=""
              width="150px"
              height="150px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleCard;
