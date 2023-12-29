import React from "react";
import styles from "./index.module.scss";
import HeaderImage from "@/components/HeaderImage";

import "@/assets/styles/common.scss";
export default function Course() {
  const curseList = [
    {
      title: "量子计算基础理论与软件系统",
      time: "秋冬学期",
      type: "本科生课",
      intro:
        "量子计算（Quantum Computating）是一种遵循量子力学规律调控量子比特（Qubit）进行计算的新型计算模式，相较于经典计算机具有指数级的算力优势，是一种具有前瞻性、战略性的核心发展技术。本课程讲授量子计算的基本思想与理论概念、量子计算机的物理原理与系统设计、各类量子计算交叉应用。除此之外，课程还将介绍浙江大学物理学院自研的超导量子芯片（邀请物理学院王浩华院长团队介绍）与计算机学院自研的太元量子云平台，引导学生掌握量子计算编程基础，并使用太元云平台开展课程实验教学。",
      teacher: [
        {
          name: "尹建伟",
          photo: "",
        },
        {
          name: "卢丽强",
          photo: "",
        },
      ],
      Classhour: "64",
      Credithour: "3",
    },
    {
      title: "量子计算软件系统",
      time: "秋学期",
      type: "研究生课",
      intro:
        "量子计算（Quantum Computating）是一种遵循量子力学规律调控量子比特（Qubit）进行计算的新型计算模式，相较于经典计算机具有指数级的算力优势，是一种具有前瞻性、战略性的核心发展技术。本课程讲授量子计算的基本理论、量子计算机的核心软件系统设计方法。除此之外，课程还将介绍浙江大学计算机学院自研的太元量子云平台，引导学生掌握量子计算编程基础，并使用太元云平台开展课程实验教学。",
      teacher: [
        {
          name: "卢丽强",
          photo: "",
        },
      ],
      Classhour: "32",
      Credithour: "2",
    },
  ];
  return (
    <div className={styles.root}>
      <HeaderImage />
      <div className="course_container">
        <div className="curse_content">
        {curseList.map((item, index) => (
          <div key={index} className="course_item">
            <div className="course_title">课程：{item.title}</div>
            <div className="course_time">开课学期：{item.time}</div>
            <div className="course_type">课程类型：{item.type}</div>
            {/* <div className="course_type">{item.teacher}</div> */}
            <div className="course_type">学时：{item.Classhour}</div>
            <div className="course_type">学分：{item.Credithour}</div>
            <div className="teacher_content">
              {item.teacher.map((item1,index)=>((
                <div key={index} className="teacher_item">
                  <div className="teacher_name">{item1.name}</div>
                  <div className="teacher_photo">
                    
                  </div>
                </div>
              )))}
            </div>
            <div className="course_intro">课程简介：{item.intro}</div>
          </div>
        ))}
        </div>

     
      </div>
    </div>
  );
}
