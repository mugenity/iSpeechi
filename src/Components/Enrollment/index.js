import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import { uuid } from "uuidv4";
import EnrollOption from "./EnrollOption";
import "./styles.scss";

const EnrollPlans = [
  {
    id: uuid(),
    category: "Standard",
    price: "14,90",
    options: [
      {
        name: "5 language in a month",
        included: true,
      },
      {
        name: "10 exercise in a day",
        included: true,
      },
      {
        name: "15 live speaking",
        included: true,
      },
      {
        name: "1 level test",
        included: true,
      },
      {
        name: "Achievement Award",
        included: false,
      },
      {
        name: "Special education set",
        included: false,
      },
    ],
  },
  {
    id: uuid(),
    category: "Premium",
    price: "34,90",
    options: [
      {
        name: "5 language in a month",
        included: true,
      },
      {
        name: "10 exercise in a day",
        included: true,
      },
      {
        name: "15 live speaking",
        included: true,
      },
      {
        name: "1 level test",
        included: true,
      },
      {
        name: "Achievement Award",
        included: true,
      },
      {
        name: "Special education set",
        included: false,
      },
    ],
  },
  {
    id: uuid(),
    category: "Diamond",
    price: "54,90",
    options: [
      {
        name: "5 language in a month",
        included: true,
      },
      {
        name: "10 exercise in a day",
        included: true,
      },
      {
        name: "15 live speaking",
        included: true,
      },
      {
        name: "1 level test",
        included: true,
      },
      {
        name: "Achievement Award",
        included: true,
      },
      {
        name: "Special education set",
        included: true,
      },
    ],
  },
];

const Enrollment = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section id="enroll" className="enroll_container">
      <div className="enroll_title">
        <h2 style={{ color: dark ? "white" : "#081a45" }}>
          How much do I have to pay ?
        </h2>
        <h5>
          You can choose the most suitable membership type for you and start
          right away.
        </h5>
      </div>
      <EnrollOption dark={dark} enrollPlans={EnrollPlans} />
    </section>
  );
};

export default Enrollment;
