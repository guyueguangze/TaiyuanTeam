import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Avatar } from "antd";

export default function Member({ memberData, width }) {
  return (
    <div style={{ width: `${width}%` }} className={styles.root}>
      <div className="team_content">
        <div className="team_content_left">
          <Link to="/memberDetail" state={{name:memberData.name}}>
            <Avatar
              size={70}
              src={<img src={memberData.photo} alt="avatar" />}
            />
          </Link>
        </div>
        <div className="team_content_right">
          <h4 className="name">{memberData.name}</h4>
          <div className="introduce">{memberData.introduce}</div>
        </div>
      </div>
    </div>
  );
}
