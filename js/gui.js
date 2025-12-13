import { selectedValue } from './index.js'

const topListDisplay = document.querySelector('#toplistdisplaybox')
const imgUrl = `https://image.tmdb.org/t/p/original`
async function renderTopList (data) {
  console.log(data)
  console.log('selectvalueinrender', selectedValue)
  const results = data.results.slice(0, 10)
  if (data.total_pages < 500) {
    results.forEach(result => {
      const h3 = document.createElement('h3')
      const pEl = document.createElement('p')
      topListDisplay.append(h3)
      topListDisplay.append(pEl)
      h3.innerText = result.name
      pEl.innerText = 'First air day: ' + result.first_air_date
    })
  } else {
    results.forEach(result => {
      const h5 = document.createElement('h5')
      const pEl = document.createElement('p')
      const img = document.createElement('img')
      topListDisplay.append(h5)
      topListDisplay.append(img)
      topListDisplay.append(pEl)
      h5.innerText = result.title
      pEl.innerText = 'Realese date: ' + result.release_date
      img.src = imgUrl + result.poster_path
      img.classList.add('poster')
    })
  }
}

export { renderTopList, topListDisplay }
