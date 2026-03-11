import { Rocket, Satellite, TestService, PlatformFeature } from './types';

export const ROCKETS: Rocket[] = [
  {
    id: 'z3',
    name: '朱雀三号 (Zhuque-3)',
    type: '可重复使用液氧甲烷火箭',
    thrust: '约 900 吨',
    payload: '20,000 kg (LEO)',
    description: '蓝箭航天自主研发的大型可重复使用运载火箭，不锈钢机身设计。',
    image: 'https://picsum.photos/seed/rocket1/800/600'
  },
  {
    id: 'lj1',
    name: '力箭一号 (Lijian-1)',
    type: '四级固体运载火箭',
    thrust: '200 吨',
    payload: '1,500 kg (SSO)',
    description: '中科宇航研制，目前中国最大的固体运载火箭。',
    image: 'https://picsum.photos/seed/rocket2/800/600'
  }
];

export const SATELLITES: Satellite[] = [
  {
    id: 'yh-1',
    name: '银河航天平板卫星',
    type: 'Communication',
    orbit: '500km LEO',
    lifespan: '5-7年',
    description: '采用柔性太阳翼技术，支持低轨宽带通信。',
    image: 'https://picsum.photos/seed/sat1/800/600'
  }
];

export const TEST_SERVICES: TestService[] = [
  {
    id: 'mech-1',
    category: 'Mechanical',
    name: '20吨级电动振动试验系统',
    description: '提供大推力正弦、随机、典型冲击试验，满足大型星箭结构件力学环境考核。',
    standards: ['GJB 150.16A', 'QJ 1184A', 'MIL-STD-810H'],
    equipment: ['20t 振动台', '多通道控制仪', '激光测振仪'],
    location: '北京·亦庄共享实验中心',
    capacity: '最大负载 2000kg'
  },
  {
    id: 'env-1',
    category: 'Environmental',
    name: '6米大型热真空试验罐',
    description: '模拟 10^-5 Pa 高真空环境及 -196℃ ~ +150℃ 极端温变，支持整星级热平衡试验。',
    standards: ['GJB 1027A', 'QJ 2630', 'ECSS-E-ST-10-03C'],
    equipment: ['Φ6m 真空罐', '液氮冷屏系统', '红外加热阵列'],
    location: '北京·海淀共性试验基地',
    capacity: '有效容积 150m³'
  },
  {
    id: 'emc-1',
    category: 'EMC',
    name: '10米法半暗室电磁兼容实验室',
    description: '提供全频段电磁干扰（EMI）与电磁敏感度（EMS）测试，确保星地链路通信可靠。',
    standards: ['GJB 151B', 'GJB 152A'],
    equipment: ['10m法电波暗室', '频谱分析仪', '高增益天线'],
    location: '北京·顺义检测平台',
    capacity: '频率覆盖 10kHz-40GHz'
  },
  {
    id: 'ait-1',
    category: 'AIT',
    name: '卫星总装集成与测试 (AIT) 全流程',
    description: '提供从单机测试、系统集成到整星交付的一站式 AIT 服务，缩短研制周期。',
    standards: ['QJ 20402', 'ISO 14644-1'],
    equipment: ['十万级洁净间', '多自由度翻转架', '电性能综合测试台'],
    location: '北京·亦庄 AIT 中心',
    capacity: '支持 500kg 级卫星'
  }
];

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    title: '资源共享化',
    description: '打破院所壁垒，向民营航天企业开放大型振动台、真空罐等核心试验资源。',
    icon: 'Share2'
  },
  {
    title: '标准统一化',
    description: '建立跨平台的检测数据互认体系，一份报告，全行业认可。',
    icon: 'ClipboardCheck'
  },
  {
    title: '流程数字化',
    description: '在线预约、进度实时查看、电子报告一键下载，实现“航天云检”。',
    icon: 'Cloud'
  },
  {
    title: '成本普惠化',
    description: '通过共性平台降低中小企业 30% 以上的试验成本，缩短 50% 的排队时间。',
    icon: 'TrendingDown'
  }
];
