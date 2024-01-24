import React, { useState, useEffect } from 'react'
import { Layout, Row, Col } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.png'
import { useLangStore } from '@/store/lang'
export default function Footer() {
  const { lang } = useLangStore()

  const { Footer } = Layout
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: ' rgb(245,247,270)',
    padding: '86px 144px 93px 144px',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  }
  const footerTextZh = [
    '常用连接',
    '浙江大学计算机学院',
    '浙江大学',
    '版权所有&copy;浙江大学量子计算',
    '保留一切权利',
  ]
  const footerTextEn = [
    'Common links',
    'School of Computer Science, Zhejiang University',
    'Zhejiang University',
    'Copyright &copy;Quantum Computing, Zhejiang University',
    'All rights reserved',
  ]
  const [footerText, setFooterText] = useState(footerTextZh)
  useEffect(() => {
    if (lang === 'zh') {
      setFooterText(footerTextZh)
    } else {
      setFooterText(footerTextEn)
    }
  }, [lang])

  return (
    <div className={styles.root}>
      <Footer style={footerStyle}>
        <div className="footer_content">
          <div className="footer_menu">
            <Row>
              <Col lg={12} sm={24} xs={24}>
                <Link to="/home">
                  <div className="logo_content">
                    <img className="logo" src={logo} alt="" />
                    <span className="logo_name">Taiyuan</span>
                  </div>
                </Link>
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <div className="footer_Link">
                  <p className="footer_Link_title">{footerText[0]}</p>
                  <Link
                    style={{ color: '#1a1b1f' }}
                    to="/memberDetail"
                    state={{ name: 'jianweiyin' }}
                  >
                    <p>jianweiyin</p>
                  </Link>
                  <p>
                    <a
                      style={{ color: '#1a1b1f' }}
                      target="_blank"
                      href="http://www.cs.zju.edu.cn"
                    >
                      {footerText[1]}
                    </a>
                  </p>
                  <p>
                    <a
                      style={{ color: '#1a1b1f' }}
                      target="_blank"
                      href="https://www.zju.edu.cn"
                    >
                      {footerText[2]}
                    </a>
                  </p>
                </div>
              </Col>
            </Row>

            {/* <div className='footer_commen_btn'>加入我们</div> */}
          </div>
        </div>
      </Footer>
      <Row justify="center" className="bottom-bar">
        <Col>
          <span style={{ marginRight: 12 }}>{footerText[3]}</span>
          <span style={{ marginRight: 12 }}> {footerText[4]}</span>
        </Col>
      </Row>
    </div>
  )
}
