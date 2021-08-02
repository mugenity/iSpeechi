import React from "react";
import "./styles.scss";

const TeacherCard = ({ teachersInfo }) => {
  return (
    <div className="teachers_card_container">
      {teachersInfo.map((teacher) => {
        return (
          <div key={teacher.id} className="teacher_card">
            <div className="profile_img">
              <img src={teacher.image} alt="profile-img" />
            </div>
            <div className="text_content">
              <div className="header_card">
                <h3> {teacher.name} </h3>
                <div className="line"></div>
                <h5> {teacher.language} Teacher</h5>
              </div>
              <div className="description">
                <p>{teacher.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeacherCard;
