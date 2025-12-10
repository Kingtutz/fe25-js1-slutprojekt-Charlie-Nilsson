import { selectedValue } from './index.js'

const topListDisplay = document.querySelector('#toplistdisplaybox')

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
      pEl.innerText = "First air day: " +result.first_air_date


    })
  } else {
    results.forEach(result => {
      const h5 = document.createElement('h5')
      const pEl = document.createElement('p')
      topListDisplay.append(h5)
      topListDisplay.append(pEl)
      h5.innerText = result.title
      pEl.innerText = "Realese date: "+result.release_date

    })
  }
}

export { renderTopList, topListDisplay }
