import React from "react";
import "./Company.css";

const Company = (props) => {
  const { id, company, img, ceo, salary } = props.company;
  const handleAccountBtn = () =>{
    console.log('Clicked')
    const salaryCeo = company.salary;
    
  }
  return (
    <div className="container g-3 mx-3 ">
      <div className="card text-center h-100 mt-3 bg-dark">
        <img
          className="card-img-top smallimg mx-auto shadow-lg p-3 mb-5 bg-body rounded mt-2"
          src={img}
          alt="Card image cap"
        />
        <div className="card-block catCard mt-3">
          <h1 className="card-title text-primary">{company}</h1>
          <h4 className="card-text text-success">{ceo}</h4>
          <h5 className="card-text text-warning">${salary}</h5>
        </div>

        <div class="card-footer bg-white text-dark border-0">
          <small class="text-muted">
            {" "}
            <button onClick={()=> handleAccountBtn()} type="button" className="btn btn-info text-white">
              Hire me{" "}
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Company;
