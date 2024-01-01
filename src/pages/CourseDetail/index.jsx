import React from "react"
import { useLocation } from "react-router-dom"
import { Avatar } from "antd"
import { Divider, List, Typography } from "antd"
import styles from "./index.module.scss"
export default function CourseDetail() {
  const {
    state: { courseData },
  } = useLocation()

  return (
    <div className={styles.root}>
      <div className="course_detail_container">
        <h1 className="marginBotton20">{courseData.title}</h1>
        <div className="course_title marginBotton20 fontSize18">
          课程：{courseData.title}
        </div>
        <div className="course_time fontSize18">
          开课学期：{courseData.time}
        </div>
        <div className="course_type marginBotton20 fontSize18">
          课程类型：{courseData.type}
        </div>
        {/* <div className="course_type">{courseData.teacher}</div> */}
        <div className="course_type fontSize18">
          学时：{courseData.Classhour}
        </div>
        <div className="course_type marginBotton20 fontSize18">
          学分：{courseData.Credithour}
        </div>
        <div className="teacher_content fontSize18">
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
        <div className="course_intro marginBotton20 fontSize18">
          课程简介：{courseData.intro}
        </div>
        <List
          header={<div>课程大纲</div>}
          bordered
          dataSource={courseData.outline}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark></Typography.Text> {item}
            </List.Item>
          )}
        />
        {/* {
          courseData.outline.map((item,index)=>((
            <div className="course_outLine" key={index}>
              {item}
            </div>

          )))
        } */}
        <div className="course_book">{courseData.book}</div>
      </div>
    </div>
  )
}
