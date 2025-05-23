'use client'

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import TestimonialCard from '@/components/cards/TestimonialCard';
import { data } from '@/data/testimonials';

export default function Testimonials() {
  const animation = { duration: 25000, easing: (t) => t }

  const [sliderRef] = useKeenSlider(
    {
      loop: true, mode: 'snap',
      slides: { perView: 1, spacing: 32, }
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })

        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  );

  return (
    <section style={{ display: 'grid', gap: '0.75em' }}>
      <h2 style={{ textAlign: 'center' }} id='testimonials'>Testimonials</h2>
      <div ref={sliderRef} className="keen-slider">
        {data.map((entry, index) => (
          <div className={`keen-slider__slide number-slide${index}`}>
            <TestimonialCard key={entry.id} index={index} {...entry} />
          </div>
        ))}
      </div>
    </section>
  )
}
