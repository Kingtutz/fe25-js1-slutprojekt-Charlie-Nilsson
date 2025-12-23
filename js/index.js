import { getListData, getSearched } from './getscripts.js'
import { renderTopList, renderSearchedresults } from './gui.js'
import { searchError } from './error.js'
import { clickedTitle } from './animate.js'

const title = document.querySelector('#title')
const searchForm = document.querySelector('#search')
const displayResult = document.querySelector('#searchresult')
let searchCatagory = document.querySelector('#searchcatagory')
let searchBar = document.querySelector('#searchbar')
const topListSelector = document.querySelector('#toplistselector')
const topListDisplay = document.querySelector('#toplistdisplaybox')
let selectedValue = topListSelector.value

title.addEventListener('click', event => {
  clickedTitle()
})
searchForm.addEventListener('submit', event => {
  event.preventDefault()
    displayResult.innerHTML = ''
    getSearched(searchCatagory.value, searchBar.value)
      .then(renderSearchedresults)
      .then(clickedTitle)
      .catch(searchError)
})

getListData(selectedValue).then(renderTopList)

topListSelector.addEventListener('change', event => {
  topListDisplay.innerHTML = ''
  getListData(event.target.value)
    .then(renderTopList)
    .then(clickedTitle)
    .catch(searchError)
})

export {
  selectedValue,
  topListDisplay,
  displayResult,
  searchCatagory,
  topListSelector
}
