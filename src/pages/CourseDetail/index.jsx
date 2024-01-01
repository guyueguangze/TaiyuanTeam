import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar } from "antd";
import styles from "./index.module.scss";
export default function CourseDetail() {
  const {
    state: { courseData },
  } = useLocation();

  return (
    <div className={styles.root}>
      <div className="course_detail_container">
        <h1>{courseData.title}</h1>
        <div className="course_title">课程：{courseData.title}</div>
        <div className="course_time">开课学期：{courseData.time}</div>
        <div className="course_type">课程类型：{courseData.type}</div>
        {/* <div className="course_type">{courseData.teacher}</div> */}
        <div className="course_type">学时：{courseData.Classhour}</div>
        <div className="course_type">学分：{courseData.Credithour}</div>
        <div className="teacher_content">
          {courseData.teacher.map((item1, index) => (
            <div key={index} className="teacher_item">
              <div className="teacher_name">主讲教师：{item1.name}</div>
              <div className="teacher_photo">
                <Avatar
                  size={60}
                  src={<img src={item1.photo} alt="avatar" />}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="course_intro">课程简介：{courseData.intro}</div>
        {
          courseData.outline.map((item,index)=>((
            <div className="course_outLine" key={index}>
              {item}
            </div>

          )))
        }
        <div className="course_book">
          {courseData.book}
        </div>
      </div>
    </div>
  );
}
