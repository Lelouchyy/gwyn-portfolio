import React, { useEffect, useState } from 'react'
import { FiActivity, FiMapPin, FiMessageSquare, FiUsers } from 'react-icons/fi'
import pic1 from '../../assets/pic1.jpeg'
import pic2 from '../../assets/pic2.jpeg'
import pic3 from '../../assets/pic3.jpeg'
import pic4 from '../../assets/pic4.jpeg'
import pic5 from '../../assets/pic5.jpeg'
import pic6 from '../../assets/pic6.jpeg'
import pic7 from '../../assets/pic7.jpeg'
import pic8 from '../../assets/pic8.jpeg'
import pic9 from '../../assets/pic9.jpeg'
import pic10 from '../../assets/pic10.jpeg'

import { SectionLabel } from '../ui/SectionLabel'

const strengths = [
  {
    icon: <FiUsers />,
    title: 'Leadership',
    desc: 'Team lead in 4+ academic and extracurricular projects',
  },
  {
    icon: <FiMessageSquare />,
    title: 'Communication',
    desc: 'Clear, persuasive presenter across business contexts',
  },
  {
    icon: <FiActivity />,
    title: 'Analytics',
    desc: 'Data-driven approach to decisions and strategy',
  },
]

const aboutPhotos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10]

export const About: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePhotoIndex((currentIndex) => (currentIndex + 1) % aboutPhotos.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  const handlePhotoAdvance = () => {
    setActivePhotoIndex((currentIndex) => (currentIndex + 1) % aboutPhotos.length)
  }

  return (
    <section id="about" className="bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24">
        <SectionLabel>01 — About Me</SectionLabel>
        <h2 className="rv font-playfair text-[clamp(2rem,4vw,3.1rem)] font-bold text-navy leading-[1.12] tracking-tight mb-2"
          style={{ transitionDelay: '.08s' }}>
          Building <em className="not-italic text-gold">meaningful</em><br />business impact
        </h2>

        <div className="grid grid-cols-1 items-start gap-10 mt-12 md:grid-cols-[minmax(320px,420px)_minmax(0,1fr)] lg:gap-14">
          <div className="rvl w-full max-w-[420px] h-auto justify-self-center md:justify-self-start">
            <div className="relative">
              <button
                type="button"
                onClick={handlePhotoAdvance}
                className="group relative min-h-[270px] w-full overflow-hidden rounded-[10px] bg-gradient-to-br from-navy to-navy3 text-left shadow-[0_24px_64px_rgba(11,22,40,.18)] transition-transform duration-300 md:min-h-[460px] lg:min-h-[480px]"
                aria-label="Show next about photo"
              >
                {aboutPhotos.map((photo, index) => (
                  <img
                    key={photo}
                    src={photo}
                    alt={`Profile portrait ${index + 1}`}
                    className={[
                      'absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out',
                      index === activePhotoIndex
                        ? 'scale-100 opacity-100 group-hover:scale-[1.03]'
                        : 'scale-[1.02] opacity-0',
                    ].join(' ')}
                  />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,22,40,.06)_0%,rgba(11,22,40,.2)_60%,rgba(11,22,40,.34)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_40%_35%,rgba(200,168,75,.18)_0%,transparent_65%)]" />
                <div className="absolute right-5 top-5 flex gap-2">
                  {aboutPhotos.map((_, index) => (
                    <span
                      key={index}
                      className={[
                        'h-2 rounded-full transition-all duration-300',
                        index === activePhotoIndex ? 'w-6 bg-gold' : 'w-2 bg-white/45',
                      ].join(' ')}
                    />
                  ))}
                </div>
                <div className="absolute bottom-5 left-5">
                  <div className="inline-flex items-center gap-2 rounded-[20px] border border-white/18 bg-white/10 px-3.5 py-[.38rem] text-[.68rem] text-white/75 backdrop-blur-xl">
                    <FiMapPin className="h-[10px] w-[10px]" strokeWidth={2.2} />
                    Urdaneta City, Pangasinan, PH
                  </div>
                </div>
                <div className="absolute bottom-5 right-5 text-[.62rem] uppercase tracking-[.22em] text-white/60 transition-colors duration-300 group-hover:text-white/85">
                  Click to switch
                </div>
              </button>
            </div>
          </div>

          <div className="rvr w-full max-w-[760px] md:pt-2">
            <p className="text-[1rem] font-light text-body leading-[1.82] mb-5">
              I am a recently graduated{' '}
              <strong className="text-navy font-semibold">Bachelor of Science in Business Administration</strong>{' '}
              major in Financial Management. My academic journey has equipped me with a solid
              foundation in business strategy, financial analysis, and organizational behavior.
            </p>
            <p className="text-[1rem] font-light text-body leading-[1.82] mb-5">
              Throughout my studies, I developed a passion for{' '}
              <strong className="text-navy font-semibold">solving complex business problems</strong>{' '}
              through structured thinking, data analysis, and collaborative leadership. I thrive in dynamic
              environments that challenge me to grow both professionally and personally.
            </p>
            <p className="text-[1rem] font-light text-body leading-[1.82]">
              I am actively seeking opportunities where I can contribute my skills in financial planning,
              marketing strategy, and operations to a{' '}
              <strong className="text-navy font-semibold">forward-thinking organization</strong>{' '}
              ready to make an immediate impact.
            </p>

            <div className="grid grid-cols-1 gap-3.5 mt-10 sm:grid-cols-2 xl:grid-cols-3">
              {strengths.map((s) => (
                <div key={s.title} className="group scard relative h-full overflow-hidden rounded-[8px] border border-line bg-white p-5 shadow-[0_2px_16px_rgba(11,22,40,.05)] transition-all duration-300 hover:-translate-y-[5px] hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(11,22,40,.10)]">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[5px] bg-[rgba(200,168,75,.1)] text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-white [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-[1.8]">
                    {s.icon}
                  </div>
                  <div className="text-[.84rem] font-semibold text-navy mb-[.28rem] transition-colors duration-300 group-hover:text-gold">{s.title}</div>
                  <div className="text-[.74rem] text-muted leading-[1.55]">{s.desc}</div>
                  <div className="pointer-events-none absolute bottom-0 left-5 h-[2px] w-[calc(100%-2.5rem)] origin-left scale-x-0 rounded-full bg-gradient-to-r from-gold to-gold2 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
