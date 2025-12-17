import { getListData, getSearched } from './getscripts.js'
import { renderTopList, renderSearchedresults } from './gui.js'

const searchForm = document.querySelector('#search')
let searchCatagory = document.querySelector('#searchcatagory')
let searchBar = document.querySelector('#searchbar')
const displayResult = document.querySelector('#searchresult')
searchForm.addEventListener('submit', event => {
  event.preventDefault()
  if (searchCatagory.value === 'movie') {
    displayResult.innerHTML = ''
    getSearched(searchCatagory.value, searchBar.value).then(
      renderSearchedresults
    )
    console.log(searchForm.value)
    console.log(searchBar.value)
    console.log(searchCatagory.value)
  } else if (searchCatagory.value === 'person') {
    displayResult.innerHTML = ''
    getSearched(searchCatagory.value, searchBar.value).then(
      renderSearchedresults
    )
    console.log(searchForm.value)
    console.log(searchBar.value)
    console.log(searchCatagory.value)
  }
})

const topListSelector = document.querySelector('#toplistselector')
const topListDisplay = document.querySelector('#toplistdisplaybox')
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

export { selectedValue, topListDisplay, displayResult, searchCatagory }
// getTopRatedTvData(topListSelector).then(renderTopList)
