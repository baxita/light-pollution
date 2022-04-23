// Intersection Observer
const sections = document.querySelectorAll('section')

const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      const quotes = entry.target.querySelectorAll('p')
      const leftSide = entry.target.querySelector('.side--left')
      const rightSide = entry.target.querySelector('.side--right')
      const button = entry.target.querySelector('button.polluted')
      const lightbeams = entry.target.querySelectorAll('.lightbeam')

      if (!entry.isIntersecting) {
        quotes.forEach((quote) => {
          quote.classList.remove('show')
        })
        return
      }
      quotes.forEach((quote) => {
        quote.classList.toggle('show')
      })

      if (leftSide && rightSide) {
        leftSide.classList.add('slide-left')
        rightSide.classList.add('slide-right')
      }

      if (button) {
        button.classList.add('show')
      }

      if (lightbeams) {
        lightbeams.forEach((lightbeam) => {
          lightbeam.classList.add('show')
        })
      }
    })
  },
  {
    rootMargin: '-10px',
    treshold: 1.0
  }
)

sections.forEach((section) => {
  sectionObserver.observe(section)
})
