const toggleTag = document.querySelector('a.toggle-nav')
const toggleImg = document.querySelector('a.toggle-nav img')
const closeImg = document.querySelector('nav .close')
const contentTag = document.querySelector('section.content')

toggleTag.addEventListener('mouseenter', function() {
  contentTag.classList.add('hover')
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





