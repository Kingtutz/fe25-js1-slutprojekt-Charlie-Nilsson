import { animate, stagger, splitText } from 'https://esm.sh/animejs'

const title = document.querySelector('#title')
const { chars } = splitText(title, { words: false, chars: true })
function clickedTitle () {
  animate(chars, {
    y: [
      { to: '-1.5rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    rotate: {
      from: '-1turn',
      delay: 0
    },
    delay: stagger(50),
    ease: 'inOutCirc'
  })
}

export { clickedTitle }
