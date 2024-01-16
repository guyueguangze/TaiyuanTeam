import React from 'react'
import styles from './index.module.scss'
import HeaderImage from '@/components/HeaderImage'

import '@/assets/styles/common.scss'
export default function index() {
  const awardsLst = [
    {
      rank: 'Honorable Mention',
      name: 'ACM/IEEE Quantum Computing for Drug Discovery Challenge',
      institution: 'ICCAD',
      time: '2023',
    },
  ]
  return (
    <div className={styles.root}>
      <HeaderImage />
      <div className="awards_container">
        <h1 className="big_title title">Competition Awards</h1>
        {awardsLst.map((item, index) => (
          <div key={index} className="award_item">
            <div className="rank">{item.rank},</div>
            <div className="name">&nbsp; {item.name}</div>
            <div className="institution">&nbsp;{item.institution}</div>
            <div className="time">&nbsp;{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
