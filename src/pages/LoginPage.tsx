import React, { FormEvent, useState, useEffect } from "react";
import { useMultiStepForm } from "../hooks/useMultistepForm";
import LoginForm from "../Forms/LoginForm";
import RegistrationForm from "../Forms/RegistrationForm";
import { useLocation } from "react-router-dom";
import { useLoginPageContext } from "../contexts/LoginPageProvider"; // update with your file path
import { useParams } from "react-router-dom";

const LoginPage = () => {
  //Setting the DropDown menu from Nav bar
  //Start Here with Login Oage CO
  const location = useLocation();
  const { activeTab, setActiveTab } = useLoginPageContext();
  const { tab } = useParams<{ tab: string }>();
  const activeTabIndex = activeTab === "/signup" ? 1 : 0;
  const { currentStepIndex, step, steps, next, back, goTo } = useMultiStepForm(
    [<LoginForm />, <RegistrationForm />],
    activeTabIndex
  );

  useEffect(() => {
    setActiveTab(`/${tab}`);
  }, [tab, setActiveTab]);

  useEffect(() => {
    if (activeTab === "/signup") {
      console.log(activeTab);
      goTo(1);
    } else if (activeTab === "/login") {
      goTo(0);
    }
  }, [location, goTo, activeTab]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${currentStepIndex === 0 ? "active" : ""}`}
            onClick={back}
          >
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${currentStepIndex === 1 ? "active" : ""}`}
            onClick={next}
          >
            Register
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {step}
        {/* {activeTab === "login" && {<LoginForm />}} */}
        {/* {activeTab === "register" && <RegistrationForm />} */}
      </div>
    </>
  );
};

export default LoginPage;
