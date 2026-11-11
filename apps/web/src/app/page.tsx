import Link from "next/link";
import { CinematicHud } from "@/components/cinematic/CinematicHud";
import { GradeSlider } from "@/components/cinematic/GradeSlider";
import { InquiryForm } from "@/components/cinematic/InquiryForm";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyyZPBeWH8eaY1P0so5yyfaqwQgAWKp7vQ7Lwt-9h5VRkk24FJDfUpynLOBb0HBdzTRAZnvnX9pOblZyw-vNCBx3mhhYawi6s2KNdA3oUgopwopbIVuoUaE1Q6AhFrw22W_IJlwBaVyUST67bViPwulpswITl_rsvvuMBA3RHJf79FvBAyzjOpHpI8S_ebLnbwd9rjfFpiUfhc7iZpu5mr3QKZi01pdlEMxYtWb1o";
const ACT01_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmadyhTCvBSEURJy3YNbvquO06U_y4UkOVQn5-1_NbA3FTgqth-6otppNH4obZCDA2UaeGSNh403BZ_Yh3tCPx0coMO_9gx28RYtm13BgPLsdO7OjaDwVmQeChNWG7Tk-8pyYoioQVhNpv6oiw3z7xQ-wsDVovHLeRFeJ66cNpPgvcWexyg-nQuJUMqV2NvFhyVgh8UqXybdTqqAunpmLUqOKP7aIiEyPDHug1Qnk";
const LENS_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6JyehAglG6673GPnWlefqz7o2ZgVwfZoKB9m2iAsv7zP_ahpGIRxJP_FyWw1Nrm930gKIdcmdg7hTMDI8Mk5aSOHwTGTnW8MldL8KKXYvUiWF0lD_IMBO1Nh8GeC-VYVHjQoyOmYT_ne1gs-y5F5FQHmZRWqs3NGRKw-Cy3db0bf8pD5bMWIWK08bi6hapue01pK_Ol4NuNTVWPoKjU5t4Y7iC_9jOvb46Tc_IMM";

export default function HomePage() {
  return (
    <main className="bg-surface text-on-surface font-sans">
      <CinematicHud />

      {/* MILESTONE 01 — THE OPENING EXPERIENCE (PROLOGUE / HERO) */}
      <section
        className="relative w-full h-[95vh] min-h-[640px] max-h-[1050px] flex items-center justify-center overflow-hidden bg-surface-container-lowest"
        id="prologue"
      >
        <div className="absolute inset-0 z-0">
          <img
            alt="Backlit Indian bride silhouette in chiaroscuro lighting"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12] transition-transform duration-[12000ms] ease-out"
            src={HERO_IMAGE}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-surface/70" />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(19,19,21,0) 40%, rgba(19,19,21,0.9) 100%)",
            }}
          />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-[1px] pointer-events-none" />
        </div>

        <div className="absolute inset-8 md:inset-16 pointer-events-none border border-secondary/15 flex flex-col justify-between p-4">
          <div className="flex justify-between">
            <span className="w-3 h-[1px] bg-primary/60" />
            <span className="w-3 h-[1px] bg-primary/60" />
          </div>
          <div className="flex justify-center items-center">
            <span className="material-symbols-outlined text-primary/30 text-2xl font-light">crop_free</span>
          </div>
          <div className="flex justify-between">
            <span className="w-3 h-[1px] bg-primary/60" />
            <span className="w-3 h-[1px] bg-primary/60" />
          </div>
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-6 mb-6">
            <span className="w-8 h-[1px] bg-primary/50" />
            <span className="font-label-metadata text-label-metadata uppercase tracking-[0.35em] text-primary">
              AN INDEPENDENT CREATIVE HOUSE
            </span>
            <span className="w-8 h-[1px] bg-primary/50" />
          </div>
          <h1 className="font-display text-headline-lg md:text-display-hero text-secondary-fixed font-normal tracking-[0.14em] uppercase mb-6 text-balance drop-shadow-2xl">
            RAJRAM
          </h1>
          <p className="font-title-editorial text-title-editorial italic text-on-surface-variant font-light tracking-wide max-w-xl mb-2 text-balance">
            Some moments are lived. Others become timeless.
          </p>
          <div className="font-label-cinematic text-label-cinematic uppercase tracking-[0.28em] text-secondary text-xs mb-8">
            WE CREATE STORIES WORTH REMEMBERING
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              className="group flex items-center gap-2 px-6 py-3 bg-surface-container/80 backdrop-blur-md border border-secondary/20 hover:border-primary transition-all duration-300"
              onClick={() => {}}
            >
              <span className="w-2 h-2 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
              <span className="font-label-cinematic text-label-cinematic text-on-surface uppercase group-hover:text-primary tracking-[0.24em] transition-colors">
                START AMBIENT SOUNDSCAPE
              </span>
              <span className="material-symbols-outlined text-[16px] text-primary ml-1 group-hover:scale-110 transition-transform">
                graphic_eq
              </span>
            </button>
            <Link
              href="#act-01"
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-on-primary hover:bg-primary-fixed transition-colors"
            >
              <span className="font-label-cinematic text-label-cinematic uppercase tracking-[0.24em] font-medium">
                DISCOVER THE WORLD
              </span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-y-0.5">
                arrow_downward
              </span>
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-on-surface-variant font-label-metadata text-label-metadata uppercase tracking-[0.25em]">
            <span className="text-primary font-medium">SCENE 01 / TAKE 04</span>
            <span className="opacity-40">•</span>
            <span>GATE: 2.39 ANAMORPHIC</span>
            <span className="opacity-40">•</span>
            <span>SOUND: 96KHZ / 24-BIT</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
          <span className="font-label-metadata text-label-metadata tracking-[0.3em] uppercase text-xs">SLATE</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* ACT 01 — THE INTRODUCTION (00:00 – 00:08) */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-surface relative" id="act-01">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="font-label-metadata text-label-metadata text-primary uppercase">ACT 01</span>
              <span className="text-outline">/</span>
              <span className="font-label-metadata text-label-metadata text-on-surface-variant uppercase tracking-[0.28em]">
                PROLOGUE &amp; ATMOSPHERE
              </span>
            </div>
            <div className="font-label-metadata text-label-metadata text-secondary tracking-[0.24em] hidden sm:block">
              TC 00:00:00:00 – 00:00:08:12
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-8">
              <span className="font-label-cinematic text-label-cinematic text-primary uppercase tracking-[0.3em] mb-3 block">
                THE CHRONICLE OF SOULS
              </span>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-secondary-fixed font-light leading-tight mb-8">
                Some moments are lived. <br />{" "}
                <span className="italic font-normal text-primary">Others become timeless.</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed mb-8">
                At RAJRAM, we operate at the intersection of classical cinema and
                high-fashion portraiture. We reject transient visual noise in pursuit
                of enduring dignity, framing love, legacy, and architectural grandeur
                with the weight of celluloid history.
              </p>
              <div className="bg-surface-container-low p-6 border-l-2 border-primary mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-metadata text-label-metadata uppercase text-primary">OPUS LOCALE</span>
                  <span className="font-label-metadata text-label-metadata text-on-surface">UDAIPUR, RAJASTHAN</span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-label-metadata text-label-metadata uppercase">EXPOSURE</span>
                  <span className="font-label-metadata text-label-metadata uppercase">TWILIGHT / 800 ASA D-CINEMA</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative group">
              <div className="relative overflow-hidden aspect-[16/9] lg:aspect-[2.39/1] bg-surface-container">
                <img
                  alt="Royal twilight palace courtyard scene with couple and candlelit reflections"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src={ACT01_IMAGE}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-secondary-fixed text-xs font-label-metadata">
                  <span className="tracking-[0.24em] uppercase">FIG 01.1 — THE LAKE PALACE SANCTUARY</span>
                  <span className="tracking-[0.24em] text-primary">FRAME #4120</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 font-label-metadata text-label-metadata text-on-surface-variant">
                <span>DIRECTOR OF PHOTOGRAPHY: RAJRAM ARCHIVE</span>
                <span>COLOR SCIENCE: KODAK 5219 EMULATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 02 — OUR PHILOSOPHY: OPTICAL PRECISION (00:08 – 00:20) */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-surface-container-low relative border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="font-label-metadata text-label-metadata text-primary uppercase">ACT 02</span>
              <span className="text-outline">/</span>
              <span className="font-label-metadata text-label-metadata text-on-surface-variant uppercase tracking-[0.28em]">
                PHILOSOPHY &amp; ANAMORPHIC DISCIPLINE
              </span>
            </div>
            <div className="font-label-metadata text-label-metadata text-secondary tracking-[0.24em]">
              TC 00:00:08:12 – 00:00:20:00
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative overflow-hidden aspect-square md:aspect-[4/3] bg-surface-container">
                <img
                  alt="Vintage anamorphic cinema lens diaphragm and aperture iris close-up with golden light"
                  className="w-full h-full object-cover object-center filter contrast-110"
                  src={LENS_IMAGE}
                />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1.5 border border-secondary/20">
                  <span className="font-label-metadata text-label-metadata text-primary uppercase tracking-[0.3em]">
                    OPTICS: 35MM COOKE SPEED PANCHRO
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-12 order-1 lg:order-2">
              <span className="font-label-cinematic text-label-cinematic text-primary uppercase tracking-[0.3em] block mb-2">
                OPTICAL DEVOTION
              </span>
              <h2 className="font-headline-md text-headline-md text-secondary-fixed mb-8 font-normal leading-snug">
                &ldquo;We don&apos;t just capture moments. We create the way they&apos;re remembered.&rdquo;
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant font-light mb-8 leading-relaxed">
                In an era inundated with ephemeral, disposable clips, RAJRAM reclaims
                the slow, tactile cadence of 35mm storytelling. We study the
                architecture of memory — the golden dust hanging in Rajasthan
                archways, the delicate rustle of raw zardozi silk, the silent pause
                before vows are whispered.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div className="text-left">
                  <div className="font-headline-sm text-headline-sm text-primary">2.39:1</div>
                  <div className="font-label-metadata text-label-metadata uppercase text-on-surface-variant tracking-[0.2em]">
                    Cinemascope Scope
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-outline-variant/40" />
                <div className="text-left">
                  <div className="font-headline-sm text-headline-sm text-primary">24 FPS</div>
                  <div className="font-label-metadata text-label-metadata uppercase text-on-surface-variant tracking-[0.2em]">
                    Celluloid Cadence
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-outline-variant/40" />
                <div className="text-left">
                  <div className="font-headline-sm text-headline-sm text-primary">100%</div>
                  <div className="font-label-metadata text-label-metadata uppercase text-on-surface-variant tracking-[0.2em]">
                    Bespoke Grading
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container p-6 relative flex flex-col justify-between hover:bg-surface-container-high transition-colors">
              <div>
                <div className="flex justify-between items-center mb-3 text-primary font-label-metadata">
                  <span>PILLAR 01</span>
                  <span className="material-symbols-outlined text-lg">favorite</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-2 font-normal">EMOTION</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                  Understanding the unrepeatable weight of seconds. We move quietly
                  like observers, capturing vulnerability rather than staging
                  performance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 font-label-metadata text-label-metadata uppercase text-primary tracking-[0.2em]">
                THE HUMAN CORE
              </div>
            </div>
            <div className="bg-surface-container p-6 relative flex flex-col justify-between hover:bg-surface-container-high transition-colors">
              <div>
                <div className="flex justify-between items-center mb-3 text-primary font-label-metadata">
                  <span>PILLAR 02</span>
                  <span className="material-symbols-outlined text-lg">palette</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-2 font-normal">ARTISTRY</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                  Finding exquisite beauty in raw truth. Painterly chiaroscuro,
                  volumetric shadows, and royal textures treated as high-fashion fine
                  art.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 font-label-metadata text-label-metadata uppercase text-primary tracking-[0.2em]">
                AESTHETIC ROYALTY
              </div>
            </div>
            <div className="bg-surface-container p-6 relative flex flex-col justify-between hover:bg-surface-container-high transition-colors">
              <div>
                <div className="flex justify-between items-center mb-3 text-primary font-label-metadata">
                  <span>PILLAR 03</span>
                  <span className="material-symbols-outlined text-lg">shutter_speed</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-2 font-normal">PRECISION</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                  The uncompromising discipline of prime optical craftsmanship. Every
                  focal plane calibrated to preserve generational depth.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 font-label-metadata text-label-metadata uppercase text-primary tracking-[0.2em]">
                TECHNICAL RIGOR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 03 — THE ART OF STORYTELLING (00:20 – 00:40) */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-surface relative" id="repertoire">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="font-label-metadata text-label-metadata text-primary uppercase">ACT 03</span>
              <span className="text-outline">/</span>
              <span className="font-label-metadata text-label-metadata text-on-surface-variant uppercase tracking-[0.28em]">
                THE THREE REPERTOIRES
              </span>
            </div>
            <div className="font-label-metadata text-label-metadata text-secondary tracking-[0.24em]">
              TC 00:00:20:00 – 00:00:40:00
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
            <div>
              <span className="font-label-cinematic text-label-cinematic text-primary uppercase tracking-[0.3em] block mb-2">
                CURATED WORLDS
              </span>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-secondary-fixed font-light">
                Every story has its <span className="italic font-normal text-primary">own language.</span>
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0 font-light">
              We categorize our commissions across three distinct visual paradigms,
              each directed with bespoke cinematic treatments and sonic scoring.
            </p>
          </div>

          <div className="space-y-24">
            {/* 01 CELEBRATIONS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-7 relative overflow-hidden bg-surface-container-low aspect-[2.39/1]">
                <img
                  alt="Celebration wedding cinematic still in regal Indian palace courtyard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={ACT01_IMAGE}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-primary bg-surface/80 px-2 py-1">
                  REPERTOIRE 01
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-label-metadata text-label-metadata uppercase text-secondary-fixed tracking-[0.2em]">
                    THE SACRED &amp; THE ETERNAL
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-label-metadata text-label-metadata text-primary uppercase tracking-[0.3em] mb-1">
                  HERITAGE WEDDINGS
                </span>
                <h3 className="font-headline-md text-headline-md text-secondary-fixed font-normal mb-2">
                  01 CELEBRATIONS
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light mb-6 leading-relaxed">
                  Emotions, sacred rituals, legacy and living memory. Royal unions
                  across Lake Como, Udaipur, and private estates documented with
                  reverent auteur framing.
                </p>
                <div className="space-y-4 border-t border-outline-variant/30 pt-4 font-label-metadata text-label-metadata uppercase text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>FORMAT</span>
                    <span className="text-secondary-fixed">ANAMORPHIC 35MM / ARRI ALEXA 65</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SOUNDTRACK</span>
                    <span className="text-secondary-fixed">BESPOKE ORCHESTRAL SCORING</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DELIVERABLE</span>
                    <span className="text-primary font-medium">AUTEUR FEATURE FILM + ARCHIVAL VAULT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 BRANDS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                <span className="font-label-metadata text-label-metadata text-primary uppercase tracking-[0.3em] mb-1">
                  HAUTE COUTURE &amp; MAISONS
                </span>
                <h3 className="font-headline-md text-headline-md text-secondary-fixed font-normal mb-2">
                  02 BRANDS
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light mb-6 leading-relaxed">
                  High fashion, architectural identity, auteur vision &amp; cultural
                  influence. We collaborate with international fashion ateliers,
                  heritage jewelers, and luxury hospitality destinations.
                </p>
                <div className="space-y-4 border-t border-outline-variant/30 pt-4 font-label-metadata text-label-metadata uppercase text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>APPROACH</span>
                    <span className="text-secondary-fixed">NARRATIVE TABLEAU &amp; SENSUAL RHYTHM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RUNNING TIME</span>
                    <span className="text-secondary-fixed">60S TO 180S POETIC DISPATCHES</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CLIENT PROFILE</span>
                    <span className="text-primary font-medium">HERITAGE HOUSES &amp; VISIONARY DESIGNERS</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 relative overflow-hidden bg-surface-container-low aspect-[2.39/1] order-1 lg:order-2">
                <img
                  alt="Haute couture silhouette with golden bridal embroidery in cinematic lighting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={HERO_IMAGE}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-primary bg-surface/80 px-2 py-1">
                  REPERTOIRE 02
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-3">
                  <span className="font-label-metadata text-label-metadata uppercase text-secondary-fixed tracking-[0.2em]">
                    CULTURAL INFLUENCE &amp; FORM
                  </span>
                </div>
              </div>
            </div>

            {/* 03 FILMS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-7 relative overflow-hidden bg-surface-container-low aspect-[2.39/1]">
                <img
                  alt="Cinema camera lens capturing light beam during film production"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={LENS_IMAGE}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 font-label-metadata text-label-metadata uppercase tracking-[0.25em] text-primary bg-surface/80 px-2 py-1">
                  REPERTOIRE 03
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-label-metadata text-label-metadata uppercase text-secondary-fixed tracking-[0.2em]">
                    ANALOG CELLULOID &amp; SHORT STORIES
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-label-metadata text-label-metadata text-primary uppercase tracking-[0.3em] mb-1">
                  INDEPENDENT CINEMA
                </span>
                <h3 className="font-headline-md text-headline-md text-secondary-fixed font-normal mb-2">
                  03 FILMS
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light mb-6 leading-relaxed">
                  Movement, sensory atmosphere, 35mm grain &amp; pure imagination.
                  Original narrative works, festival selections, and independent art
                  house vignettes produced under the Rajram banner.
                </p>
                <div className="space-y-4 border-t border-outline-variant/30 pt-4 font-label-metadata text-label-metadata uppercase text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>DISTRIBUTION</span>
                    <span className="text-secondary-fixed">CANNES, VENICE &amp; CURATED PRIVATE SCREENINGS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MASTERING</span>
                    <span className="text-secondary-fixed">DOLBY VISION D-CINEMA SPEC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PHILOSOPHY</span>
                    <span className="text-primary font-medium">TOTAL AUTEUR FREEDOM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 04 — THE CREATIVE SIGNATURE: CRAFT & COLOR (00:40 – 00:55) */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-surface-container-lowest relative border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="font-label-metadata text-label-metadata text-primary uppercase">ACT 04</span>
              <span className="text-outline">/</span>
              <span className="font-label-metadata text-label-metadata text-on-surface-variant uppercase tracking-[0.28em]">
                COLOR SCIENCE &amp; MASTER GRADING
              </span>
            </div>
            <div className="font-label-metadata text-label-metadata text-secondary tracking-[0.24em]">
              TC 00:00:40:00 – 00:00:55:00
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="font-label-cinematic text-label-cinematic text-primary uppercase tracking-[0.3em] block mb-2">
                THE COLOR SUITE
              </span>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-secondary-fixed font-light">
                Behind every frame is <span className="italic font-normal text-primary">intention.</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0 font-label-metadata text-label-metadata uppercase tracking-[0.25em]">
              <span className="text-on-surface-variant">LOG-C FLAT</span>
              <span className="text-primary font-bold">⇄</span>
              <span className="text-primary">RAJRAM 5219 FILM PRINT LUT</span>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] md:aspect-[2.39/1] overflow-hidden bg-surface-container select-none mb-6">
            <img
              alt="Final Master Grade Kodak LUT bride image"
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.15] saturate-[1.1] brightness-95"
              src={HERO_IMAGE}
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${50}%` }}
            >
              <img
                alt="Raw Log Sensor bride image"
                className="absolute inset-0 w-full h-full object-cover filter saturate-50 contrast-75 brightness-125 sepia-[0.1]"
                src={HERO_IMAGE}
              />
            </div>
            <div
              className="absolute top-0 bottom-0 bg-primary"
              style={{ left: "50%" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container-lowest border border-primary flex items-center justify-center shadow-2xl">
                <span className="material-symbols-outlined text-primary text-sm font-bold">drag_handle</span>
              </div>
            </div>
            <input
              aria-label="Color Grade Comparison Slider"
              className="absolute inset-0 opacity-0 cursor-ew-resize z-20 w-full h-full"
              type="range"
              min={0}
              max={100}
              defaultValue={50}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-surface-container-low font-label-metadata text-label-metadata uppercase tracking-[0.25em]">
            <div className="border-l border-primary/40 pl-3">
              <span className="text-on-surface-variant block mb-1">SKIN TONE RECOVERY</span>
              <span className="text-secondary-fixed">DELTA-E &lt; 0.4 SPECTRAL</span>
            </div>
            <div className="border-l border-primary/40 pl-3">
              <span className="text-on-surface-variant block mb-1">SHADOW ROLL-OFF</span>
              <span className="text-secondary-fixed">SMOOTH 14-STOP DYNAMIC</span>
            </div>
            <div className="border-l border-primary/40 pl-3">
              <span className="text-on-surface-variant block mb-1">GRAIN INTEGRATION</span>
              <span className="text-secondary-fixed">SCANNED 35MM MONTEZUMA</span>
            </div>
            <div className="border-l border-primary/40 pl-3">
              <span className="text-on-surface-variant block mb-1">COLOR MATRIX</span>
              <span className="text-primary font-bold">WARM AMBER / TEAL DEEP</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 05 — THE INVITATION (00:55 – 01:05) */}
      <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-surface relative" id="invitation">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="font-label-metadata text-label-metadata text-primary uppercase">ACT 05</span>
              <span className="text-outline">/</span>
              <span className="font-label-metadata text-label-metadata text-on-surface-variant uppercase tracking-[0.28em]">
                THE PRIVATE DIALOGUE
              </span>
            </div>
            <div className="font-label-metadata text-label-metadata text-secondary tracking-[0.24em]">
              TC 00:00:55:00 – 01:05:00:00
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="font-label-cinematic text-label-cinematic text-primary uppercase tracking-[0.35em] block mb-2">
              COMMISSIONS &amp; CONVERSATIONS
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-secondary-fixed font-light leading-tight mb-2">
              Have a story <span className="italic font-normal text-primary">worth telling?</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light">
              We accept a strictly limited number of private wedding commissions,
              auteur brand pieces, and film co-productions each calendar season to
              preserve uncompromising focus.
            </p>
          </div>

          <InquiryForm />
        </div>
      </section>
    </main>

    {/* FOOTER */}
    <footer className="w-full bg-surface-container-lowest py-24">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5 lg:col-span-5">
            <span className="font-headline-md text-headline-md text-on-surface block mb-2">RAJRAM</span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              An independent cinematic studio devoted to modern auteurism, timeless
              narrative craftsmanship, and analog reverence.
            </p>
          </div>
          <div className="md:col-span-3 lg:col-span-3">
            <span className="font-label-cinematic text-label-cinematic text-primary uppercase block mb-3">Repertoire</span>
            <ul className="space-y-2 font-label-metadata text-label-metadata uppercase text-on-surface-variant">
              <li>Feature Films</li>
              <li>Special Projects</li>
              <li>Auteur Commissions</li>
              <li>Soundscape Library</li>
            </ul>
          </div>
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-label-cinematic text-label-cinematic text-primary uppercase block mb-3">
                Inquiries &amp; Curations
              </span>
              <span className="font-body-lg text-body-lg text-on-surface">bureau@rajram.cinema</span>
              <div className="flex items-center gap-4 mt-4 font-label-metadata text-label-metadata text-on-surface-variant uppercase">
                <span>Los Angeles</span>
                <span>London</span>
                <span>Kyoto</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6">
          <span className="font-label-metadata text-label-metadata text-on-surface-variant uppercase tracking-[0.28em]">
            © MMXXIV RAJRAM CINEMATIC HOUSE. ALL CELLULOID RESERVED.
          </span>
          <div className="flex items-center gap-4 font-label-metadata text-label-metadata text-on-surface-variant uppercase">
            <span>ANAMORPHIC D-CINEMA</span>
            <span>DOLBY ATMOS MASTER</span>
          </div>
        </div>
      </div>
    </footer>
}
