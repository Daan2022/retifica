import { motion, useScroll, useTransform } from "motion/react";
import { 
  Wrench, 
  Settings, 
  Droplets, 
  CheckCircle2, 
  PhoneCall, 
  ChevronRight,
  Flame,
  Gauge,
  MapPin,
  Clock
} from "lucide-react";
import { useRef } from "react";
import logoUrl from "../img/logo.png";
import heroImage from "../img/523ae858-3b98-4d5d-8d64-119ca2079bd9.png";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.05], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const services = [
    {
      title: "Plaina / Usinagem",
      description: "Nivelamento térmico e precisão milimétrica. O cabeçote pronto para a máxima compressão.",
      icon: <Settings className="w-8 h-8 text-belo-yellow" />,
      image: "https://images.unsplash.com/photo-1565514020179-026b92b6d761?q=80&w=800&auto=format&fit=crop",
      index: "01"
    },
    {
      title: "Banho Químico",
      description: "Limpeza profunda e descarbonização absoluta. Removemos anos de graxa e resíduos incrustados.",
      icon: <Droplets className="w-8 h-8 text-belo-red" />,
      image: "https://images.unsplash.com/photo-1580274455052-4217150937a0?q=80&w=800&auto=format&fit=crop",
      index: "02"
    },
    {
      title: "Assentamento e Bucha",
      description: "Recuperação de guias de válvulas e sedes. Garantia de vedação perfeita para seu motor.",
      icon: <Flame className="w-8 h-8 text-belo-yellow" />,
      image: "https://images.unsplash.com/photo-1632731174987-0bda0bb23b0a?q=80&w=800&auto=format&fit=crop",
      index: "03"
    },
    {
      title: "Serviço Completo",
      description: "Sua retífica de ponta a ponta com qualidade garantida. Pegamos quebrado, entregamos novo.",
      icon: <CheckCircle2 className="w-8 h-8 text-belo-red" />,
      image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop",
      index: "04"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1486262715619-670810a04929?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503375837265-22d7ba598006?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-belo-dark font-sans selection:bg-belo-red selection:text-white">
      
      {/* Navbar */}
      <motion.header 
        style={{ y: headerY, opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center border-b border-white/5 bg-black/40 backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="Retífica Belô" className="h-20 md:h-28 lg:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#sobre" className="hover:text-belo-red transition-colors text-zinc-300">Sobre</a>
          <a href="#servicos" className="hover:text-belo-red transition-colors text-zinc-300">Serviços</a>
          <a href="#galeria" className="hover:text-belo-red transition-colors text-zinc-300">Galeria</a>
          <a href="#contato" className="hover:text-belo-red transition-colors text-zinc-300">Contato</a>
        </div>
        <a href="#contato" className="px-5 py-2 md:px-6 bg-belo-red hover:bg-red-700 text-white font-bold rounded-sm skew-x-[-12deg] transition-all flex items-center gap-2">
          <span className="skew-x-[12deg] flex items-center gap-2 uppercase tracking-wider text-xs md:text-sm">Orçamento <ChevronRight className="w-4 h-4 hidden sm:block" /></span>
        </a>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full md:w-1/3 h-1/3 bg-zinc-800/30 blur-[100px] rounded-full pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1920&auto=format&fit=crop" 
            alt="Mecânico trabalhando em motor" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover blur-[2px] scale-105 opacity-10"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-3/5">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-belo-red font-mono text-sm tracking-[0.3em] uppercase block mb-4 border-l-4 border-belo-red pl-4"
              >
                Performance & Precisão
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic uppercase leading-[1.1] mb-6 tracking-tight"
              >
                RETÍFICA DE <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white break-words pr-2 pb-2 inline-block">CABEÇOTE BELÔ</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed"
              >
                Somos especialistas em trazer seu motor de volta à vida. Serviço completo, maquinário moderno e precisão milimétrica para quem não brinca em serviço.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full md:w-2/5 flex justify-center relative mt-12 md:mt-0"
            >
              <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-belo-red/20 blur-[80px] rounded-full pointer-events-none z-0"></div>
              <img 
                src={heroImage} 
                alt="Motor Retífica Belô" 
                className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain relative z-10 drop-shadow-[0_0_25px_rgba(230,30,42,0.4)] hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute bottom-4 right-4 md:-bottom-4 md:-right-4 z-20">
                 <div className="bg-zinc-900/90 backdrop-blur-sm p-4 border border-white/10 rounded-lg shadow-2xl text-center">
                    <div className="text-3xl md:text-4xl font-bold italic tracking-tighter text-white">100%</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-belo-red">Qualidade</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 relative z-10 bg-belo-dark px-6 md:px-12 border-b border-white/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-belo-red/20 blur-[100px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop" 
                alt="Oficina Retífica Belô" 
                className="relative z-10 w-full object-cover rounded-xl border border-white/10 grayscale-[50%] hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-zinc-900 border border-white/10 p-6 rounded-lg z-20 shadow-2xl">
                <div className="font-display text-5xl italic font-black text-white">15+</div>
                <div className="text-xs font-mono uppercase tracking-widest text-belo-red">Anos de Experiência</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-belo-red font-mono text-sm tracking-[0.3em] uppercase block mb-4 border-l-4 border-belo-red pl-4">Nossa História</h2>
              <h3 className="font-black italic text-4xl md:text-5xl uppercase tracking-wider mb-6 text-white">
                Paixão por <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">Motores</span>
              </h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  A Retífica Belô nasceu da paixão pela mecânica automotiva e da necessidade de um serviço de usinagem de cabeçotes com padrão ouro em Belo Horizonte.
                </p>
                <p>
                  Não somos uma retífica comum. Investimos continuamente em maquinário de ponta e treinamento de nossa equipe para garantir que cada centésimo de milímetro seja respeitado. Aqui, tratamos o seu motor como se fosse nosso.
                </p>
                <p>
                  Nosso compromisso não é apenas com o conserto, mas com a restauração da potência e da confiabilidade do seu veículo.
                </p>
              </div>
              <a href="#contato" className="inline-flex mt-8 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold uppercase text-xs tracking-wider hover:bg-white/10 hover:border-belo-red transition-all cursor-pointer">
                Fale com a Equipe
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Divider */}
      <div className="border-y border-white/5 bg-black/40 backdrop-blur-md relative z-20">
        <div className="container mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[ 
              { number: "+15", label: "Anos de Mercado" },
              { number: "10k", label: "Cabeçotes Feitos" },
              { number: "100%", label: "Garantia de Qualidade" },
              { number: "24h", label: "Orçamento Rápido" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-2 md:px-4 text-center group"
              >
                <div className="font-sans font-black italic text-3xl md:text-4xl text-white mb-2 transition-colors group-hover:text-belo-red">{stat.number}</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="servicos" className="py-32 relative z-10 bg-belo-dark px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="font-sans font-black text-[15vw] md:text-8xl uppercase tracking-tighter opacity-5 absolute -top-4 left-6 pointer-events-none italic">ESPECIALIDADES</h2>
            <h3 className="font-black italic text-3xl md:text-4xl uppercase tracking-wider relative z-10 flex items-center gap-4">
              <span className="w-12 h-1 bg-belo-red"></span>
              Nossos Serviços
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group relative bg-zinc-900/50 p-8 transition-all overflow-hidden h-[360px] flex flex-col ${i === 3 ? 'border-b-4 border-belo-red shadow-[0_0_20px_rgba(230,30,42,0.1)] bg-red-900/10' : 'border-b-4 border-zinc-800 hover:border-belo-red'}`}
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-10 transition-opacity duration-700">
                  <img src={service.image} className="w-full h-full object-cover blur-[2px]" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[#0f0f0f]/80"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`text-xs font-mono mb-4 ${i === 3 ? 'text-belo-red' : 'text-zinc-500'}`}>
                    {i === 3 ? 'PREMIUM' : `SERVIÇO ${service.index}`}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="mb-4 text-white group-hover:text-belo-red transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-black uppercase italic mb-3 text-white">{service.title}</h4>
                    <p className="text-sm text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section id="qualidade" className="py-24 bg-belo-gray border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-black/40 border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(230,30,42,0.15)] text-belo-red"
          >
            <Wrench className="w-10 h-10" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black italic uppercase text-white mb-6"
          >
            QUALIDADE É A <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">NOSSA ASSINATURA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl font-medium"
          >
            Não basta limpar e montar. O cabeçote é o coração do motor, e nós tratamos dele com o respeito e a técnica que ele merece. Tolerâncias exatas, medidas originais e performance restaurada.
          </motion.p>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-24 relative z-10 bg-belo-dark px-6 md:px-12 border-b border-white/5">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-belo-red font-mono text-sm tracking-[0.3em] uppercase inline-block mb-4">Portfólio</h2>
            <h3 className="font-black italic text-4xl md:text-5xl uppercase tracking-wider text-white">
              Nossa <span className="text-belo-red">Galeria</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-md bg-zinc-900 border border-white/5"
              >
                <img 
                  src={img} 
                  alt={`Galeria ${i + 1}`} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-belo-red/50 transition-colors duration-500 pointer-events-none z-10 w-full h-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA & Footer */}
      <section id="contato" className="py-24 bg-belo-dark relative z-10 px-6 md:px-12 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full">
           <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover opacity-[0.03] scale-110 pointer-events-none" alt="" aria-hidden="true" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-gradient-to-r from-belo-dark to-transparent"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight mb-6">Precisando da <br/><span className="text-belo-red">nossa Retífica?</span></h2>
              <p className="text-zinc-400 mb-8 max-w-md">Traga seu cabeçote para uma avaliação com a nossa equipe. Aqui a conversa é reta e o serviço é de primeira.</p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:border-belo-red group-hover:bg-red-900/20 transition-all">
                    <PhoneCall className="w-5 h-5 text-belo-red" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Ligue Agora</div>
                    <div className="text-xl font-bold font-mono text-white">(31) 99999-0000</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:border-belo-red group-hover:bg-red-900/20 transition-all">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Localização</div>
                    <div className="text-base md:text-lg font-bold text-white">Av. das Oficinas, 1200 - Belo Horizonte</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-zinc-900/80 border border-zinc-800 rounded-lg flex items-center justify-center group-hover:border-belo-red group-hover:bg-red-900/20 transition-all">
                    <Clock className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Horário de Funcionamento</div>
                    <div className="text-base md:text-lg font-bold text-white">Seg a Sex - 08:00 às 18:00</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 p-8 md:p-10 border-b-4 border-zinc-800 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-belo-red blur-[100px] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <h3 className="text-3xl font-black italic uppercase tracking-wider mb-8 text-white">Faça seu Orçamento</h3>
              
              <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Seu Nome" className="w-full bg-black/40 border-b-2 border-zinc-800 p-4 focus:border-belo-red outline-none transition-colors text-white placeholder:text-zinc-600 font-medium" />
                </div>
                <div>
                  <input type="text" placeholder="Telefone / WhatsApp" className="w-full bg-black/40 border-b-2 border-zinc-800 p-4 focus:border-belo-red outline-none transition-colors text-white placeholder:text-zinc-600 font-medium" />
                </div>
                <div>
                  <input type="text" placeholder="Modelo do Veículo / Motor" className="w-full bg-black/40 border-b-2 border-zinc-800 p-4 focus:border-belo-red outline-none transition-colors text-white placeholder:text-zinc-600 font-medium" />
                </div>
                <div>
                  <textarea placeholder="Conte-nos o problema..." rows={4} className="w-full bg-black/40 border-b-2 border-zinc-800 p-4 focus:border-belo-red outline-none transition-colors resize-none text-white placeholder:text-zinc-600 font-medium"></textarea>
                </div>
                <button className="w-full bg-belo-red text-white py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors mt-4 flex items-center justify-center skew-x-[-12deg]">
                  <span className="skew-x-[12deg] flex items-center gap-2 text-sm"><Gauge className="w-5 h-5" /> ENVIAR PEDIDO</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      <footer className="bg-black px-6 md:px-12 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-zinc-500 font-mono text-[10px] uppercase gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left">
          <div className="flex gap-2 items-center justify-center md:justify-start text-white">
            <span className="text-belo-red underline">LOCALIZAÇÃO:</span> BELO HORIZONTE, MG
          </div>
          <div className="flex gap-2 items-center justify-center md:justify-start">
            <span className="text-belo-red">ATENDIMENTO:</span> SEG-SEX (08:00 - 18:00)
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-lg font-bold text-white italic font-sans truncate break-words">(31) 99999-0000</div>
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
           <div className="tracking-widest hidden sm:block">ONLINE AGORA</div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5531999990000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  );
}
