import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import HeaderImage from '@/components/HeaderImage'
import { Avatar } from 'antd'
import jianweiyin from '@/assets/image/team/jianweiyin.png'
import liqianglu from '@/assets/image/team/liqianglu.png'
import '@/assets/styles/common.scss'
export default function Course() {
  const curseList = [
    {
      title: '量子计算基础理论与软件系统',
      time: '秋冬学期',
      type: '本科生课',
      place: '浙江大学玉泉校区',
      classTime: '',
      intro:
        '量子计算（Quantum Computing）是一种遵循量子力学规律调控量子比特（Qubit）进行计算的新型计算模式，相较于经典计算机具有指数级的算力优势，是一种具有前瞻性、战略性的核心发展技术。本课程讲授量子计算的基本思想与理论概念、量子计算机的物理原理与系统设计、各类量子计算交叉应用。除此之外，课程还将介绍浙江大学物理学院自研的超导量子芯片（邀请物理学院王浩华院长团队介绍）与计算机学院自研的太元量子云平台，引导学生掌握量子计算编程基础，并使用太元云平台开展课程实验教学。',
      teacher: [
        {
          name: '尹建伟',
          photo: jianweiyin,
        },
        {
          name: '卢丽强',
          photo: liqianglu,
        },
      ],
      Classhour: '64',
      Credithour: '3',
      outline: [
        ' 01 计算起源与课程引言',
        '02 量子线性代数基础（一）：量子态与量子门',
        '03 量子线性代数基础（二）：泡利矩阵与算符',
        '04 量子线性代数基础（三）：特征值求解，张量积',
        '05 量子线性代数基础（四）：状态空间演化与量子测量',
        '06 通用量子门，量子图灵机，量子电路模型',
        '07 常用量子算法：量子傅里叶变换，量子质因数分解（Shor算法）',
        '08 常用量子算法：量子搜索算法（Grover算法），VQE算法',
        '09 量子计算机物理实现与天目芯片（邀请物理系王震、宋超授课）',
        '10 经典计算机发展简史与经典计算机体系结构',
        '11 量子计算机体系结构（一）超导量子芯片操控系统',
        '12 量子计算机体系结构（二）超导量子芯片性能标定与优化',
        '13 量子计算机体系结构（三）量子计算机指令集',
        '14 量子计算编程语言',
        '15 量子计算编译器（一）：量子计算编译概念',
        '16 量子计算编译器（二）：量子计算软件层编译优化方法',
        '17 量子计算编译器（三）：量子计算硬件层编译优化方法',
        '18 IBM Qiskit量子计算编程框架介绍',
        '19 浙江大学太元量子云平台介绍',
        '20 量子计算编程案例（一）',
        '21 量子计算编程案例（二）',
        '22 探讨：量子编程框架与深度学习框架设计理念的对比',
        '23 分布式量子计算（一）：基于比特拆分的分布式计算与基于量子门拆分的分布式计算',
        '24 分布式量子计算（二）：分布式计算的可行性，分布式计算的优化方法',
        '25 量子应用（一）：量子金融',
        '26 量子金融编程实践与算法优化方法',
        '27 量子应用（二）：量子机器学习',
        '28 量子机器学习与经典机器学习的区别，计算可解释性',
        '29 量子计算纠错方法简介',
        '30 Google表面码纠错，表面码代码实现',
        '31 量子信息论简介',
        '32 量子隐形传态与量子通信网络',
      ],
      book: '参考书：《量子信息与量子计算》（10周年版）- Michael A．Nielsen, Isaac L．Chuang',
    },
    {
      title: '量子计算软件系统',
      time: '秋学期',
      type: '研究生课',
      place: '浙江大学玉泉校区',
      classTime: '',
      intro:
        '量子计算（Quantum Computing）是一种遵循量子力学规律调控量子比特（Qubit）进行计算的新型计算模式，相较于经典计算机具有指数级的算力优势，是一种具有前瞻性、战略性的核心发展技术。本课程讲授量子计算的基本理论、量子计算机的核心软件系统设计方法。除此之外，课程还将介绍浙江大学计算机学院自研的太元量子云平台，引导学生掌握量子计算编程基础，并使用太元云平台开展课程实验教学。',
      teacher: [
        {
          name: '卢丽强',
          photo: liqianglu,
        },
      ],
      Classhour: '32',
      Credithour: '2',
      outline: [
        ' 01 计算起源与课程引言',
        '02 量子线性代数基础（一）：量子态与量子门',
        '03 量子线性代数基础（二）：泡利矩阵与算符',
        '04 量子线性代数基础（三）：特征值求解，张量积',
        '05 量子线性代数基础（四）：状态空间演化与量子测量',
        '06 通用量子门，量子图灵机，量子电路模型',
        '07 常用量子算法：量子傅里叶变换，量子质因数分解（Shor算法）',
        '08 常用量子算法：量子搜索算法（Grover算法），VQE算法',
        '09 经典计算机发展简史与经典计算机体系结构',
        '10 量子计算机体系结构（一）超导量子芯片操控系统',
        '11 量子计算机体系结构（二）超导量子芯片性能标定与优化',
        '12 量子计算机体系结构（三）量子计算机指令集',
        '13 量子计算编程语言',
        '14 量子计算编译器（一）：量子计算编译概念',
        '15 量子计算编译器（二）：量子计算软件层编译优化方法',
        '16 量子计算编译器（三）：量子计算硬件层编译优化方法',
      ],
      book: '参考书：《量子信息与量子计算》（10周年版）- Michael A．Nielsen, Isaac L．Chuang',
    },
  ]
  return (
    <div className={styles.root}>
      <HeaderImage />
      <div className="course_container">
        <div className="curse_content">
          {curseList.map((item, index) => (
            <Link
              key={index}
              style={{ color: '#000' }}
              to="/courseDetail"
              state={{ courseData: item }}
            >
              <div className="course_item">
                <div className="course_title">
                  <span className="big_weight_text">课程：</span> {item.title}
                </div>
                <div className="course_time">
                  <span className="big_weight_text">开课学期：</span>
                  {item.time}
                </div>
                <div className="course_type">
                  <span className="big_weight_text">课程类型：</span>
                  {item.type}
                </div>
                <div className="course_type">
                  <span className="big_weight_text">学时：</span>
                  {item.Classhour}
                </div>
                <div className="course_type">
                  <span className="big_weight_text">学分：</span>
                  {item.Credithour}
                </div>
                <div className="teacher_content">
                  {item.teacher.map((item1, index) => (
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
                  {item.intro}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
