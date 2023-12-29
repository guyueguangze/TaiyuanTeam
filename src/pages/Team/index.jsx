import React from "react";
import styles from "./index.module.scss";
import HeaderImage from "@/components/HeaderImage";
import { Divider } from "antd";
import "@/assets/styles/common.scss";
export default function index() {
  return (
    <div className={styles.root}>
      <HeaderImage />
      <div className="team_container">
        <div className="team_title big_title">团队</div>
        <Divider />
        <h2 className="leader">Principle Investigator</h2>
      </div>
    </div>
  );
}
