import React from 'react'
import styles from './index.module.scss'
import HeaderImage from '@/components/HeaderImage'
import { Divider, Avatar } from 'antd'
import '@/assets/styles/common.scss'
import jianweiyin from '@/assets/image/team/jianweiyin.png'
import liqianglu from '@/assets/image/team/liqianglu.png'
import tansiwei from '@/assets/image/team/tansiwei.png'
import wuweitian from '@/assets/image/team/wuweitian.png'
import Member from './component/Member/Member'
export default function Team() {
  const teamList = [
    {
      name: 'jianweiyin',
      photo: jianweiyin,
      introduce:
        'Jianwei Yin is currently a full professor in the College of Computer Science, Zhejiang University (ZJU), China. He haspublished more than 100 papers in top international journals and conferences. His current research interests include quantum computing, service computing and business process management. He is also the Associate Editor of the IEEE Transactions on Services Computing.',
    },
    {
      name: 'liqianglu',
      photo: liqianglu,
      introduce:
        'Liqiang Lu is a ZJU100 Young Professor in the College of Computer Science, Zhejiang University (ZJU), China. His research interests include quantum computing, computer architecture, deep learning accelerator, and software-hardware codesign. He has authored more than 20 scientific publications in premier international journals and conferences in related  domains, including ISCA, MICRO, HPCA, FCCM, DAC, IEEE Micro, and TCAD. He also serves as a TPC member in the premier conferences in the related domain,including ICCAD,FPT,HPCC etc. ',
    },
    {
      name: 'tansiwei',
      photo: tansiwei,
      introduce:
        'Siwei Tan is a 5th year PhD student at Zhejiang University. His interests include the quantum algorithm and computer architecture. Wuwei Tian is a 4th year PhD student at Zhejiang  University.',
    },
    {
      name: 'wuweitian',
      photo: wuweitian,
      introduce:
        'Wuwei Tian is a 4th year PhD student at Zhejiang University. He is interested in the compiler design and quantum hardware.',
    },
  ]
  return (
    <div className={styles.root}>
      <HeaderImage />
      <div className="team_container">
        <div className="team_title big_title"> Team</div>
        <Divider />
        <h2 className="leader">Principle Investigator</h2>
        <Member memberData={teamList[0]} />
        <Divider />
        <h1 style={{ margin: '20px 0px' }}>Team Members</h1>
        <Member memberData={teamList[1]} width={50} />
        <div className="member_content">
          <Member memberData={teamList[2]} width={50} />
          <Member memberData={teamList[3]} width={50} />
        </div>
      </div>
    </div>
  )
}
