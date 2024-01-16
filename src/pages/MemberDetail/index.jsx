import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar, Col, Row } from "antd";
import styles from "./index.module.scss";
import jianweiyin from "@/assets/image/team/jianweiyin.png";
import liqianglu from "@/assets/image/team/liqianglu.png";
import tansiwei from "@/assets/image/team/tansiwei.png";
import wuweitian from "@/assets/image/team/wuweitian.png";
import paper1 from "@/assets/image/about/paper1.png";
import paper2 from "@/assets/image/about/paper2.png";
import paper3 from "@/assets/image/about/paper3.png";
import paper4 from "@/assets/image/about/paper4.png";
export default function MemberDetail() {
  const {
    state: { name },
  } = useLocation();
  const teamList = [
    {
      name: "jianweiyin",
      photo: jianweiyin,
      paperList: [
        {
          name: "基于有限元方法的快速而准确的量子读取校准",
          place: "ASPLOS 2024",
          img: paper1,
        },
        {
          name: "HyQSAT:基于量子退火和CDCLSAT问题混合求解方法",
          place: "HPCA 2023",
          img: paper2,
        },
        {
          name: "使用可复用的波形库加速量子波形编译",
          place: "ICCAD 2023",
          img: paper3,
        },
        {
          name: "基于上下文和特征提取的量子电路分析框架",
          place: "MICRO 2023",
          img: paper4,
        },
      ],
      introduce:
        "Jianwei Yin is currently a full professor in the College of Computer Science, Zhejiang University (ZJU), China. He haspublished more than 100 papers in top international journals and conferences. His current research interests include quantum computing, service computing and business process management. He is also the Associate Editor of the IEEE Transactions on Services Computing.",
    },
    {
      name: "liqianglu",
      photo: liqianglu,
      paperList: [
        {
          name: "基于有限元方法的快速而准确的量子读取校准",
          place: "ASPLOS 2024",
          img: paper1,
        },
        {
          name: "HyQSAT:基于量子退火和CDCLSAT问题混合求解方法",
          place: "HPCA 2023",
          img: paper2,
        },
        {
          name: "使用可复用的波形库加速量子波形编译",
          place: "ICCAD 2023",
          img: paper3,
        },
        {
          name: "基于上下文和特征提取的量子电路分析框架",
          place: "MICRO 2023",
          img: paper4,
        },
      ],
      introduce:
        "Liqiang Lu is a ZJU100 Young Professor in the College of Computer Science, Zhejiang University (ZJU), China. His research interests include quantum computing, computer architecture, deep learning accelerator, and software-hardware codesign. He has authored more than 20 scientific publications in premier international journals and conferences in related  domains, including ISCA, MICRO, HPCA, FCCM, DAC, IEEE Micro,  and TCAD. He also serves as a TPC member in the premier  conferences in the related domain, including ICCAD, FPT, HPCC etc. ",
    },
    {
      name: "tansiwei",
      photo: tansiwei,
      paperList: [
        {
          name: "基于有限元方法的快速而准确的量子读取校准",
          place: "ASPLOS 2024",
          img: paper1,
        },
        {
          name: "HyQSAT:基于量子退火和CDCLSAT问题混合求解方法",
          place: "HPCA 2023",
          img: paper2,
        },
        {
          name: "使用可复用的波形库加速量子波形编译",
          place: "ICCAD 2023",
          img: paper3,
        },
        {
          name: "基于上下文和特征提取的量子电路分析框架",
          place: "MICRO 2023",
          img: paper4,
        },
      ],
      introduce:
        "Siwei Tan is a 5th year PhD student at Zhejiang University. His interests include the quantum algorithm and computer architecture. Wuwei Tian is a 4th year PhD student at Zhejiang  University.",
    },
    {
      name: "wuweitian",
      photo: wuweitian,
      paperList: [
        {
          name: "基于有限元方法的快速而准确的量子读取校准",
          place: "ASPLOS 2024",
          img: paper1,
        },
        {
          name: "HyQSAT:基于量子退火和CDCLSAT问题混合求解方法",
          place: "HPCA 2023",
          img: paper2,
        },
        {
          name: "使用可复用的波形库加速量子波形编译",
          place: "ICCAD 2023",
          img: paper3,
        },
        {
          name: "基于上下文和特征提取的量子电路分析框架",
          place: "MICRO 2023",
          img: paper4,
        },
      ],
      introduce:
        "Wuwei Tian is a 4th year PhD student at Zhejiang University. He is interested in the compiler design and quantum hardware.",
    },
  ];
  let member = teamList.filter((item, index) => name === item.name)[0];

  return (
    <div className={styles.root}>
      <div className="memberDetail_container">
        <div className="MemberDetail_content">
          <div className="MemberDetail_left">
            <Avatar size={150} src={<img src={member?.photo} alt="avatar" />} />
          </div>
          <div className="MemberDetail_right">
            <h1 className="member_name">{member?.name}</h1>
            <div className="introduce">{member.introduce}</div>
          </div>
        </div>
        <h1 className="big_title projects_title">projects</h1>
        {member.paperList.map((item, index) => (
          <div key={index} className="projects_content">
            <Row>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <div className="projects_content_left">
                  <img src={item.img} alt="" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <div className="projects_content_right">
                  <div className="title">{item.name}</div>
                  <div className="place">{item.place}</div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}
