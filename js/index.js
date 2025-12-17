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
    
  } else if (searchCatagory.value === 'person') {
    displayResult.innerHTML = ''
    getSearched(searchCatagory.value, searchBar.value).then(
      renderSearchedresults
    )
    
  }
})

const topListSelector = document.querySelector('#toplistselector')
const topListDisplay = document.querySelector('#toplistdisplaybox')
let selectedValue = topListSelector.value
getListData(selectedValue).then(renderTopList)
topListSelector.addEventListener('change', event => {
  topListDisplay.innerHTML = ''
  getListData(event.target.value).then(renderTopList)
})



// getData()
// getTopRatedMoviesData()

export { selectedValue, topListDisplay, displayResult, searchCatagory }
// getTopRatedTvData(topListSelector).then(renderTopList)
