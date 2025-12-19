import { getListData, getSearched } from './getscripts.js'
import { renderTopList, renderSearchedresults } from './gui.js'
import { searchError } from './error.js'

const searchForm = document.querySelector('#search')
const displayResult = document.querySelector('#searchresult')
let searchCatagory = document.querySelector('#searchcatagory')
let searchBar = document.querySelector('#searchbar')
const topListSelector = document.querySelector('#toplistselector')
const topListDisplay = document.querySelector('#toplistdisplaybox')
let selectedValue = topListSelector.value

searchForm.addEventListener('submit', event => {
  event.preventDefault()
  if (searchCatagory.value === 'movie') {
    displayResult.innerHTML = ''
    getSearched(searchCatagory.value, searchBar.value)
      .then(renderSearchedresults)
      .catch(searchError)
  } else if (searchCatagory.value === 'person') {
    displayResult.innerHTML = ''
    getSearched(searchCatagory.value, searchBar.value)
      .then(renderSearchedresults)
      .catch(searchError)
  }
})

getListData(selectedValue).then(renderTopList)

topListSelector.addEventListener('change', event => {
  topListDisplay.innerHTML = ''
  getListData(event.target.value).then(renderTopList).catch(searchError)
})

export {
  selectedValue,
  topListDisplay,
  displayResult,
  searchCatagory,
  topListSelector
}
