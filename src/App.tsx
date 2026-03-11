import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Satellite, 
  ShieldCheck, 
  BookOpen, 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink,
  Share2,
  ClipboardCheck,
  Cloud,
  TrendingDown,
  MapPin,
  Cpu,
  Zap,
  Calendar
} from 'lucide-react';
import { cn } from './lib/utils';
import { SpaceBackground } from './components/SpaceBackground';
import { YouTubeBackground } from './components/YouTubeBackground';
import { ROCKETS, SATELLITES, TEST_SERVICES, PLATFORM_FEATURES } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '#home' },
    { name: '星箭展厅', href: '#gallery' },
    { name: '检测中心', href: '#testing' },
    { name: '展会洞察', href: '#insights' },
    { name: '技术Wiki', href: 'https://wiki.ntbln.com', external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold tracking-tighter text-white">环境可靠性EMC试验</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.external && <ExternalLink className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <YouTubeBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            2026.05.18 - 05.20 | 北京国家会议中心
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight">
            赋能新质生产力<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              构建商业航天新生态
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
            全产业链覆盖：从空天运载到卫星制造，从测控服务到终端应用。
            一站式商业航天共性试验平台，助力中国星箭腾飞。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group">
              立即预约检测服务
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm">
              查看展商名录
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">星箭展厅</h2>
            <p className="text-gray-400">展示最前沿的可重复使用火箭与高通量卫星技术</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">运载火箭</button>
            <button className="px-4 py-2 rounded-full bg-white/5 text-gray-400 text-sm font-medium hover:bg-white/10">卫星库</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROCKETS.map((rocket, idx) => (
            <motion.div
              key={rocket.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={rocket.image}
                  alt={rocket.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-2 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded mb-2 inline-block">
                    {rocket.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{rocket.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">起飞推力</p>
                    <p className="text-white font-mono">{rocket.thrust}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">LEO 运载能力</p>
                    <p className="text-white font-mono">{rocket.payload}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6">{rocket.description}</p>
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  查看详细参数
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformFeaturesSection = () => {
  const iconMap: Record<string, any> = {
    Share2,
    ClipboardCheck,
    Cloud,
    TrendingDown,
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">共性试验平台核心优势</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            北京市商业航天共性试验平台，旨在通过资源整合与技术创新，为星箭企业提供全生命周期的检测保障。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PLATFORM_FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 border-blue-500/20 hover:border-blue-500/50 transition-all"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-400 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TestingSection = () => {
  return (
    <section id="testing" className="py-24 bg-blue-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">共享实验中心</h2>
            <p className="text-gray-400">
              开放共享大型振动台、真空罐、电波暗室等 100+ 台套核心试验设备。
              <span className="text-blue-400 block mt-2 font-medium">—— 打造商业航天“试炼场”，让星箭产品“少走弯路”。</span>
            </p>
          </div>
          <div className="flex items-center gap-4 p-4 glass-card border-emerald-500/20 bg-emerald-500/5">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div className="text-sm">
              <p className="text-white font-bold">平台实时状态</p>
              <p className="text-emerald-400/80">当前 12 台设备空闲，可即时预约</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TEST_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      {service.category === 'Mechanical' && <Zap className="text-blue-400 w-7 h-7" />}
                      {service.category === 'Environmental' && <ShieldCheck className="text-blue-400 w-7 h-7" />}
                      {service.category === 'EMC' && <Cpu className="text-blue-400 w-7 h-7" />}
                      {service.category === 'AIT' && <Rocket className="text-blue-400 w-7 h-7" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1 block">
                        {service.category} Testing
                      </span>
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-[10px] text-emerald-400 font-bold uppercase">Ready to Book</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> 试验地点
                      </p>
                      <p className="text-sm text-gray-200">{service.location}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold mb-2 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> 技术指标
                      </p>
                      <p className="text-sm text-gray-200">{service.capacity}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold mb-2">核心设备</p>
                      <div className="flex flex-wrap gap-2">
                        {service.equipment.map(eq => (
                          <span key={eq} className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-300">
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold mb-2">遵循标准</p>
                      <div className="flex flex-wrap gap-2">
                        {service.standards.map(std => (
                          <span key={std} className="px-2 py-1 bg-blue-500/10 rounded text-[10px] text-blue-400 font-mono">
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    在线预约排期
                  </button>
                  <button className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all">
                    技术咨询
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 glass-card border-blue-500/20 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-400 font-bold">01</span>
            </div>
            <h4 className="text-white font-bold mb-2">提交申请</h4>
            <p className="text-xs text-gray-500">在线填写试验大纲与产品参数</p>
          </div>
          <div className="p-8 glass-card border-blue-500/20 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-400 font-bold">02</span>
            </div>
            <h4 className="text-white font-bold mb-2">方案评审</h4>
            <p className="text-xs text-gray-500">专家团队 24h 内完成技术可行性评估</p>
          </div>
          <div className="p-8 glass-card border-blue-500/20 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-400 font-bold">03</span>
            </div>
            <h4 className="text-white font-bold mb-2">进场试验</h4>
            <p className="text-xs text-gray-500">按计划进场，实时监控试验数据</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold text-white">环境可靠性EMC试验</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              中国领先的商业航天全产业链服务中枢。通过将产品展示与 Wiki 知识库、在线检测预约三者打通，赋能新质生产力。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">快速链接</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">展商申请</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">观众登记</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">媒体中心</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">关注我们</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="text-xs">微信</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="text-xs">微博</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © 环境可靠性EMC试验. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      <div className="atmosphere" />
      <SpaceBackground />
      <Navbar />
      
      <main>
        <Hero />
        <PlatformFeaturesSection />
        <GallerySection />
        <TestingSection />
        
        {/* Exhibition Insights Placeholder */}
        <section id="insights" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">展会洞察 & 投融资</h2>
                <div className="space-y-6">
                  <div className="p-6 glass-card">
                    <h4 className="text-lg font-bold text-white mb-2">商业航天政策论坛</h4>
                    <p className="text-sm text-gray-400">分析低轨星座建设、太空算力与 AI 融合等前沿议题。</p>
                  </div>
                  <div className="p-6 glass-card">
                    <h4 className="text-lg font-bold text-white mb-2">航天金融服务专区</h4>
                    <p className="text-sm text-gray-400">展示航天保险、融资租赁，精准对接资本与硬核技术。</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square glass-card flex items-center justify-center p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 animate-pulse" />
                  <div className="text-center z-10">
                    <ShieldCheck className="w-24 h-24 text-blue-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">共享实验室入口</h3>
                    <p className="text-gray-400 text-sm mb-6">让中小民营企业能像预定“共享单车”一样，在线申请大型试验设备。</p>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold">进入共享平台</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
