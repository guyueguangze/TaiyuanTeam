import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Row, Col, Button, Popover, Badge, Layout } from "antd"
import styles from './index.module.scss'
import logo from '@/assets/logo.png'
export default function Header({ menus }) {
  return <div className={styles.root}>
    <ul className="menu_content">
    <li className="logo">
        <img className="logo" src={logo} alt="" />
      </li>
      <li className="myname">Taiyuan</li>
     
    {menus.map(({ label, path }) => (
                <Link key={path} style={{ color: "#fff" }} to={path}>
                  <li
                 className="menu_item"
                  >
                    {label}
                  </li>
                </Link>
              ))}
    </ul>
    
   
  </div>
}
