// * Intersection Observer
const sections = document.querySelectorAll('section')

const sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      const quotes = entry.target.querySelectorAll('p')
      const leftSide = entry.target.querySelector('.side--left')
      const rightSide = entry.target.querySelector('.side--right')
      const button = entry.target.querySelector('button')
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

// * Button - dim the lights
const lightswitch = document.getElementById('lightswitch')

lightswitch.addEventListener('click', (e) => {
  // Hide polluted elements
  const pollutedElements = document.querySelectorAll('.polluted')
  pollutedElements.forEach((el) => {
    if (el.classList.contains('polluted--fade')) {
      el.classList.add('hide')
    } else {
      el.style.display = 'none'
    }
  })

  // Display dimmed elements
  const dimmedElements = document.querySelectorAll('.dimmed')
  dimmedElements.forEach((el) => {
    if (el.classList.contains('dimmed--fade')) {
      el.classList.remove('show')
      setTimeout(() => {
        el.classList.add('show')
      }, 20)
    }
    el.style.display = 'inline-block'
  })

  // Change variable colors
  document.documentElement.style.setProperty('--gradient-base', '#1554b6')
  document.documentElement.style.setProperty(
    '--gradient-s1',
    'linear-gradient(180deg, #20304f 0%, #0d49ae 100%)'
  )
  document.documentElement.style.setProperty(
    '--gradient-s2',
    'linear-gradient(180deg, #0d48ac 0%, #114088 100%)'
  )
  document.documentElement.style.setProperty(
    '--gradient-s3',
    'linear-gradient(180deg, #12418a 0%, #1554b6 48.44%)'
  )
  document.documentElement.style.setProperty(
    '--gradient-s4',
    'linear-gradient(180deg, #12418a 0%, #1554b6 48.44%)'
  )
  document.documentElement.style.setProperty(
    '--gradient-button',
    'linear-gradient(98.02deg, #227696 29.92%, #3b6691 53.43%,  #6d4586 96.31%)'
  )

  // TODO: choose a different selector and only select the specific images that should be dimmed?
  // Dim images
  const images = document.querySelectorAll('img')
  images.forEach((img) => {
    img.style.filter = 'brightness(0.5)'
  })

  // Move turtles
  const turtles = document.querySelectorAll('.turtle')
  turtles.forEach((turtle) => {
    turtle.classList.add('turtle--dimmed')
  })

  // Turn on the stars
  sections.forEach((section) => loadStars(section))
  Object.values(document.querySelectorAll('.star')).forEach((star) => {
    star.style.animationDelay = `${Math.floor(Math.random() * 6)}s`
  })

  // Create northern lights
  loadLights()
})

// Functions to generate HTML elements
const loadStars = (container) => {
  // Create 100 stars and add styles
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div')
    star.classList.add('star')

    // Add random position of the star in the top half of container
    star.style.left = `${Math.floor(Math.random() * 100)}%`
    star.style.top = `${Math.floor(Math.random() * 40)}%`

    // Append stars to container
    container.append(star)
  }
}

const loadLights = () => {
  // Create 10 lights and add styles
  for (let i = 0; i < 40; i++) {
    const light = document.createElement('div')
    light.classList.add('light')

    // Spread out
    light.style.left = `${Math.floor(Math.random() * 100)}%`

    // Append lights to container
    document.getElementById('northern-lights').append(light)
  }
}

// * Button - Reload page
const reloadButton = document.getElementById('reload-button')
reloadButton.addEventListener('click', () => {
  location.reload()
})
