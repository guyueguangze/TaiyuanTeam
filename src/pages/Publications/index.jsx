import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import HeaderImage from '@/components/HeaderImage'
import '@/assets/styles/common.scss'
import { useLangStore } from '@/store/lang'
import paper1 from '@/assets/image/about/paper1.png'
import paper2 from '@/assets/image/about/paper2.png'
import paper3 from '@/assets/image/about/paper3.png'
import paper4 from '@/assets/image/about/paper4.png'
export default function Publications() {
  const { lang } = useLangStore()

  // PublicationsList
  const PublicationsListZh = [
    {
      paperimape: paper1,
      title: 'QuFEM:基于有限元方法的快速而准确的量子读取校准',
      place: 'ASPLOS 2024',
      author: [
        '谭思危',
        '张涵禹',
        '余加',
        '郎聪亮',
        '赵新奎',
        '陈明帅',
        '梁云',
        '卢丽强',
        '尹建伟',
      ],
      Abstract:
        'Quantum readout error turns out to be the most significant error source, which greatly affects the measurement fidelity. Matrix-based calibration has been demonstrated to be effective in various quantum platforms. However, existing methodologies are fundamentally limited in either scalability or accuracy. Inspired by the classical finite element method (FEM), a formal method to model the complex interaction be- tween elements, we present our calibration framework named QuFEM. First, we formulate the calibration as a series of tensor-product with noise matrices. The matrix is iteratively characterized together with the calibrated probability distribution, aiming to capture the inherent locality of qubit inter- actions. Then, to accelerate the end-to-end calibration, we propose a sparse tensor-product engine to exploit the sparsity in the intermediate data. Our experiments show that QuFEM achieves 1.8 × 109 × speedup in the 136-qubit calibration com- pared to the state-of-the-art matrix-based calibration technique [47], and provides 1.2× and 1.4× fidelity improvement on the 18-qubit and 36-qubit real-world quantum devices. The source code and dataset of QuFEM will be publicly available on',
      link: 'https://link-omitted-for-blind-review',
      content:
        '在当前的嘈杂中尺度量子 (NISQ) 时代，“量子读取错误”被证明是最显著的错误源，对测量保真度产生了极大的影响。矩阵基准校准已经在各种量子平台上证明其有效性。然而，现有的方法在可扩展性或准确性方面存在根本性的限制。针对上述问题，由经典有限元方法（FEM）的启发，我们提出了一种快速而准确的校准框架，名为 QuFEM。本文主要贡献有：（1）提出了 QuFEM校准框架，受到经典 FEM 中涉及的系统演化的启发。我们的重新定义具有迭代过程，这提供了对表征和校准的更深入的理解。（2） 提出了一种生成基准电路的新方法。我们的生成技术极大地减少了表征的时间复杂性，从指数级（O(2^n)）降低到多项式级（O(n^2)）。（3）提出了一种稀疏计算引擎来加速端到端的校准,校准时间仅与比特数的立方成正比 ,与最先进的方法相比，在 136 量子比特的校准中实现了 1.8 × 109 倍的加速，并在 7 比特和 18 比特的真实量子设备上提供了 1.2倍和 1.4倍的保真度改进。',
    },
    {
      paperimape: paper2,
      title: 'HyQSAT:基于量子退火和CDCLSAT问题混合求解方法',
      place: 'HPCA 2023',
      author: [
        '谭思危',
        '于茗谦',
        'Andre Python',
        '尚永衡',
        '李婷婷',
        '卢丽强',
        '尹建伟',
      ],
      Abstract:
        'Propositional satisfiability problem (SAT) is represented in a conjunctive normal form with multiple clauses, which is an important non-deterministic polynomial-time (NP) complete problem that plays a major role in various applications including artificial intelligence, graph colouring, and circuit analysis. Quantum annealing (QA) is a promising methodology for solving complex SAT problems by exploiting the parallelism of quantum entanglement, where the SAT variables are embedded to the qubits. However, the long embedding time fundamentally limits existing QA-based methods, leading to inefficient hardware implementation and poor scalability.  In this paper, we propose HyQSAT, a hybrid approach that integrates QA with the classical Conflict-Driven Clause Learning (CDCL) algorithm to enable end-to-end acceleration for solving SAT problems. Instead of embedding all clauses to QA hardware, we quantitatively estimate the conflict frequency of clauses and apply breadth-first traversal to choose their embedding order. We also consider the hardware topology to maximize the utilization of physical qubits in embedding to QA hardware. Besides, we adjust the embedding coefficients to improve the computation accuracy under qubit noise. Finally, we present how to interpret the satisfaction probability based on QA energy distribution and use this information to guide the CDCL search. Our experiments demonstrate that HyQSAT can effectively support larger-scale SAT problems that are beyond the capability of existing QA approaches, achieve up to 12.62X end-to-end speedup using D- Wave 2000Q compared to the classic CDCL algorithm on Intel E5 CPU, and considerably reduce the QA embedding time from 17.2s to 15.7μs compared to the D-Wave Minorminer algorithm [11]. ',
      link: 'https://ieeexplore.ieee.org/document/10071022',
      content:
        'SAT问题作为一个典型NP困难问题，穷举搜索非常耗时，需要指数时间复杂度。但是可以通过数学的方法将SAT问题转化为二值优化问题。而一类特殊的量子计算机——量子退火器最擅长求解二值优化问题。编码之后，求解SAT问题就转化成了量子退火算法中求解系统能级最低点的问题，使用量子退火器进行求解，就可以有效利用量子优势实现指数级别的加速。研究团队提出的方法采用混合经典算法与量子退火算法的方式。具有编码时间短、可解决大规模SAT问题的特点。在部署量子硬件时，研究团队还考虑了量子比特的拓扑信息，显著降低了映射的时间复杂度，提高了量子退火器上量子比特的利用率。最终，研究团队在11类相关数据集上进行了实验（来自于密码学、人工智能应用、图着色、电路分析等领域），与经典算法相比，团队提出的方法平均实现了12.19倍的加速，表现最好的可以实现83.21倍的加速。量子计算作当前科技发展的战略核心，团队师生不断砥砺前行，致力于深耕尖端领域，抓住量子信息技术的发展机遇，担负起科技强国的时代使命。',
    },
    {
      paperimape: paper3,
      title: '使用可复用的波形库加速量子波形编译',
      place: 'ICCAD 2023',
      author: ['田吴炜', '贾星辉', '谭思危', '宋紫璇', '卢丽强', '尹建伟'],
      Abstract:
        'Quantum circuit serves as a popular programming model that describes the computation using a set of quantum gates, which requires generating a sequence of pulses that collect the operation of each gate for superconducting quantum devices. However, existing quantum synthesis frameworks, like IBM OpenPulse [1], involve massive redundant computation during pulse generation, suffering from a high computational cost when handling large-scale circuits. In this paper, we propose QPulseLib, a novel library with reusable pulses that can directly provide the pulse of a circuit block. To establish this library, we transform the circuit and apply convolutional operators to extract reusable patterns and pre-calculate their resultant pulses. Then, we develop a matching algorithm to identify such patterns shared by the target circuit. Experiments show that QPulseLib achieves 158.46× and 16.03× speedup for pulse generation, compared to OpenPulse and AccQOC [2].',
      link: 'https://ieeexplore.ieee.org/document/10323711',
      content:
        '量子电路是一组量子门计算的集合。为了实现超导量子硬件控制，需要根据量子电路来生成对应的量子测控波形。然而，现有的量子合成框架，如IBM OpenPulse，在脉冲生成过程中会涉及大量冗余计算，在处理大规模电路时计算成本很高。在本文中，我们提出了QPulseLib，这是一个包含可重复使用波形的预生成波形库。为了建立该库，我们先对电路进行变换，并应用卷积算子来提取量子电路中重复出现的子电路，并预先计算其产生的脉冲。然后，我们开发了一种匹配算法来识别目标电路中的已有的频繁子电路，并添加相应的波形数据。实验表明，与OpenPulse和先进的波形生成方法AccQOC相比，QPulseLib的脉冲生成速度分别提高了158.46倍和16.03倍。',
    },
    {
      paperimape: paper4,
      title: '基于上下文和特征提取的量子电路分析框架',
      place: 'MICRO 2023',
      Abstract:
        'In the current Noisy Intermediate-Scale Quantum era, quantum circuit analysis is an essential technique for designing high-performance quantum programs. Current analysis methods exhibit either accuracy limitations or high computational complexity for obtaining precise results. To reduce this tradeoff, we propose QuCT, a unified framework for extracting, analyzing, and optimizing quantum circuits. The main innovation of QuCT is to vectorize each gate with each element, quantitatively describing the degree of the interaction with neighboring gates. Extending from the vectorization model, we propose two representative downstream models for fidelity prediction and unitary decomposition. The fidelity prediction model performs a linear transformation on all gate vectors and aggregates the results to estimate the overall circuit fidelity. By identifying critical weights in the transformation matrix, we propose two optimizations to improve the circuit fidelity. In the unitary decomposition model, we significantly reduce the search space by bridging the gap between unitary and circuit via gate vectors. Experiments show that QuCT improves the accuracy of fidelity prediction by 4.2× on 5-qubit and 18-qubit quantum devices and achieves 2.5× fidelity improvement compared to existing quantum compilers [19, 55]. In unitary decomposition, QuCT achieves 46.3× speedup for 5-qubit unitary and more than hundreds of speedup for 8-qubit unitary, compared to the state-of-the-art method [87].',
      link: 'https://dl.acm.org/doi/10.1145/3613424.3614274',
      author: [
        '谭思危',
        '郎聪亮',
        ' Liang Xiang',
        '王沭迪',
        '贾星辉',
        ' Ziqi Tan',
        '李婷婷',
        'Jieming Yin',
        '尚永衡',
        'Andre Python',
        '卢丽强',
        '尹建伟',
      ],
      content:
        '在当前的嘈杂中尺度量子（NISQ）时代，量子电路分析是设计高性能量子程序的一项重要技术。当前分析方法仍依赖经典计算机，因而面临在准确性和计算复杂度之间的平衡。针对上述问题，本文提出了基于上下文和特征提取的量子电路分析框架QuCT，用于提取、分析和优化量子电路。本文主要贡献有：（1）将分析任务解耦为上游矢量化模型和下游模型，以较低的计算成本提供准确的分析结果。（2）从上游模型延伸，提出了一种精确的保真度预测模型，该模型自然支持分析由门交互引起的错误，并提供优化技术来减轻这些错误。（3）提出了一种酉矩阵分解模型，可以通过捕获不同酉矩阵之间的电路相似性来有效地减少搜索空间。实验表明，与现有量子编译器相比，QuCT在5bit和18bit量子设备上保真度预测精度分别提高了4.2倍和9.1倍。在酉分解中，与最先进的方法相比，QuCT在5bit酉分解中实现了46.3倍的加速，在8量子位酉分解中实现了数百倍以上的加速。',
    },
  ]
  const PublicationsListEn = [
    {
      paperimape: paper1,
      title:
        'QuFEM: Fast and Accurate Quantum Readout Calibration Using the Finite Element Method',
      place: 'ASPLOS 2024',
      author: [
        'Siwei Tan',
        'Hanyu Zhang',
        'Jia Yu',
        ' Congliang Lang',
        ' Xinkui Zhao',
        'Mingshuai Chen',
        'Yun Liang',
        ' Liqiang Lu',
        'Jianwei Yin',
      ],
      Abstract:
        'Quantum readout error turns out to be the most significant error source, which greatly affects the measurement fidelity. Matrix-based calibration has been demonstrated to be effective in various quantum platforms. However, existing methodologies are fundamentally limited in either scalability or accuracy. Inspired by the classical finite element method (FEM), a formal method to model the complex interaction be- tween elements, we present our calibration framework named QuFEM. First, we formulate the calibration as a series of tensor-product with noise matrices. The matrix is iteratively characterized together with the calibrated probability distribution, aiming to capture the inherent locality of qubit inter- actions. Then, to accelerate the end-to-end calibration, we propose a sparse tensor-product engine to exploit the sparsity in the intermediate data. Our experiments show that QuFEM achieves 1.8 × 109 × speedup in the 136-qubit calibration com- pared to the state-of-the-art matrix-based calibration technique [47], and provides 1.2× and 1.4× fidelity improvement on the 18-qubit and 36-qubit real-world quantum devices. The source code and dataset of QuFEM will be publicly available on',
      link: 'https://link-omitted-for-blind-review',
      content:
        '在当前的嘈杂中尺度量子 (NISQ) 时代，“量子读取错误”被证明是最显著的错误源，对测量保真度产生了极大的影响。矩阵基准校准已经在各种量子平台上证明其有效性。然而，现有的方法在可扩展性或准确性方面存在根本性的限制。针对上述问题，由经典有限元方法（FEM）的启发，我们提出了一种快速而准确的校准框架，名为 QuFEM。本文主要贡献有：（1）提出了 QuFEM校准框架，受到经典 FEM 中涉及的系统演化的启发。我们的重新定义具有迭代过程，这提供了对表征和校准的更深入的理解。（2） 提出了一种生成基准电路的新方法。我们的生成技术极大地减少了表征的时间复杂性，从指数级（O(2^n)）降低到多项式级（O(n^2)）。（3）提出了一种稀疏计算引擎来加速端到端的校准,校准时间仅与比特数的立方成正比 ,与最先进的方法相比，在 136 量子比特的校准中实现了 1.8 × 109 倍的加速，并在 7 比特和 18 比特的真实量子设备上提供了 1.2倍和 1.4倍的保真度改进。',
    },
    {
      paperimape: paper2,
      title:
        'HyQSAT: A Hybrid Approach for 3-SAT Problems by Integrating Quantum Annealer with CDCL',
      place: 'HPCA 2023',
      author: [
        'Siwei Tan',
        'Mingqian Yu',
        'Andre Python',
        'Yongheng Shang',
        ' Tingting Li,',
        'Liqiang Lu',
        'Jianwei Yin',
      ],
      Abstract:
        'Propositional satisfiability problem (SAT) is represented in a conjunctive normal form with multiple clauses, which is an important non-deterministic polynomial-time (NP) complete problem that plays a major role in various applications including artificial intelligence, graph colouring, and circuit analysis. Quantum annealing (QA) is a promising methodology for solving complex SAT problems by exploiting the parallelism of quantum entanglement, where the SAT variables are embedded to the qubits. However, the long embedding time fundamentally limits existing QA-based methods, leading to inefficient hardware implementation and poor scalability.  In this paper, we propose HyQSAT, a hybrid approach that integrates QA with the classical Conflict-Driven Clause Learning (CDCL) algorithm to enable end-to-end acceleration for solving SAT problems. Instead of embedding all clauses to QA hardware, we quantitatively estimate the conflict frequency of clauses and apply breadth-first traversal to choose their embedding order. We also consider the hardware topology to maximize the utilization of physical qubits in embedding to QA hardware. Besides, we adjust the embedding coefficients to improve the computation accuracy under qubit noise. Finally, we present how to interpret the satisfaction probability based on QA energy distribution and use this information to guide the CDCL search. Our experiments demonstrate that HyQSAT can effectively support larger-scale SAT problems that are beyond the capability of existing QA approaches, achieve up to 12.62X end-to-end speedup using D- Wave 2000Q compared to the classic CDCL algorithm on Intel E5 CPU, and considerably reduce the QA embedding time from 17.2s to 15.7μs compared to the D-Wave Minorminer algorithm [11]. ',
      link: 'https://ieeexplore.ieee.org/document/10071022',
      content:
        'SAT问题作为一个典型NP困难问题，穷举搜索非常耗时，需要指数时间复杂度。但是可以通过数学的方法将SAT问题转化为二值优化问题。而一类特殊的量子计算机——量子退火器最擅长求解二值优化问题。编码之后，求解SAT问题就转化成了量子退火算法中求解系统能级最低点的问题，使用量子退火器进行求解，就可以有效利用量子优势实现指数级别的加速。研究团队提出的方法采用混合经典算法与量子退火算法的方式。具有编码时间短、可解决大规模SAT问题的特点。在部署量子硬件时，研究团队还考虑了量子比特的拓扑信息，显著降低了映射的时间复杂度，提高了量子退火器上量子比特的利用率。最终，研究团队在11类相关数据集上进行了实验（来自于密码学、人工智能应用、图着色、电路分析等领域），与经典算法相比，团队提出的方法平均实现了12.19倍的加速，表现最好的可以实现83.21倍的加速。量子计算作当前科技发展的战略核心，团队师生不断砥砺前行，致力于深耕尖端领域，抓住量子信息技术的发展机遇，担负起科技强国的时代使命。',
    },
    {
      paperimape: paper3,
      title:
        'QPulseLib: Accelerating the Pulse Generation of Quantum Circuit with Reusable Patterns',
      place: 'ICCAD 2023',
      author: [
        'Wuwei Tian',
        'Xinghui Jia',
        'Siwei Tan',
        'Zixuan Song',
        'Liqiang Lu',
        'Jianwei Yin',
      ],
      Abstract:
        'Quantum circuit serves as a popular programming model that describes the computation using a set of quantum gates, which requires generating a sequence of pulses that collect the operation of each gate for superconducting quantum devices. However, existing quantum synthesis frameworks, like IBM OpenPulse [1], involve massive redundant computation during pulse generation, suffering from a high computational cost when handling large-scale circuits. In this paper, we propose QPulseLib, a novel library with reusable pulses that can directly provide the pulse of a circuit block. To establish this library, we transform the circuit and apply convolutional operators to extract reusable patterns and pre-calculate their resultant pulses. Then, we develop a matching algorithm to identify such patterns shared by the target circuit. Experiments show that QPulseLib achieves 158.46× and 16.03× speedup for pulse generation, compared to OpenPulse and AccQOC [2].',
      link: 'https://ieeexplore.ieee.org/document/10323711',
      content:
        '量子电路是一组量子门计算的集合。为了实现超导量子硬件控制，需要根据量子电路来生成对应的量子测控波形。然而，现有的量子合成框架，如IBM OpenPulse，在脉冲生成过程中会涉及大量冗余计算，在处理大规模电路时计算成本很高。在本文中，我们提出了QPulseLib，这是一个包含可重复使用波形的预生成波形库。为了建立该库，我们先对电路进行变换，并应用卷积算子来提取量子电路中重复出现的子电路，并预先计算其产生的脉冲。然后，我们开发了一种匹配算法来识别目标电路中的已有的频繁子电路，并添加相应的波形数据。实验表明，与OpenPulse和先进的波形生成方法AccQOC相比，QPulseLib的脉冲生成速度分别提高了158.46倍和16.03倍。',
    },
    {
      paperimape: paper4,
      title:
        'QuCT: A Framework for Analyzing Quantum Circuit by Extracting Contextual and Topological Features',
      place: 'MICRO 2023',
      Abstract:
        'In the current Noisy Intermediate-Scale Quantum era, quantum circuit analysis is an essential technique for designing high-performance quantum programs. Current analysis methods exhibit either accuracy limitations or high computational complexity for obtaining precise results. To reduce this tradeoff, we propose QuCT, a unified framework for extracting, analyzing, and optimizing quantum circuits. The main innovation of QuCT is to vectorize each gate with each element, quantitatively describing the degree of the interaction with neighboring gates. Extending from the vectorization model, we propose two representative downstream models for fidelity prediction and unitary decomposition. The fidelity prediction model performs a linear transformation on all gate vectors and aggregates the results to estimate the overall circuit fidelity. By identifying critical weights in the transformation matrix, we propose two optimizations to improve the circuit fidelity. In the unitary decomposition model, we significantly reduce the search space by bridging the gap between unitary and circuit via gate vectors. Experiments show that QuCT improves the accuracy of fidelity prediction by 4.2× on 5-qubit and 18-qubit quantum devices and achieves 2.5× fidelity improvement compared to existing quantum compilers [19, 55]. In unitary decomposition, QuCT achieves 46.3× speedup for 5-qubit unitary and more than hundreds of speedup for 8-qubit unitary, compared to the state-of-the-art method [87].',
      link: 'https://dl.acm.org/doi/10.1145/3613424.3614274',
      author: [
        'Siwei Tan',
        ' Congliang Lang',
        ' Liang Xiang',
        'Shudi Wang',
        'Xinghui Jia',
        ' Ziqi Tan',
        'Tingting Li',
        'Jieming Yin',
        'Yongheng Shang',
        'Andre Python',
        ' Liqiang Lu',
        'Jianwei Yin',
      ],
      content:
        '在当前的嘈杂中尺度量子（NISQ）时代，量子电路分析是设计高性能量子程序的一项重要技术。当前分析方法仍依赖经典计算机，因而面临在准确性和计算复杂度之间的平衡。针对上述问题，本文提出了基于上下文和特征提取的量子电路分析框架QuCT，用于提取、分析和优化量子电路。本文主要贡献有：（1）将分析任务解耦为上游矢量化模型和下游模型，以较低的计算成本提供准确的分析结果。（2）从上游模型延伸，提出了一种精确的保真度预测模型，该模型自然支持分析由门交互引起的错误，并提供优化技术来减轻这些错误。（3）提出了一种酉矩阵分解模型，可以通过捕获不同酉矩阵之间的电路相似性来有效地减少搜索空间。实验表明，与现有量子编译器相比，QuCT在5bit和18bit量子设备上保真度预测精度分别提高了4.2倍和9.1倍。在酉分解中，与最先进的方法相比，QuCT在5bit酉分解中实现了46.3倍的加速，在8量子位酉分解中实现了数百倍以上的加速。',
    },
  ]
  const [PublicationsList, setPublicationsList] = useState(PublicationsListZh)

  // PatentsList
  const PatentsListZh = [
    {
      title: '一种针对量子退火器求解3-SAT问题的噪音优化方法',
      time: '2023年1月9日',
      author: '尹建伟,谭思危,于茗谦,卢丽强,尚永衡',
    },
    {
      title: '基于卷积实现可复用波形库加速量子波形编译的方法和装置',
      time: '2023年10月26日',
      author: '尹建伟,余加,田吴炜,卢丽强,贾星辉,谭思危,宋紫璇',
    },
    {
      title: '一种基于超导量子处理器的量子计算机平台',
      time: '2023年3月10日',
      author: '孙校,谭思危,贾星辉,王沭迪,卢丽强',
    },
    {
      title: '一种针对量子退火器求解3-SAT问题的噪音优化方法',
      time: '2023年1月9日',
      author: '尹建伟,谭思危,于茗谦,卢丽强,尚永衡',
    },
  ]
  const PatentsListEn = [
    {
      title:
        'A Noise Optimization Method to Quantum Annealing When Solving 3-SAT Problem',
      time: 'Jan 9th, 2023',
      author: 'Jianwei Yin, Siwei Tan, Mingqian Yu, Liqiang Lu, Yongheng Shang',
    },
    {
      title:
        'A Convolution-based Method to Accelerate the Pulse Generation of Quantum Circuit',
      time: 'Oct 26th, 2023',
      author:
        'Jianwei Yin, Jia Yu, Wuwei Tian, Liqiang Lu, Xinghui Jia, Siwei Tan, Zixuan Song',
    },
    {
      title:
        'A Quantum Computing Platform Based on Superconducting Quantum Processors',
      time: 'Mar 10th, 2023',
      author:
        'Xiao Sun, Siwei Tan, Xinghui Jia, Shudi Wang, Liqiang Lu, Jianwei Yin',
    },
    {
      title: 'A Visual Quantum Programming System',
      time: 'Jul 13th, 2023',
      author:
        'Jianwei Yin, Shudi Wang, Liqiang Lu, Yongheng Shang, Siwei Tan, Tingting Li, Xinghui Jia',
    },
  ]
  const [PatentsList, setPatentsListEn] = useState(PatentsListZh)
  // CopyrightList
  const CopyrightListZh = [
    {
      title: '太元量子云平台V1. 0',
      time: '2022年7月1日',
      author: '浙江大学',
    },
  ]
  const CopyrightListEn = [
    {
      title: 'Taiyuan Quantum Cloud Platform V1.0',
      time: 'Jul 1st, 2022',
      author: 'Zhejiang University',
    },
  ]
  const [CopyrightList, setCopyrightList] = useState(CopyrightListZh)
  // titlelist
  const titleListZh = ['论⽂', '专利', '软件著作权']
  const titleListEn = ['Papers', 'Patents', 'Software copyright']
  const [titleList, settitleList] = useState(titleListZh)
  useEffect(() => {
    if (lang === 'zh') {
      setPublicationsList(PublicationsListZh)
      setCopyrightList(CopyrightListZh)
      setPatentsListEn(CopyrightListZh)
      settitleList(titleListZh)
    } else {
      setPublicationsList(PublicationsListEn)
      setCopyrightList(CopyrightListEn)
      setPatentsListEn(CopyrightListEn)
      settitleList(titleListEn)
    }
  }, [lang])
  return (
    <div className={styles.root}>
      <HeaderImage />
      <div className="publication_container">
        <div className="publication_title big_title"></div>
        <div className="Publications">
          <div className="Publications_title taiyuanColor">{titleList[0]}</div>
          <div className="Publications_content">
            {PublicationsList.map((item, index) => (
              <Link
                key={index}
                state={{ detail: item }}
                to="/achievementDetail"
                style={{ color: '#000' }}
              >
                <div key={index} className="Publications_item">
                  {/* <a href={}></a> */}
                  <div className="Publications_item_title">{item.title}</div>
                  <div className="Publications_item_author">{item.author}</div>
                  <div className="Publications_item_place">{item.place}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="Patents">
          <div className="Patents_title Publications_title taiyuanColor">
            {titleList[1]}
          </div>
          <div className="Patents_content">
            {PatentsList.map((item, index) => (
              <div key={index} className="Patents_item Publications_item">
                <div className="Patents_item_title Publications_item_title">
                  {item.title}
                </div>
                <div className="Patents_item_authon">{item.author}</div>
                <div className="Patents_item_time">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="Copyright ">
          <div className="Copyright_title Publications_title taiyuanColor">
            {titleList[2]}
          </div>
          <div className="Copyright_contetn">
            {CopyrightList.map((item, index) => (
              <div key={index} className="Copyright_item Publications_item">
                <div className="Copyright_item_title Publications_item_title">
                  {item.title}
                </div>
                <div className="Copyright_item_authon">{item.author}</div>
                <div className="Copyright_item_time">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
