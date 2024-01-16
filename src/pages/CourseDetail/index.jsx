import React from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar } from 'antd'
import { Divider, List, Typography } from 'antd'
import styles from './index.module.scss'
export default function CourseDetail() {
  const {
    state: { courseData },
  } = useLocation()

  return (
    <div className={styles.root}>
      <div className="course_detail_container">
        {/* <div className="course_item">
                <div className="course_title">
                  <span className="big_weight_text">课程：</span> {courseData.title}
                </div>
                <div className="course_time">
                  <span className="big_weight_text">开课学期：</span>
                  {courseData.time}
                </div>
                <div className="course_type">
                  <span className="big_weight_text">课程类型：</span>
                  {courseData.type}
                </div>
                <div className="course_type">
                  <span className="big_weight_text">学时：</span>
                  {courseData.Classhour}
                </div>
                <div className="course_type">
                  <span className="big_weight_text">学分：</span>
                  {courseData.Credithour}
                </div>
                <div className="teacher_content">
                  {courseData.teacher.map((item1, index) => (
                    <div key={index} className="teacher_item">
                      <div className="teacher_name">
                        <span className="big_weight_text">主讲教师：</span>
                        {item1.name}
                      </div>
                      <div className="teacher_photo">
                        <Avatar
                          size={60}
                          src={<img src={item1.photo} alt="avatar" />}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="course_intro">
                  <span className="big_weight_text">课程简介：</span>
                  {courseData.intro}
                </div>
              </div> */}
        <div className="course_intorduce">
          <h1 className="title">{courseData.title}</h1>
          <Divider style={{ margin: '30px 0' }} />
          <div className="course_intro">{courseData.intro}</div>
          <Divider style={{ margin: '30px 0' }} />
          <div className="course_time">
            <span className="big_weight_text">开课学期：</span>
            {courseData.time}
          </div>
          <div className="course_time">
            <span className="big_weight_text">上课地点：</span>
            {courseData.place}
          </div>
          <div className="course_time">
            <span className="big_weight_text">上课时间：</span>
            {courseData.classTime}
          </div>
          <div className="course_type">
            <span className="big_weight_text">课程类型：</span>
            {courseData.type}
          </div>
          <div className="course_type">
            <span className="big_weight_text">学时：</span>
            {courseData.Classhour}
          </div>
          <div className="course_type">
            <span className="big_weight_text">学分：</span>
            {courseData.Credithour}
          </div>
          <Divider style={{ margin: '30px 0' }} />
          <div className="teacher_content">
            {courseData.teacher.map((item1, index) => (
              <div key={index} className="teacher_item">
                <div className="teacher_name">
                  <span className="big_weight_text">主讲教师：</span>
                  {item1.name}
                </div>
                <div className="teacher_photo">
                  <Avatar
                    size={60}
                    src={<img src={item1.photo} alt="avatar" />}
                  />
                </div>
              </div>
            ))}
          </div>
          <Divider style={{ margin: '30px 0' }} />
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
