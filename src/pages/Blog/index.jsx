import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination, EffectCards } from 'swiper'
import tinyml from '@/assets/image/about/tinyml-large.png'
import styles from './index.module.scss'
import { Radio } from 'antd'
import { click } from '@testing-library/user-event/dist/click'

export default function Blog() {
  const researchList = [
    {
      title: ' 太元超导量子计算云平台',
      content:
        '课题组于2022年7月发布了首个计算可视化、支持分布式并行调度的超导量子计算云平台——“太元一号”，可远程访问浙江大学自研的“天目1号”量子芯片，提供20量子比特算力，云平台域名 janusq.zju.edu.cn  对外开放。该平台利用可视化的编程环境，降低量子计算机的使用门槛，相关研究引领了国际量子计算机软硬件设计、系统架构和算法开发的研究热潮，云平台已有微软、悉尼大学、华为、腾讯等海内外著名高校和龙头企业注册使用。',
      image: tinyml,
      titleColor: 'red',
    },
    {
      title: '软硬件全栈式量子体系结构框架',
      content:
        '量子计算的实现依赖于软件、硬件的全栈式协同设计，课题组提出了浙大首个全栈式的量子体系架构，架构基于自研的编程语言、框架、编译器、指令集、控制设备和芯片。太元量子体系结构提出了多项优化技术，包括可视化交互编程、芯片虚拟化、基于复用的波形加速以及流水线设计，实现90%以上的芯片利用率。',
      image: tinyml,
      titleColor: 'blue',
    },
    {
      title: '太元量子软件优化平台',
      content:
        '太元量子软件优化平台实现了完整量子应用、编译、部署、控制、读取流程链的优化。平台提出了首个可配置的自优化编译技术，支持编译器可视化配置，编译质量和编译延迟的自适应分析。平台集成一系列量子计算机集群优化、量子电路噪声分析、量子电路自动合成、量子电路自动修正、量子波形编译加速等技术。',
      image: tinyml,
      titleColor: 'green',
    },
    {
      title: '量子应用',
      content:
        '在量子金融、生物制药学模拟、机器学习、人工智能等多个领域进行“量子+X”交叉应用探索。课题组目前主持相关的国家级、省级课题',
      image: tinyml,
      titleColor: 'pink',
    },
  ]
  const [item, setItem] = useState(researchList[0])
  const options = [
    {
      label: '\xa0 1 \xa0',
      value: '0',
    },
    {
      label: '\xa0 2 \xa0',
      value: '1',
    },
    {
      label: '\xa0 3 \xa0',
      value: '2',
    },
    {
      label: '\xa0 4 \xa0',
      value: '3',
    },
  ]
  const onChange4 = ({ target: { value } }) => {
    setItem(researchList[value])
  }
  const clickimg = () => {
    researchList.forEach((item, index) => {})
  }
  return (
    <div className={styles.root}>
      <div className="blog_container">
        <div className="left">{item.content}</div>
        <div className="right">
          {/* <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {researchList.map((item, index) => (
              <SwiperSlide key={index} style={{ top: index * 80 }}>
                <div className="SwiperSlide_content">
                  <div
                    className="title"
                    style={{ backgroundColor: item.titleColor }}
                  >
                    {item.title}
                  </div>
                  <div className="img_content">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          {researchList.map((item, index) => (
            <div
              onClick={clickimg}
              className="SwiperSlide_content"
              style={{ top: index * 80 }}
            >
              <div
                className="title"
                style={{ backgroundColor: item.titleColor }}
              >
                {item.title}
              </div>
              <div className="img_content">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Radio.Group
        size="large"
        options={options}
        onChange={onChange4}
        // value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  )
}
