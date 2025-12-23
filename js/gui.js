import { topListDisplay, displayResult, searchCatagory } from './index.js'

const imgUrl = `https://image.tmdb.org/t/p/original`

async function renderTopList (data) {
  const results = data.results.slice(0, 10)

  results.forEach(result => {
    const h3 = document.createElement('h3')
    const pEl = document.createElement('p')
    const img = document.createElement('img')
    topListDisplay.append(h3)
    topListDisplay.append(img)
    topListDisplay.append(pEl)
    if (result.name) {
      h3.innerText = result.name
      pEl.innerText = 'First air day: ' + result.first_air_date
    } else {
      h3.innerText = result.title
      pEl.innerText = 'Realese date: ' + result.release_date
    }
    img.src = imgUrl + result.poster_path
    img.classList.add('poster')
  })
}

async function renderSearchedResults (data) {
  const results = data.results
  results.forEach(result => {
    const titleEl = document.createElement('h3')
    const posterEl = document.createElement('img')
    const overview = document.createElement('p')
    const release_date = document.createElement('p')
    const title =
      result.original_title || result.name || result.title || 'Unknown title'
    const poster = result.poster_path || result.profile_path
    displayResult.append(titleEl)
    displayResult.append(posterEl)
    displayResult.append(overview)
    displayResult.append(release_date)
    titleEl.innerText = title.toUpperCase()
    if (!result.poster_path && !result.profile_path) {
      posterEl.src = '../img/No-Image-Placeholder.svg'
    } else {
      posterEl.src = imgUrl + poster
    }
    posterEl.classList.add('poster')
    if (searchCatagory.value === 'movie') {
      overview.innerText = result.overview
      overview.classList.add('poster')
      release_date.innerText = 'Realese date: ' + result.release_date
    }
    if (searchCatagory.value === 'person') {
      overview.innerText = 'Known for ' + result.known_for_department
      result.known_for.forEach(known => {
        const knownFor = document.createElement('p')
        displayResult.append(knownFor)
        if (known.media_type === 'movie') {
          knownFor.innerText = known.media_type + ': ' + known.original_title
        } else {
          knownFor.innerText = known.media_type + ': ' + known.name
        }
      })
    }
  })
}

export { renderTopList, renderSearchedResults }
