import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/themeContext";
import TeacherCard from "./TeacherCard";
import Button from "../Button";
import profileImg1 from "../../assets/profile1.png";
import profileImg2 from "../../assets/profile2.png";
import profileImg3 from "../../assets/profile3.png";
import { uuid } from "uuidv4";
import "./styles.scss";

const TeachersInfo = [
  {
    id: uuid(),
    name: "Jay",
    image: profileImg1,
    language: "German",
    description:
      "I’ve been teaching German for more  than 10 years. I really love teaching and seeing how students progress over time. ",
  },
  {
    id: uuid(),
    name: "Isabelle",
    image: profileImg2,
    language: "English",
    description:
      "I’ve been teaching English in different countries for the past five years. I love getting to know my students.",
  },
  {
    id: uuid(),
    name: "Aelia",
    image: profileImg3,
    language: "Spanish",
    description:
      "I really enjoy teaching so much and love to meet my students, who come from so different parts of the world",
  },
];

const Teachers = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <section id="teachers" className="teachers_container">
      <h2>1200+ native-speaking teachers</h2>
      <h4 style={{ color: dark ? "white" : "#081a45" }}>
        Our teachers are qualified professionals with an overall student rating
        of ​4.7out of 5.
      </h4>
      <TeacherCard teachersInfo={TeachersInfo} />
      <div className="load_btn">
        <Button customClass="teachers_btn"> See More </Button>
      </div>
    </section>
  );
};

export default Teachers;
