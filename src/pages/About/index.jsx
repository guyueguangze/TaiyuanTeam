import React, { useState } from "react";
import { Row,col } from "antd";
import styles from "./index.module.scss";
import direction_a_p from "@/assets/image/about/direction_a-p-800.png";
import direction_b_p from "@/assets/image/about/direction_b-p-800.png";
import paper1 from '@/assets/image/about/paper1.png'
import paper2 from '@/assets/image/about/paper2.png'
import paper3 from '@/assets/image/about/paper3.png'
import paper4 from '@/assets/image/about/paper4.png'
import "@/assets/styles/common.scss";

export default function About() {
  const newsList = [
    {
      time: "2021年12月",
      title: "浙江大学发布“莫干1号”“天目1号”超导量子芯片",
      link: "https://hic.zju.edu.cn/2021/1220/c56173a2452801/page.htm",
    },
    {
      time: "2022年7月",
      title: "天目1号”超导量子芯片应用成果重磅发布！",
      link: "https://hic.zju.edu.cn/2022/0723/c56130a2605554/page.htm",
    },
  ];
  const paperList = [
    {
      paperimape: paper1,
      title: "基于有限元方法的快速而准确的量子读取校准",
      place: "ASPLOS 2024",
      content:
        "在当前的嘈杂中尺度量子 (NISQ) 时代，“量子读取错误”被证明是最显著的错误源，对测量保真度产生了极大的影响。矩阵基准校准已经在各种量子平台上证明其有效性。然而，现有的方法在可扩展性或准确性方面存在根本性的限制。针对上述问题，由经典有限元方法（FEM）的启发，我们提出了一种快速而准确的校准框架，名为 QuFEM。本文主要贡献有：（1）提出了 QuFEM校准框架，受到经典 FEM 中涉及的系统演化的启发。我们的重新定义具有迭代过程，这提供了对表征和校准的更深入的理解。（2） 提出了一种生成基准电路的新方法。我们的生成技术极大地减少了表征的时间复杂性，从指数级（O(2^n)）降低到多项式级（O(n^2)）。（3）提出了一种稀疏计算引擎来加速端到端的校准,校准时间仅与比特数的立方成正比 ,与最先进的方法相比，在 136 量子比特的校准中实现了 1.8 × 109 倍的加速，并在 7 比特和 18 比特的真实量子设备上提供了 1.2倍和 1.4倍的保真度改进。",
    },
    {
      paperimape: paper2,
      title: "HyQSAT:基于量子退火和CDCLSAT问题混合求解方法",
      place: "HPCA 2023",
      content:
        "SAT问题作为一个典型NP困难问题，穷举搜索非常耗时，需要指数时间复杂度。但是可以通过数学的方法将SAT问题转化为二值优化问题。而一类特殊的量子计算机——量子退火器最擅长求解二值优化问题。编码之后，求解SAT问题就转化成了量子退火算法中求解系统能级最低点的问题，使用量子退火器进行求解，就可以有效利用量子优势实现指数级别的加速。研究团队提出的方法采用混合经典算法与量子退火算法的方式。具有编码时间短、可解决大规模SAT问题的特点。在部署量子硬件时，研究团队还考虑了量子比特的拓扑信息，显著降低了映射的时间复杂度，提高了量子退火器上量子比特的利用率。最终，研究团队在11类相关数据集上进行了实验（来自于密码学、人工智能应用、图着色、电路分析等领域），与经典算法相比，团队提出的方法平均实现了12.19倍的加速，表现最好的可以实现83.21倍的加速。量子计算作当前科技发展的战略核心，团队师生不断砥砺前行，致力于深耕尖端领域，抓住量子信息技术的发展机遇，担负起科技强国的时代使命。",
    },
    {
      paperimape: paper3,
      title: "使用可复用的波形库加速量子波形编译",
      place: "ICCAD 2023",
      content:"量子电路是一组量子门计算的集合。为了实现超导量子硬件控制，需要根据量子电路来生成对应的量子测控波形。然而，现有的量子合成框架，如IBM OpenPulse，在脉冲生成过程中会涉及大量冗余计算，在处理大规模电路时计算成本很高。在本文中，我们提出了QPulseLib，这是一个包含可重复使用波形的预生成波形库。为了建立该库，我们先对电路进行变换，并应用卷积算子来提取量子电路中重复出现的子电路，并预先计算其产生的脉冲。然后，我们开发了一种匹配算法来识别目标电路中的已有的频繁子电路，并添加相应的波形数据。实验表明，与OpenPulse和先进的波形生成方法AccQOC相比，QPulseLib的脉冲生成速度分别提高了158.46倍和16.03倍。",
    },
    {
      paperimape: paper4,
      title: "基于上下文和特征提取的量子电路分析框架",
      place: "MICRO 2023",
      content:"在当前的嘈杂中尺度量子（NISQ）时代，量子电路分析是设计高性能量子程序的一项重要技术。当前分析方法仍依赖经典计算机，因而面临在准确性和计算复杂度之间的平衡。针对上述问题，本文提出了基于上下文和特征提取的量子电路分析框架QuCT，用于提取、分析和优化量子电路。本文主要贡献有：（1）将分析任务解耦为上游矢量化模型和下游模型，以较低的计算成本提供准确的分析结果。（2）从上游模型延伸，提出了一种精确的保真度预测模型，该模型自然支持分析由门交互引起的错误，并提供优化技术来减轻这些错误。（3）提出了一种酉矩阵分解模型，可以通过捕获不同酉矩阵之间的电路相似性来有效地减少搜索空间。实验表明，与现有量子编译器相比，QuCT在5bit和18bit量子设备上保真度预测精度分别提高了4.2倍和9.1倍。在酉分解中，与最先进的方法相比，QuCT在5bit酉分解中实现了46.3倍的加速，在8量子位酉分解中实现了数百倍以上的加速。",
    },
  ];
  return (
    <div className={styles.root}>
      <div className="header_image">
        <h1 className="hero-heading">Efficient AI Computing,</h1>
        <h1 className="hero-heading">Transforming the Future.</h1>
      </div>
      <div className="who_we_are">
        <h1 className="who_we_are_title big_title">课题组简介</h1>
        <div className="who_we_are_content content_font">
          太元量子计算课题组是来自浙大计算机系的量子计算团队，课题组是一个高效、活力的团队，致力于实现面向未来的量子计算的软件和体系结构。我们在超导量子控制系统、量子编译器和量子算法等领域处于国际前沿水平，将不断超越，推动量子计算的能力边界。
        </div>
      </div>
      <div className="we_work_on">
        <div className="we_work_on_left">
          <h1 className="we_work_on_title big_title">研究方向</h1>
          <div className="we_work_on_content content_font">
            课题组于2022年7月发布了首个计算可视化、支持分布式并行调度的超导量子计算云平台——“太元一号”，可远程访问浙江大学自研的“天目1号”量子芯片，提供20量子比特算力，云平台域名
            janusq.zju.edu.cn
            对外开放。该平台利用可视化的编程环境，降低量子计算机的使用门槛，相关研究引领了国际量子计算机软硬件设计、系统架构和算法开发的研究热潮，云平台已有微软、悉尼大学、华为、腾讯等海内外著名高校和龙头企业注册使用。
          </div>
          <div className="we_work_on_content content_font">
            量子计算的实现依赖于软件、硬件的全栈式协同设计，课题组提出了浙大首个全栈式的量子体系架构，架构基于自研的编程语言、框架、编译器、指令集、控制设备和芯片。太元量子体系结构提出了多项优化技术，包括可视化交互编程、芯片虚拟化、基于复用的波形加速以及流水线设计，实现90%以上的芯片利用率。
          </div>
          <div className="we_work_on_content content_font">
            太元量子软件优化平台实现了完整量子应用、编译、部署、控制、读取流程链的优化。平台提出了首个可配置的自优化编译技术，支持编译器可视化配置，编译质量和编译延迟的自适应分析。平台集成一系列量子计算机集群优化、量子电路噪声分析、量子电路自动合成、量子电路自动修正、量子波形编译加速等技术。{" "}
          </div>
          <div className="we_work_on_content content_font">
            在量子金融、生物制药学模拟、机器学习、人工智能等多个领域进行“量子+X”交叉应用探索。课题组目前主持相关的国家级、省级课题。{" "}
          </div>
        </div>
        <div className="we_work_on_right">
          <div className="efficient_hardware">
            <div className="title_1 efficient_hardware_text">
              太元超导量子计算云平台
            </div>
            <div className="title_2 efficient_hardware_text">
              软硬件全栈式量子体系结构框架
            </div>
            <div className="title_2 efficient_hardware_text">
              太元量子软件优化平台{" "}
            </div>
            <div className="title_2 efficient_hardware_text">量子应用 </div>
            <div className="tinyml_image"></div>
          </div>
          <div className="efficient_hardware">
            <div className="title_1 efficient_hardware_text">
              太元超导量子计算云平台
            </div>
            <div className="title_2 efficient_hardware_text">
              软硬件全栈式量子体系结构框架
            </div>
            <div className="title_2 efficient_hardware_text">
              太元量子软件优化平台{" "}
            </div>
            <div className="title_2 efficient_hardware_text">量子应用 </div>
            <div className="tinyml_image"></div>
          </div>
          <div className="efficient_hardware">
            <div className="title_1 efficient_hardware_text">
              太元超导量子计算云平台
            </div>
            <div className="title_2 efficient_hardware_text">
              软硬件全栈式量子体系结构框架
            </div>
            <div className="title_2 efficient_hardware_text">
              太元量子软件优化平台{" "}
            </div>
            <div className="title_2 efficient_hardware_text">量子应用 </div>
            <div className="tinyml_image"></div>
          </div>
          <div className="efficient_hardware">
            <div className="title_1 efficient_hardware_text">
              太元超导量子计算云平台
            </div>
            <div className="title_2 efficient_hardware_text">
              软硬件全栈式量子体系结构框架
            </div>
            <div className="title_2 efficient_hardware_text">
              太元量子软件优化平台{" "}
            </div>
            <div className="title_2 efficient_hardware_text">量子应用 </div>
            <div className="tinyml_image"></div>
          </div>
        </div>
        <div className="button_image">
          <img className="button_image_left" src={direction_a_p} alt="" />
          <img className="button_image_right" src={direction_b_p} alt="" />
          {/* <div className="button_image_left"></div>
          <div className="button_image_right"></div> */}
        </div>
      </div>
      <div className="news">
        <div className="news_title big_title">News</div>
        <ul className="news_content">
          {newsList.map((item, index) => (
            <li className="news_item" key={index}>
              <div className="news_time">{item.time}</div>
              <a className="news_title_link" href={item.link} target="_blank">
                <div className="news_title">{item.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="paper">
        <div className="paper_title big_title">成果</div>
        <div className="paper_content">
        {
          paperList.map((item,index)=>((
            <div key={index} className="paper_contetn_item">
              <div className="paper_image_content">
                <img className="paper_image" src={item.paperimape} alt="" />
              </div>
              <div className="paper_title">{item.title}</div>
              <div className="paper_place">{item.place}</div>
              <div className="paper_contetn">{item.content}</div>
            </div>
          )))
        }
        </div>
      
      </div>
    </div>
  );
}
