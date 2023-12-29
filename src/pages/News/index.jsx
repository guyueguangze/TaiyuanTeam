import React from "react";
import styles from "./index.module.scss";
import HeaderImage from "@/components/HeaderImage";
import "@/assets/styles/common.scss";

export default function News() {
  const newsList = [
    {
      time: "2022年7月",
      title: "天目1号”超导量子芯片应用成果重磅发布！",
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
    {
      time: "2021年12月",
      title: "浙江大学发布“莫干1号”“天目1号”超导量子芯片",
      link: "https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm",
    },
   
  ];
  return (
    <div className={styles.root}>
      <HeaderImage />
      <div className="news">
        <div className="news_title big_title">News</div>
        <ul className="news_content">
          {newsList.map((item, index) => (
            <li className="news_item" key={index}>
              <div className="news_time">{item.time}</div>
              <a className="news_title_link" href={item.link} target="_blank">
                <div className="news_title">{item.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
