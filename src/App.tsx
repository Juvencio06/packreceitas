import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ShoppingCart,
  Calendar,
  ArrowRightLeft,
  Apple,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Image assets optimized in high-fidelity WebP format
import heroCover3d from "./assets/images/hero_cover_3d.webp";
import recipe01Frango from "./assets/images/recipe_01_frango.webp";
import recipe04Salmao from "./assets/images/recipe_04_salmao.webp";
import recipe26Escondidinho from "./assets/images/recipe_26_escondidinho.webp";
import recipe88Sopa from "./assets/images/recipe_88_sopa.webp";
import recipe98Tofu from "./assets/images/recipe_98_tofu.webp";
import bonus01Compras from "./assets/images/bonus_01_compras.webp";
import bonus02Planner from "./assets/images/bonus_02_planner.webp";
import bonus03Substituicoes from "./assets/images/bonus_03_substituicoes.webp";
import bonus04Lanches from "./assets/images/bonus_04_lanches.webp";

// Checkout URLs
const URL_PREMIUM_29 =
  "https://pay.hotmart.com/V107879675R?off=cx05efsu&checkoutMode=10";
const URL_UPGRADE_24 =
  "https://pay.hotmart.com/V107879675R?off=73r2kgfc&checkoutMode=10";
const URL_ESSENCIAL_19 =
  "https://pay.hotmart.com/V107879675R?off=26q2kx81&checkoutMode=10";

// Recipe Slider Data - Exact 5 recipes in exact order
const RECIPES_DATA = [
  {
    id: "01",
    title: "01 — Frango Grelhado com Arroz Integral e Legumes",
    image: recipe01Frango,
  },
  {
    id: "04",
    title: "04 — Salmão Assado com Quinoa e Aspargos",
    image: recipe04Salmao,
  },
  {
    id: "26",
    title: "26 — Escondidinho de Carne com Batata-Doce e Queijo",
    image: recipe26Escondidinho,
  },
  {
    id: "88",
    title: "88 — Sopa Cremosa de Abóbora com Gengibre",
    image: recipe88Sopa,
  },
  {
    id: "98",
    title: "98 — Tofu Grelhado com Legumes Salteados",
    image: recipe98Tofu,
  },
];

// FAQ Data - Exact questions requested
const FAQ_DATA = [
  {
    question: "É um produto físico?",
    answer:
      "Não. O Pack de Almoços é um produto 100% digital. Você recebe acesso imediato pelo seu e-mail para visualizar no celular, tablet ou computador, ou baixar e imprimir se preferir.",
  },
  {
    question: "Quantas receitas estão incluídas?",
    answer:
      "Estão incluídas exatamente 100 receitas práticas, organizadas e pensadas para o dia a dia real.",
  },
  {
    question: "Como recebo meu acesso?",
    answer:
      "O envio é automático e imediato logo após a confirmação do pagamento. Você receberá os dados de acesso no e-mail cadastrado.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. O material foi formatado para abrir perfeitamente em qualquer smartphone, tablet ou computador.",
  },
  {
    question: "Posso adaptar as receitas?",
    answer:
      "Com certeza! As receitas usam ingredientes do dia a dia e você pode adaptar temperos e guarnições ao que tem na geladeira.",
  },
  {
    question: "E se eu comprar e perceber que não é para mim?",
    answer:
      "Você conta com 7 dias de garantia incondicional. Se achar que o material não facilitou o seu almoço, basta solicitar o reembolso e devolveremos 100% do seu dinheiro, sem burocracia.",
  },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const touchStartXRef = useRef<number | null>(null);

  // Auto slideshow for recipes - slides automáticos trocando instantaneamente
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === RECIPES_DATA.length - 1 ? 0 : prev + 1));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const scrollToOffer = () => {
    const el = document.getElementById("oferta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? RECIPES_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === RECIPES_DATA.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartXRef.current = null;
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-[#15140F] text-[#F7F4EA] font-sans antialiased overflow-x-hidden">
      {/* ========================================================
          01. HERO (Dark Section #15140F)
          ======================================================== */}
      <section className="relative bg-[#15140F] pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto overflow-hidden text-center">
        <div className="flex flex-col items-center">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white leading-[1.15] tracking-tight max-w-3xl">
            Chega de ficar pensando <span className="text-[#8BC43F]">todos os dias</span> no que preparar para o almoço.
          </h1>

          {/* Subheadline */}
          <p className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold text-[#F7F4EA] leading-snug max-w-2xl">
            100 receitas para variar o almoço sem complicação.
          </p>

          <p className="mt-3 text-base sm:text-lg text-[#EFE9D8]/80 leading-relaxed max-w-xl">
            Tenha mais opções para consultar quando faltar inspiração e escolha o que preparar sem precisar começar do zero todos os dias.
          </p>

          {/* Official Mockup (Centralizado) */}
          <div className="my-8 md:my-10 w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center aspect-[2/3] max-h-[480px] sm:max-h-[520px]">
            <img
              src={heroCover3d}
              alt="Pack de Almoços — 100 Receitas"
              width="900"
              height="1350"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>

          {/* Oferta Básica Abaixo do Mockup */}
          <div className="w-full max-w-md flex flex-col items-center">
            {/* 1. Preço anterior riscado */}
            <span className="text-sm sm:text-base text-[#8E8B82] line-through font-semibold">
              R$ 67,00
            </span>

            {/* 2. Texto "POR APENAS" */}
            <span className="text-sm sm:text-base font-extrabold text-[#F7F4EA] tracking-wider uppercase mt-0.5">
              POR APENAS
            </span>

            {/* 3. Preço atual grande em destaque */}
            <div className="text-4xl sm:text-5xl font-extrabold text-[#8BC43F] tracking-tight my-1.5 drop-shadow-xs">
              R$ 19,90
            </div>

            {/* 4. CTA "🛒 QUERO O PACK DE ALMOÇOS" (scroll suave para a seção de ofertas) */}
            <button
              type="button"
              onClick={scrollToOffer}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-4.5 text-base sm:text-lg font-bold text-[#15140F] bg-[#8BC43F] hover:bg-[#9cd44f] rounded-[10px] cursor-pointer min-h-[54px] mt-2 cta-floating"
            >
              <ShoppingCart className="w-5 h-5 mr-2.5 shrink-0" />
              QUERO O PACK DE ALMOÇOS
            </button>

            {/* Elementos de confiança */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-[#EFE9D8]/90 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#8BC43F] shrink-0" />
                Acesso imediato
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#8BC43F] shrink-0" />
                Acesso vitalício
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#8BC43F] shrink-0" />
                7 dias de garantia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          02. PROBLEMA + REFRAME (Light Section #F7F4EA)
          ======================================================== */}
      <section className="bg-[#F7F4EA] text-[#15140F] py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E4E0D8]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#15140F] leading-tight">
            Todo dia chega a mesma pergunta:
          </h2>

          <div className="py-3 px-6 bg-white rounded-xl border border-[#E4E0D8] inline-block shadow-xs">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#15140F] tracking-tight italic">
              “O que eu vou preparar hoje?”
            </p>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#33322D] leading-relaxed max-w-2xl mx-auto">
            <p>
              A rotina é corrida, a imaginação acaba e a resposta quase sempre é a mesma: improvisar qualquer coisa, comer sempre o mesmo prato ou perder um tempão pensando do zero.
            </p>
            <div className="pt-3 border-t border-[#E4E0D8]">
              <p className="font-semibold text-[#15140F]">
                O problema talvez não seja falta de criatividade.
              </p>
              <p className="text-lg sm:text-xl font-bold text-[#15140F] mt-1">
                Talvez você simplesmente precise ter <span className="text-[#8BC43F] bg-[#15140F] px-2 py-0.5 rounded-md">mais opções para escolher</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          03. SOLUÇÃO + COMO FUNCIONA (Dark Section #15140F)
          ======================================================== */}
      <section className="bg-[#15140F] text-[#F7F4EA] py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Conheça o Pack de Almoços — <span className="text-[#8BC43F]">100 Receitas</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#EFE9D8]/90">
              Um catálogo de opções para você consultar quando precisar decidir o que preparar para o almoço.
            </p>
          </div>

          {/* Compact Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-[#201E17] p-5 rounded-[10px] border border-[#333026] text-center flex flex-col items-center">
              <span className="w-9 h-9 rounded-full bg-[#8BC43F] text-[#15140F] flex items-center justify-center font-bold text-sm mb-3">
                01
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Escolha uma opção
              </h3>
              <p className="text-xs text-[#A8A59B] leading-relaxed">
                Escolha uma receita que combine com o que você quer preparar.
              </p>
            </div>

            <div className="bg-[#201E17] p-5 rounded-[10px] border border-[#333026] text-center flex flex-col items-center">
              <span className="w-9 h-9 rounded-full bg-[#8BC43F] text-[#15140F] flex items-center justify-center font-bold text-sm mb-3">
                02
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Confira os ingredientes
              </h3>
              <p className="text-xs text-[#A8A59B] leading-relaxed">
                Confira os ingredientes necessários antes de começar.
              </p>
            </div>

            <div className="bg-[#201E17] p-5 rounded-[10px] border border-[#333026] text-center flex flex-col items-center">
              <span className="w-9 h-9 rounded-full bg-[#8BC43F] text-[#15140F] flex items-center justify-center font-bold text-sm mb-3">
                03
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Planeje
              </h3>
              <p className="text-xs text-[#A8A59B] leading-relaxed">
                Organize algumas opções para os próximos dias.
              </p>
            </div>

            <div className="bg-[#201E17] p-5 rounded-[10px] border border-[#333026] text-center flex flex-col items-center">
              <span className="w-9 h-9 rounded-full bg-[#8BC43F] text-[#15140F] flex items-center justify-center font-bold text-sm mb-3">
                04
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Adapte
              </h3>
              <p className="text-xs text-[#A8A59B] leading-relaxed">
                Adapte temperos e acompanhamentos ao seu gosto e ao que estiver disponível.
              </p>
            </div>

            <div className="bg-[#201E17] p-5 rounded-[10px] border border-[#333026] text-center flex flex-col items-center sm:col-span-2 md:col-span-1">
              <span className="w-9 h-9 rounded-full bg-[#8BC43F] text-[#15140F] flex items-center justify-center font-bold text-sm mb-3">
                05
              </span>
              <h3 className="text-sm font-bold text-white mb-1">
                Prepare
              </h3>
              <p className="text-xs text-[#A8A59B] leading-relaxed">
                Siga as instruções da receita escolhida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          04. VEJA POR DENTRO — 5 RECEITAS (Light Section #F7F4EA)
          ======================================================== */}
      <section className="bg-[#F7F4EA] text-[#15140F] py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E4E0D8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#15140F] leading-tight">
              Veja algumas das receitas que estão dentro
            </h2>
          </div>

          {/* Slider Container - Slides Automáticos trocando instantaneamente */}
          <div
            className="relative max-w-xs sm:max-w-sm mx-auto select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide Image */}
            <div className="relative flex justify-center items-center">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Receita anterior"
                className="absolute -left-5 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#15140F] shadow-md border border-[#E4E0D8] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="w-full flex flex-col items-center">
                {/* Container com altura estável e todas as imagens pré-montadas para troca instantânea */}
                <div className="relative w-full h-[470px] sm:h-[530px] rounded-xl overflow-hidden shadow-lg border border-[#E4E0D8] bg-white p-2 flex items-center justify-center">
                  {RECIPES_DATA.map((recipe, idx) => (
                    <div
                      key={recipe.id}
                      className={`absolute inset-2 flex items-center justify-center transition-none ${
                        activeSlide === idx
                          ? "opacity-100 z-10 pointer-events-auto"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        width="390"
                        height="570"
                        className="w-full h-full object-contain rounded-lg"
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm sm:text-base font-bold text-[#15140F] text-center min-h-[40px] flex items-center justify-center">
                  {RECIPES_DATA[activeSlide].title}
                </p>
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Próxima receita"
                className="absolute -right-5 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#15140F] shadow-md border border-[#E4E0D8] transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {RECIPES_DATA.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Ver receita ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeSlide === idx
                      ? "w-7 bg-[#8BC43F]"
                      : "w-2 bg-[#D1CCBF] hover:bg-[#A8A59B]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          05. VARIEDADE / VALOR (Cream Secondary #EFE9D8)
          ======================================================== */}
      <section className="bg-[#EFE9D8] text-[#15140F] py-14 md:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#E4E0D8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15140F]">
            Quando você tem mais opções, escolher fica mais simples.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="p-5 rounded-xl bg-white border border-[#E4E0D8]/80 shadow-xs">
              <span className="text-lg font-bold text-[#15140F] block">
                Mais opções.
              </span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E4E0D8]/80 shadow-xs">
              <span className="text-lg font-bold text-[#15140F] block">
                Menos improviso.
              </span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#E4E0D8]/80 shadow-xs">
              <span className="text-lg font-bold text-[#15140F] block">
                Uma escolha mais simples na hora do almoço.
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#55534B] leading-relaxed max-w-xl mx-auto">
            100 receitas reunidas para você consultar no dia a dia.
          </p>
        </div>
      </section>

      {/* ========================================================
          06. MATERIAIS COMPLEMENTARES (Light Section #F7F4EA)
          ======================================================== */}
      <section className="bg-[#F7F4EA] text-[#15140F] py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E4E0D8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#15140F] leading-tight">
              E AINDA TEM MAIS...
            </h2>
            <p className="mt-3 text-base sm:text-lg font-medium text-[#55534B]">
              Além das 100 receitas, você também recebe:
            </p>
          </div>

          {/* Cards dos 4 Bônus com Badge Superior Esquerdo */}
          <div className="space-y-8 md:space-y-9">
            {/* BÔNUS 1 */}
            <div className="relative bg-white rounded-2xl border border-[#E4E0D8] shadow-xs pt-7 pb-6 px-5 sm:p-7 md:p-8">
              {/* Badge BÔNUS 1 no topo esquerdo */}
              <div className="absolute -top-3.5 left-5 sm:left-6">
                <span className="inline-block bg-[#8BC43F] text-[#15140F] font-extrabold text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-xs">
                  BÔNUS 1
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7">
                {/* Mockup 3D */}
                <div className="w-full sm:w-44 md:w-52 shrink-0 flex justify-center items-center">
                  <div className="w-full max-w-[190px] sm:max-w-none flex justify-center py-2">
                    <img
                      src={bonus01Compras}
                      alt="Lista Inteligente de Compras"
                      width="700"
                      height="640"
                      decoding="async"
                      className="w-auto h-auto max-h-[170px] sm:max-h-[190px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Conteúdo Textual */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#15140F] leading-snug">
                    Lista Inteligente de Compras
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#55534B] leading-relaxed">
                    Organize suas compras de forma mais prática e tenha mais clareza sobre os ingredientes necessários para preparar suas refeições.
                  </p>
                </div>
              </div>
            </div>

            {/* BÔNUS 2 */}
            <div className="relative bg-white rounded-2xl border border-[#E4E0D8] shadow-xs pt-7 pb-6 px-5 sm:p-7 md:p-8">
              {/* Badge BÔNUS 2 no topo esquerdo */}
              <div className="absolute -top-3.5 left-5 sm:left-6">
                <span className="inline-block bg-[#8BC43F] text-[#15140F] font-extrabold text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-xs">
                  BÔNUS 2
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7">
                {/* Mockup 3D */}
                <div className="w-full sm:w-44 md:w-52 shrink-0 flex justify-center items-center">
                  <div className="w-full max-w-[190px] sm:max-w-none flex justify-center py-2">
                    <img
                      src={bonus02Planner}
                      alt="Planner Semanal de Almoços"
                      width="700"
                      height="640"
                      decoding="async"
                      className="w-auto h-auto max-h-[170px] sm:max-h-[190px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Conteúdo Textual */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#15140F] leading-snug">
                    Planner Semanal de Almoços
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#55534B] leading-relaxed">
                    Planeje seus almoços ao longo da semana e tenha uma visão mais organizada das refeições que pretende preparar.
                  </p>
                </div>
              </div>
            </div>

            {/* BÔNUS 3 */}
            <div className="relative bg-white rounded-2xl border border-[#E4E0D8] shadow-xs pt-7 pb-6 px-5 sm:p-7 md:p-8">
              {/* Badge BÔNUS 3 no topo esquerdo */}
              <div className="absolute -top-3.5 left-5 sm:left-6">
                <span className="inline-block bg-[#8BC43F] text-[#15140F] font-extrabold text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-xs">
                  BÔNUS 3
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7">
                {/* Mockup 3D */}
                <div className="w-full sm:w-44 md:w-52 shrink-0 flex justify-center items-center">
                  <div className="w-full max-w-[190px] sm:max-w-none flex justify-center py-2">
                    <img
                      src={bonus03Substituicoes}
                      alt="Lista Inteligente de Substituições"
                      width="700"
                      height="640"
                      decoding="async"
                      className="w-auto h-auto max-h-[170px] sm:max-h-[190px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Conteúdo Textual */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#15140F] leading-snug">
                    Lista Inteligente de Substituições
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#55534B] leading-relaxed">
                    Encontre alternativas para adaptar suas receitas de acordo com os ingredientes que você tem disponíveis.
                  </p>
                </div>
              </div>
            </div>

            {/* BÔNUS 4 */}
            <div className="relative bg-white rounded-2xl border border-[#E4E0D8] shadow-xs pt-7 pb-6 px-5 sm:p-7 md:p-8">
              {/* Badge BÔNUS 4 no topo esquerdo */}
              <div className="absolute -top-3.5 left-5 sm:left-6">
                <span className="inline-block bg-[#8BC43F] text-[#15140F] font-extrabold text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-xs">
                  BÔNUS 4
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7">
                {/* Mockup 3D */}
                <div className="w-full sm:w-44 md:w-52 shrink-0 flex justify-center items-center">
                  <div className="w-full max-w-[190px] sm:max-w-none flex justify-center py-2">
                    <img
                      src={bonus04Lanches}
                      alt="Guia de Lanches Saudáveis e Econômicos"
                      width="700"
                      height="640"
                      decoding="async"
                      className="w-auto h-auto max-h-[170px] sm:max-h-[190px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Conteúdo Textual */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#15140F] leading-snug">
                    Guia de Lanches Saudáveis e Econômicos
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#55534B] leading-relaxed">
                    Tenha mais ideias de lanches para variar as opções da sua rotina de forma prática e econômica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          07. OFERTA PRINCIPAL (Dark Section #15140F, id="oferta")
          ======================================================== */}
      <section id="oferta" className="bg-[#15140F] text-[#F7F4EA] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Escolha a sua versão
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#EFE9D8]/80 max-w-xl mx-auto">
              Tenha acesso ao Pack de Almoços e escolha a opção que faz mais sentido para você.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* CARD 1 — VERSÃO BÁSICA */}
            <div className="bg-[#201E17] text-[#F7F4EA] rounded-2xl p-7 sm:p-8 border border-[#333026] flex flex-col justify-between shadow-lg">
              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-extrabold text-white">
                    ⭐ Pacote Básico
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A59B] mt-1">
                    Acesso imediato e vitalício às 100 receitas para o dia a dia.
                  </p>
                </div>

                {/* Bloco de Preço */}
                <div className="bg-[#15140F] p-5 rounded-xl border border-[#2D2A22] my-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-sm text-[#8E8B82] line-through font-semibold">
                      R$ 67,00
                    </span>
                    <span className="bg-[#333026] text-[#EFE9D8] text-xs font-bold px-2 py-0.5 rounded">
                      -70%
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight my-1">
                    R$ 19,90
                  </div>

                  <span className="text-xs font-bold text-[#8BC43F] block">
                    Você economiza R$ 47,10
                  </span>
                  <span className="text-[11px] text-[#A8A59B] mt-0.5 block">
                    Pagamento único • Sem mensalidades
                  </span>
                </div>

                {/* Itens Inclusos */}
                <div className="space-y-3 pt-2 text-sm text-[#EFE9D8]/95">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">Pack de Almoços — 100 Receitas</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <span>Acesso Vitalício</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <span>Acesso Imediato</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <span>Acesso pelo celular, tablet ou computador</span>
                  </div>
                </div>
              </div>

              {/* CTA Essencial / Básico (Abre Popup de Upgrade) */}
              <div className="pt-6 mt-6 border-t border-[#333026]">
                <button
                  type="button"
                  onClick={() => setIsUpgradeModalOpen(true)}
                  className="w-full inline-flex items-center justify-center text-center px-6 py-4 text-sm sm:text-base font-bold text-[#15140F] bg-[#8BC43F] hover:bg-[#9cd44f] active:scale-[0.99] rounded-[10px] transition-all cursor-pointer shadow-sm min-h-[50px]"
                >
                  QUERO O PACOTE BÁSICO
                </button>
              </div>
            </div>

            {/* CARD 2 — PACOTE PREMIUM (Visualmente Dominante) */}
            <div className="relative bg-white text-[#15140F] rounded-2xl p-7 sm:p-8 border-2 border-[#8BC43F] shadow-2xl flex flex-col justify-between">
              {/* Selo no Topo */}
              <div className="absolute -top-3.5 left-6 sm:left-8">
                <span className="inline-flex items-center gap-1.5 bg-[#8BC43F] text-[#15140F] font-bold text-xs tracking-wide uppercase px-4 py-1 rounded-full shadow-sm">
                  🏆 MAIS VENDIDO
                </span>
              </div>

              <div>
                <div className="mb-4 mt-1">
                  <h3 className="text-2xl font-extrabold text-[#15140F]">
                    👑 Pacote Premium
                  </h3>
                  <p className="text-xs sm:text-base font-bold text-[#8BC43F] mt-1 uppercase tracking-wide">
                    Tudo do Básico + Bônus Exclusivos
                  </p>
                </div>

                {/* Bloco de Preço */}
                <div className="bg-[#F7F4EA] p-5 rounded-xl border border-[#E4E0D8] my-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-sm text-[#66706B] line-through font-semibold">
                      R$ 279,90
                    </span>
                    <span className="bg-[#15140F] text-[#8BC43F] text-xs font-bold px-2 py-0.5 rounded">
                      -89%
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-[#15140F] tracking-tight my-1">
                    R$ 29,90
                  </div>

                  <span className="text-xs font-bold text-[#2F6654] block">
                    Você economiza R$ 250,00
                  </span>
                  <span className="text-[11px] text-[#66706B] mt-0.5 block">
                    Pagamento único • Sem mensalidades
                  </span>
                </div>

                {/* Materiais Exclusivos */}
                <div className="space-y-3 pt-2 text-sm text-[#33322D]">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#15140F] block">
                        🎁 BÔNUS 1: Lista Inteligente de Compras
                      </span>
                      <span className="text-xs text-[#55534B]">
                        ✓ Incluso no Pacote Premium
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#15140F] block">
                        🎁 BÔNUS 2: Planner Semanal de Almoços
                      </span>
                      <span className="text-xs text-[#55534B]">
                        ✓ Incluso no Pacote Premium
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#15140F] block">
                        🎁 BÔNUS 3: Lista Inteligente de Substituições
                      </span>
                      <span className="text-xs text-[#55534B]">
                        ✓ Incluso no Pacote Premium
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#8BC43F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#15140F] block">
                        🎁 BÔNUS 4: Guia de Lanches Saudáveis e Econômicos
                      </span>
                      <span className="text-xs text-[#55534B]">
                        ✓ Incluso no Pacote Premium
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Premium */}
              <div className="pt-6 mt-6 border-t border-[#E4E0D8]">
                <a
                  href={URL_PREMIUM_29}
                  className="w-full inline-flex items-center justify-center text-center px-6 py-4 text-base font-bold text-[#15140F] bg-[#8BC43F] hover:bg-[#9cd44f] rounded-[10px] cursor-pointer min-h-[50px] cta-floating"
                >
                  <span className="w-full text-center block">QUERO O PACOTE PREMIUM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          07. GARANTIA + FAQ (Cream Secondary #EFE9D8)
          ======================================================== */}
      <section className="bg-[#EFE9D8] text-[#15140F] py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E4E0D8]">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Garantia Card */}
          <div className="bg-[#7ed65c] p-6 sm:p-8 rounded-[16px] border border-[#6ec54c] text-center shadow-xs">
            <ShieldCheck className="w-12 h-12 bg-[#030303] text-[#7ed65c] p-2 rounded-full mx-auto mb-3" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#15140F]">
              Teste por 7 dias. Se não fizer sentido para você, peça seu reembolso.
            </h2>
            <div className="mt-3 text-sm font-bold text-[#0b0b0a] leading-relaxed max-w-xl mx-auto space-y-2">
              <p>
                Você terá 7 dias para acessar o Pack de Almoços — 100 Receitas, conhecer o material e utilizar as receitas na sua rotina.
              </p>
              <p>
                Se decidir que o produto não é para você, poderá solicitar o reembolso dentro do prazo de garantia.
              </p>
            </div>
          </div>

          {/* Compact FAQ Accordion */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-extrabold text-[#15140F]">
                Perguntas frequentes
              </h3>
            </div>

            <div className="space-y-3">
              {FAQ_DATA.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[12px] border border-[#E4E0D8] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F7F4EA]/50 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#15140F]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#15140F] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#55534B] leading-relaxed border-t border-[#E4E0D8]/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          09. FECHAMENTO (Dark Section #15140F)
          ======================================================== */}
      <section className="bg-[#15140F] text-[#F7F4EA] py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Mais opções para decidir o que preparar no almoço.
          </h2>

          <p className="text-base sm:text-lg text-[#EFE9D8]/90">
            Em vez de começar do zero todos os dias, tenha opções para escolher.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-[#15140F] bg-[#8BC43F] hover:bg-[#9cd44f] active:scale-[0.99] rounded-[10px] shadow-sm transition-all cursor-pointer min-h-[52px]"
            >
              QUERO TER O PACK
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          FOOTER (Light Background #FFFFFF)
          ======================================================== */}
      <footer className="bg-[#FFFFFF] py-8 px-4 sm:px-6 lg:px-8 text-[#15140F] border-t border-[#E4E0D8]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#55534B]">
          <div>
            <span className="font-bold text-[#15140F] text-sm block">
              Pack de Almoços — 100 Receitas
            </span>
            <span>Produto digital.</span>
          </div>
          <div>© 2026 • Todos os direitos reservados.</div>
        </div>
      </footer>

      {/* ========================================================
          10. POPUP DE UPGRADE (Modal)
          ======================================================== */}
      {isUpgradeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E0D09]/60 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-md bg-[#F7F4EA] text-[#15140F] rounded-[16px] p-6 sm:p-8 border border-[#E4E0D8] shadow-2xl text-center">
            {/* Close Button X */}
            <button
              type="button"
              onClick={() => setIsUpgradeModalOpen(false)}
              aria-label="Fechar janela"
              className="absolute top-4 right-4 p-1.5 text-[#55534B] hover:text-[#15140F] rounded-full hover:bg-white/80 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block bg-[#8BC43F] text-[#15140F] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              ESPERE UM MOMENTO
            </span>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#15140F] leading-tight">
              QUER LEVAR O PREMIUM POR APENAS R$24,90?
            </h3>

            <div className="my-4 text-xs sm:text-sm text-[#33322D] leading-relaxed space-y-2">
              <p>Você acabou de escolher o Pack de Almoços.</p>
              <p className="font-medium text-[#15140F]">
                Por apenas R$5 a mais, você leva a versão Premium com os 4 materiais complementares exclusivos inclusos.
              </p>
            </div>

            {/* Price Box */}
            <div className="my-5 p-4 rounded-xl bg-white border border-[#E4E0D8]">
              <span className="text-xs text-[#66706B] line-through font-semibold block">
                DE R$29,90
              </span>
              <div className="text-3xl font-extrabold text-[#15140F] my-0.5">
                POR R$24,90
              </div>
              <span className="text-xs font-bold text-[#2F6654]">
                Economia imediata de R$5,00
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5">
              <a
                href={URL_UPGRADE_24}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-[#15140F] bg-[#8BC43F] hover:bg-[#9cd44f] active:scale-[0.99] rounded-[10px] shadow-xs transition-all cursor-pointer min-h-[50px]"
              >
                QUERO O PREMIUM
              </a>

              <a
                href={URL_ESSENCIAL_19}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#55534B] hover:text-[#15140F] transition-colors cursor-pointer"
              >
                CONTINUAR COM O PACK
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
