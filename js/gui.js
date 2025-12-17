import {
  selectedValue,
  topListDisplay,
  displayResult,
  searchCatagory
} from './index.js'

const imgUrl = `https://image.tmdb.org/t/p/original`

async function renderTopList (data) {
  console.log(data)
  console.log('selectvalueinrender', selectedValue)
  const results = data.results.slice(0, 10)
  if (data.total_pages < 500) {
    results.forEach(result => {
      const h3 = document.createElement('h3')
      const pEl = document.createElement('p')
      const img = document.createElement('img')
      topListDisplay.append(h3)
      topListDisplay.append(img)
      topListDisplay.append(pEl)
      h3.innerText = result.name
      img.src = imgUrl + result.poster_path
      img.classList.add('poster')
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

async function renderSearchedresults (data) {
  const results = data.results
  console.log(results)
  if (searchCatagory.value === 'person') {
    results.forEach(result => {
      const h3 = document.createElement('h3')
      const pEl = document.createElement('p')
      const img = document.createElement('img')
      displayResult.append(h3)
      displayResult.append(img)
      displayResult.append(pEl)
      h3.innerText = result.name
      if (!result.profile_path) {
        img.src = '../img/No-Image-Placeholder.svg'
      } else {
        img.src = imgUrl + result.profile_path
      }
      img.classList.add('poster')
      pEl.innerText = 'Known for ' + result.known_for_department
    })
  } else {
    results.forEach(result => {
      const h3 = document.createElement('h3')
      const overview = document.createElement('p')
      const release_date = document.createElement('p')
      const img = document.createElement('img')
      displayResult.append(h3)
      displayResult.append(img)
      displayResult.append(overview)
      displayResult.append(release_date)
      h3.innerText = result.original_title
      overview.innerText = result.overview
      release_date.innerText = 'Release date: ' + result.release_date

      if (!result.poster_path) {
        img.src = '../img/No-Image-Placeholder.svg'
      } else {
        img.src = imgUrl + result.poster_path
      }

      img.classList.add('poster')
    })
  }
}

export { renderTopList, renderSearchedresults }
