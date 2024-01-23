import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar } from 'antd'
import { Divider, List, Typography } from 'antd'
import styles from './index.module.scss'
import { useLangStore } from '@/store/lang'

export default function CourseDetail() {
  const { lang } = useLangStore()

  const {
    state: { courseData },
  } = useLocation()
  const titleListZh = [
    '开课学期: ',
    '上课地点: ',
    '上课时间: ',
    '课程类型: ',
    '学时: ',
    '学分: ',
    '主讲教师: ',
    '课程大纲: ',
    '参考书: ',
  ]
  const titleListEn = [
    'Semester: ',
    'Class location: ',
    'Class time: ',
    'Course type: ',
    'Credit hours: ',
    'Credits: ',
    'Lecturers: ',
    'Course syllabus: ',
    'Reference books: ',
  ]
  const [titleList, settitleList] = useState(titleListZh)
  useEffect(() => {
    if (lang === 'zh') {
      settitleList(titleListZh)
    } else {
      settitleList(titleListEn)
    }
  }, [lang])

  return (
    <div className={styles.root}>
      <div className="course_detail_container">
        <div className="course_intorduce">
          <h1 className="title">{courseData.title}</h1>
          <Divider style={{ margin: '30px 0' }} />
          <div className="course_intro">{courseData.intro}</div>
          <Divider style={{ margin: '30px 0' }} />
          <div className="course_time">
            <span className="big_weight_text">{titleList[0]}</span>
            {courseData.time}
          </div>
          <div className="course_time">
            <span className="big_weight_text">{titleList[1]}</span>
            {courseData.place}
          </div>
          <div className="course_time">
            <span className="big_weight_text">{titleList[2]}</span>
            {courseData.classTime}
          </div>
          <div className="course_type">
            <span className="big_weight_text">{titleList[3]}</span>
            {courseData.type}
          </div>
          <div className="course_type">
            <span className="big_weight_text">{titleList[4]}</span>
            {courseData.Classhour}
          </div>
          <div className="course_type">
            <span className="big_weight_text">{titleList[5]}</span>
            {courseData.Credithour}
          </div>
          <Divider style={{ margin: '30px 0' }} />
          <div className="teacher_content">
            {courseData.teacher.map((item1, index) => (
              <div key={index} className="teacher_item">
                <div className="teacher_name">
                  <span className="big_weight_text">{titleList[6]}</span>
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
          header={<div>{titleList[7]}</div>}
          bordered
          dataSource={Array.from(courseData.outline)}
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
