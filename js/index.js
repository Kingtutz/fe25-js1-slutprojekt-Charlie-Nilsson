import {
  getData,
  getTopRatedMoviesData,
  getListData,
  getSearchedMovie
} from './getscripts.js'
import { renderTopList, topListDisplay } from './gui.js'

const topListSelector = document.querySelector('#toplistselector')
let selectedValue = topListSelector.value
topListSelector.addEventListener('change', event => {
  console.log('selected', selectedValue)
  console.log(event.target.value)
  topListDisplay.innerHTML = ''
  getListData(event.target.value).then(renderTopList)
})

console.log(selectedValue)

// getData()
// getTopRatedMoviesData()

export { selectedValue }
// getTopRatedTvData(topListSelector).then(renderTopList)

getSearchedMovie('jurassic%20park')
