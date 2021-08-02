import React from "react";
import Button from "../../Button";
import "./styles.scss";
import checkIcon from "../../../assets/check.svg";
import crossIcon from "../../../assets/cross.svg";

const EnrollOption = ({ enrollPlans, dark }) => {
  return (
    <div className="enroll_options">
      {enrollPlans.map((plan, index) => {
        return (
          <div key={index} className="enroll_option_box">
            <div className="title">
              <h2> {plan.category} User</h2>
              <h4>
                <span> {`$${plan.price}`}</span>/month
              </h4>
              <div className="line"></div>
            </div>
            <div className="categories_options">
              {plan.options.map((option, index) => {
                return (
                  <div key={index} className="category">
                    <img
                      src={option.included ? checkIcon : crossIcon}
                      alt="check-cross-icon"
                    />
                    <p> {option.name} </p>
                  </div>
                );
              })}
            </div>
            <div className="enroll_btn">
              {index === 1 ? (
                <Button customClass="plan_btn_premium">Get Started</Button>
              ) : (
                <Button customClass="plan_btn">Get Started</Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EnrollOption;
