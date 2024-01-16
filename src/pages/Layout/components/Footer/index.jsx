import React from "react";
import { Layout, Row, Col } from "antd";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  const { Footer } = Layout;
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: " rgb(245,247,270)",
    padding: "86px 144px 93px 144px",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  };
  function t() {}
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
                  <p className="footer_Link_title">常用连接</p>
                  <Link
                    style={{ color: "#1a1b1f" }}
                    to="/memberDetail"
                    state={{ name: "jianweiyin" }}
                  >
                    <p>jianweiyin</p>
                  </Link>
                  <p>
                    <a
                      style={{ color: "#1a1b1f" }}
                      target="_blank"
                      href="http://www.cs.zju.edu.cn"
                    >
                      浙江大学计算机学院
                    </a>
                  </p>
                  <p>
                    <a
                      style={{ color: "#1a1b1f" }}
                      target="_blank"
                      href="https://www.zju.edu.cn"
                    >
                      浙江大学
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
          <span style={{ marginRight: 12 }}>
            版权所有&copy;浙江大学量子计算
          </span>
          <span style={{ marginRight: 12 }}>保留一切权利</span>
        </Col>
      </Row>
    </div>
  );
}
