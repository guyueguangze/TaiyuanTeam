import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
export default function AchievementDetail() {
  const {
    state: { detail },
  } = useLocation()
  console.log(detail, 99)
  return (
    <div className={styles.root}>
      <div className="AchievementDetail_container">
        <div className="paper_title_content">
          <h1>{detail.title}</h1>
          <div className="author">{detail.author.join(',')}</div>
        </div>
        <div className="paper_button">
          <a target="_blank" href={detail.link}>
            <UnorderedListOutlined style={{ marginRight: 10 }} />
            Paper
          </a>
        </div>
        <h2 className="Abstract">Abstract</h2>
        <div className="Abstract_content">{detail.Abstract}</div>
        <h2 className="Team_embers">Team Members</h2>
        <div className="member">
          {detail.author.map((item, index) => (
            <Button
              size="large"
              type="text"
              style={{
                marginRight: 20,
                marginTop: 20,
                backgroundColor: 'rgb(0, 63, 136)',
                color: '#fff',
              }}
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
