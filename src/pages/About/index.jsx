import React from "react";
import styles from "./index.module.scss";
import "@/assets/styles/common.scss";
export default function index() {
  return (
    <div className={styles.root}>
      <div className="header_image">
        <h1 className="hero-heading">Efficient AI Computing,</h1>
        <h1 className="hero-heading">Transforming the Future.</h1>
      </div>
      <div className="who_we_are">
        <h1 className="who_we_are_title big_title">Who We Are</h1>
        <div className="who_we_are_content content_font">
          Welcome to MIT&nbsp;HAN&nbsp;Lab, where efficiency meets performance,
          innovation converges with excellence in the realm of artificial
          intelligence (AI)&nbsp;and computer architecture. Our lab stands at
          the forefront of cutting-edge research, encompassing a wide spectrum
          of topics from LLM and AIGC to TinyML and Hardware Design. Combining
          expertise in algorithm and hardware, we are dedicated to pushing the
          limits of efficiency in AI.
        </div>
      </div>
      <div className="we_work_on">
        <div className="we_work_on_left">
          <h1 className="we_work_on_title big_title">We Work On</h1>
          <div className="we_work_on_content content_font">
            The incredible potential of large models in Artificial Intelligence
            Generated Content (AIGC), including cutting-edge technologies like
            Large Language Models (LLMs) and Diffusion Models, have
            revolutionized a wide range of applications, spanning natural
            language processing, content generation, creative arts, and more.
            However, large model size, and high memory and computational
            requirements present formidable challenges. We aim to tackle these
            hurdles head-on and make these advanced AI technologies more
            practical, democratizing access to these future-changing
            technologies for everyone.
          </div>
          <div className="we_work_on_content content_font">
            The incredible potential of large models in Artificial Intelligence
            Generated Content (AIGC), including cutting-edge technologies like
            Large Language Models (LLMs) and Diffusion Models, have
            revolutionized a wide range of applications, spanning natural
            language processing, content generation, creative arts, and more.
            However, large model size, and high memory and computational
            requirements present formidable challenges. We aim to tackle these
            hurdles head-on and make these advanced AI technologies more
            practical, democratizing access to these future-changing
            technologies for everyone.
          </div>
        </div>
        <div className="we_work_on_right">
           <div className="efficient_hardware">
            <div className="title_1 efficient_hardware_text">
            Efficient AI Hardware & System
            </div>
            <div className="title_2 efficient_hardware_text">
            Efficient AI Algorithm
            </div>
            <div className="tinyml_image"></div>
           </div>
           <div className="efficient_hardware">
            <div className="title_1 efficient_hardware_text">
            Efficient AI Hardware & System
            </div>
            <div className="title_2 efficient_hardware_text">
            Efficient AI Algorithm
            </div>
            <div className="tinyml_image"></div>
           </div>
        </div>
        <div className="button_image">
          <div className="button_image_left"></div>
          <div className="button_image_right"></div>
        </div>
      </div>
    </div>
  );
}
