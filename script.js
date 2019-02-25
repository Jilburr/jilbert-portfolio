const toggleTag = document.querySelector('a.toggle-nav')
const toggleImg = document.querySelector('a.toggle-nav img')
const closeImg = document.querySelector('nav .close')
const contentTag = document.querySelector('section.content')

const portfolioTag = document.querySelector('.portfolioLink')

const portfolioLi = document.querySelectorAll('.portfolioList ul li')
const portfolioImg = [{id:1, url: "url(fixedfull.png)"}, {id:2, url: "url(wallsfull.png)"}, {id:3, url: "url(plantfull.png)"}]

toggleTag.addEventListener('mouseenter', function() {
  if (document.body.clientWidth > 950) {
    contentTag.classList.add('hover')
  }
})

toggleTag.addEventListener('mouseleave', function() {
  contentTag.classList.remove('hover')
})

toggleTag.addEventListener('click', function() {
  if (document.body.clientWidth > 1220) {
    contentTag.classList.toggle('open')
    if (contentTag.classList.contains('open')) {
      toggleImg.src = 'x-circle-solid-48.png'
    } else {
      toggleImg.src = 'info-circle-solid-48.png'
    }
  } else {
    contentTag.classList.toggle('fullOpen')
  }
})

closeImg.addEventListener('click', function() {
  contentTag.classList.remove('fullOpen')
})

portfolioTag.addEventListener('click', event => {
  event.preventDefault()

  const href = portfolioTag.getAttribute('href')
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  })
})
