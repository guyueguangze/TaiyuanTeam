import React from 'react'
import styles from "./index.module.scss";
import { Divider, Avatar } from "antd";

export default function Member({memberData,width}) {
  return (
    <div style={{width:`${width}%`}} className={styles.root}>
          <div className="team_content">
          <div className="team_content_left">
          <Avatar size={70} src={<img src={memberData.photo} alt="avatar" />} />
          </div>
          <div  className="team_content_right">
            <h4 className="name">{memberData.name}</h4>
            <div className="introduce">{memberData.introduce}</div>
          </div>
        </div>
    </div>
  )
}
