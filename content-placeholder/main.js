const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    // header.innerHTML = `<img src="http://unsplash.it/350?tech"/>`
    title.innerHTML = "Lorem ipsum"
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quas!'
    profile_img.innerHTML = '<img src="http://unsplash.it/350?tech"/>'
    name.innerHTML = "Jane Doe"
    date.innerHTML = '&nbsp;'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}














