import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { Icons } from '../ui/Icons'
import { useCountUp } from '../../hooks/useCountUp'
import profileImage from '../../assets/profile.jpeg'

const heroFocus = [
  { label: 'Focus', value: 'Financial Analysis' },
  { label: 'Strength', value: 'Strategic Planning' },
  { label: 'Goal', value: 'Business Leadership' },
]

export const Hero: React.FC = () => {
  useCountUp()
  const [hasProfileImage, setHasProfileImage] = useState(true)

  return (
    <section
      id="hero"
      className="min-h-[100svh] grid grid-cols-1 lg:grid-cols-[1.03fr_.97fr] relative overflow-hidden pt-[72px]"
    >
      {/* ── Left ── */}
      <div className="relative z-[2] bg-[radial-gradient(circle_at_24%_20%,rgba(200,168,75,.16),transparent_26%),radial-gradient(circle_at_78%_72%,rgba(16,32,64,.06),transparent_24%),linear-gradient(180deg,#fbfaf6_0%,#f8f4ec_100%)] border-r border-line/60">
        <div className="max-w-[760px] h-full mx-auto px-6 md:px-12 pt-8 md:pt-20 pb-16 lg:pb-12 flex flex-col justify-center">
        <div
          className="lg:hidden flex flex-col items-center justify-center mb-5"
          style={{ opacity: 0, animation: 'fuUp .75s .25s forwards' }}
        >
          <div className="relative w-[308px] h-[320px] flex items-start justify-center">
            <div className="relative w-[252px] h-[252px] rounded-full p-[3px] bg-[linear-gradient(135deg,rgba(245,228,176,.95),rgba(200,168,75,.88))] shadow-[0_0_0_1px_rgba(255,255,255,.24),0_18px_46px_rgba(11,22,40,.12)]">
              <div className="absolute inset-[12px] rounded-full bg-white" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(16,32,64,.04),transparent_45%)] z-[1]" />
                <div className="absolute inset-0 flex items-center justify-center z-[2]">
                  <div className="w-[76%] h-[88%] rounded-[44%] overflow-hidden">
                    {hasProfileImage ? (
                      <img
                        src={profileImage}
                        alt="Gwyneth Heart Veniegas"
                        className="w-full h-full object-cover object-top scale-[1.2]"
                        onError={() => setHasProfileImage(false)}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full font-playfair text-[2.8rem] font-bold text-navy/82">
                        GHV
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-[6px] top-[66%] z-[3] bg-[rgba(255,255,255,.98)] border border-[rgba(200,168,75,.24)] rounded-[20px] px-4 py-3 shadow-[0_16px_36px_rgba(11,22,40,.1)]">
              <div className="text-[1.2rem] font-bold font-playfair text-navy leading-none">BSBA</div>
              <div className="text-[.6rem] mt-1 uppercase tracking-[.16em] text-muted">Graduate</div>
            </div>
          </div>
        </div>

        <div
        className="inline-flex items-center gap-4 font-mono text-[.72rem] tracking-[.22em] uppercase text-gold -mb-7"
          style={{ opacity: 0, animation: 'fuUp .7s .3s forwards' }}
        >
        </div>

        <h1
          className="font-playfair text-[clamp(2.95rem,7vw,6.2rem)] font-bold leading-[.92] text-navy tracking-[-.04em] mb-4 max-w-[620px]"
          style={{ opacity: 0, animation: 'fuUp .8s .45s forwards' }}
        >
          Gwyneth Heart<br />
          <em className="not-italic text-gold">Veniegas</em>
        </h1>

        <p
          className="text-[.9rem] font-medium uppercase tracking-[.2em] text-muted mb-9"
          style={{ opacity: 0, animation: 'fuUp .7s .6s forwards' }}
        >
          Bachelor Of Science In Business Administration
        </p>

        <p
          className="text-[1.16rem] font-light text-body leading-[1.82] max-w-[560px] mb-12"
          style={{ opacity: 0, animation: 'fuUp .7s .75s forwards' }}
        >
          Driven, analytical, and results-oriented — turning complex business
          challenges into clear strategic opportunities through data and
          decisive thinking.
        </p>

        <div
          className="flex gap-4 flex-wrap mb-12"
          style={{ opacity: 0, animation: 'fuUp .7s .9s forwards' }}
        >
          <Button variant="dark" href="#" className="px-[2.4rem] py-[1rem] rounded-[8px]">
            <Icons.Download />
            View Resume
          </Button>
          <Button variant="outline" href="#contact" className="px-[2.4rem] py-[1rem] rounded-[8px] bg-white/40 backdrop-blur-sm border-line hover:bg-navy hover:border-navy">
            Contact Me
          </Button>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[780px] lg:hidden"
          style={{ opacity: 0, animation: 'fuUp .7s 1.05s forwards' }}
        >
          {heroFocus.map((item) => (
            <div
              key={item.value}
              className="bg-white/72 backdrop-blur-md border border-line rounded-[18px] px-5 py-4 shadow-[0_14px_34px_rgba(11,22,40,.07)]"
            >
              <div className="text-[.72rem] uppercase tracking-[.18em] text-gold font-semibold mb-2">
                {item.label}
              </div>
              <div className="text-[1rem] text-navy font-semibold leading-[1.35]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="hidden lg:block relative overflow-hidden bg-[radial-gradient(circle_at_60%_46%,rgba(255,255,255,.08),transparent_18%),radial-gradient(circle_at_74%_74%,rgba(200,168,75,.12),transparent_22%),linear-gradient(135deg,#112140_0%,#19315a_52%,#26497d_100%)]">
        <div className="absolute inset-0 opacity-[.08] bg-[linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] bg-[size:80px_80px]" />
        {/* Geometric rings */}
        <svg
          className="absolute"
          style={{
            width: 520, height: 520,
            top: '52%', left: '54%',
            transform: 'translate(-50%,-50%)',
            animation: 'rotateSlow 30s linear infinite',
          }}
          viewBox="0 0 520 520" fill="none"
        >
          <circle cx="260" cy="260" r="232" stroke="rgba(255,255,255,.05)" strokeWidth="1" strokeDasharray="8 14"/>
          <circle cx="260" cy="260" r="182" stroke="rgba(200,168,75,.14)" strokeWidth="1.2"/>
          <circle cx="260" cy="260" r="108" stroke="rgba(255,255,255,.05)" strokeWidth="1" strokeDasharray="4 8"/>
        </svg>
        <svg
          className="absolute"
          style={{
            width: 320, height: 320,
            top: '52%', left: '54%',
            transform: 'translate(-50%,-50%)',
            animation: 'rotateSlow 18s linear infinite reverse',
          }}
          viewBox="0 0 320 320" fill="none"
        >
          <circle cx="160" cy="160" r="146" stroke="rgba(200,168,75,.1)" strokeWidth="1" strokeDasharray="3 6"/>
          <circle cx="160" cy="160" r="100" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
        </svg>

        {/* Portrait */}
        <div className="absolute inset-0 flex items-center justify-center z-[2] px-8"
          style={{ animation: 'fuUp .9s .6s both' }}>
          <div className="relative w-[540px] h-[620px] flex flex-col items-center justify-center gap-7">
            <div className="relative w-[348px] h-[348px] xl:w-[390px] xl:h-[390px] rounded-full p-[4px] bg-[linear-gradient(135deg,rgba(245,228,176,.92),rgba(200,168,75,.85))] shadow-[0_0_0_1px_rgba(255,255,255,.22),0_0_34px_rgba(226,194,110,.18),0_0_72px_rgba(18,34,69,.36)]">
              <div className="absolute inset-[16px] rounded-full bg-white" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(16,32,64,.04),transparent_45%)] z-[1]" />
                <div className="absolute inset-0 flex items-center justify-center z-[2]">
                  <div className="w-[76%] h-[88%] rounded-[44%] overflow-hidden">
                  {hasProfileImage ? (
                    <img
                      src={profileImage}
                      alt="Gwyneth Heart Veniegas"
                      className="w-full h-full object-cover object-top scale-[1.27]"
                      onError={() => setHasProfileImage(false)}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full font-playfair text-[3.4rem] font-bold text-navy/82 [text-shadow:0_4px_16px_rgba(0,0,0,.12)]">
                      GHV
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-[34px] top-[56%] z-[3] bg-[rgba(255,255,255,.96)] border border-[rgba(200,168,75,.28)] rounded-[22px] px-4 py-3 shadow-[0_18px_40px_rgba(11,22,40,.16)] backdrop-blur-lg">
              <div className="text-[1.45rem] font-bold font-playfair text-navy leading-none">BSBA</div>
              <div className="text-[.72rem] mt-1 uppercase tracking-[.14em] text-muted">Graduate</div>
            </div>

            <div className="w-full max-w-[500px] grid grid-cols-3 gap-4">
              {heroFocus.map((item) => (
                <div
                  key={item.value}
                  className="bg-[rgba(255,255,255,.94)] backdrop-blur-md border border-[rgba(200,168,75,.16)] rounded-[18px] px-5 py-4 shadow-[0_14px_28px_rgba(11,22,40,.1)]"
                >
                  <div className="text-[.72rem] uppercase tracking-[.18em] text-gold font-bold mb-2">
                    {item.label}
                  </div>
                  <div className="text-[.98rem] text-navy font-semibold leading-[1.35]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  )
}
