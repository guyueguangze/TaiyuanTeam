import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.scss'
import logo from '@/assets/logo.png'
import { useLangStore } from '@/store/lang'
import { Button } from 'antd'
export default function Header({ menus }) {
  const { lang, toEn, toZh } = useLangStore()
  const location = useLocation()
  const changeLanguage = () => {
    if (lang == 'en') {
      toZh()
    } else {
      toEn()
    }
  }
  return (
    <div className={styles.root}>
      <ul className="menu_content">
        <li className="logo">
          <Link to="/home">
            <img className="logo" src={logo} alt="" />
          </Link>
        </li>
        <Link to="/home">
          <li className="myname">Taiyuan</li>
        </Link>

        {menus.map(({ label, path }) => (
          <Link key={path} style={{ color: '#fff' }} to={path}>
            <li
              className={
                location.pathname === path
                  ? 'path_active menu_item'
                  : 'menu_item'
              }
            >
              {label}
            </li>
          </Link>
        ))}
        <Button
          style={{ borderColor: '#fff', color: '#000' }}
          size="small"
          onClick={changeLanguage}
          ghost
        >
          {lang === 'zh' ? 'English' : '中文'}
          {/* */}
        </Button>
      </ul>
    </div>
  )
}
