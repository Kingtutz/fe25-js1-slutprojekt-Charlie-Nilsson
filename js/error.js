function searchError (error) {
  if (error === 'searcherror') {
    const errorMessage = document.createElement('h3')
    searchresult.append(errorMessage)
    errorMessage.innerText =
      'Could not find what you where searching for! Try again'
  } else{
    alert('Somthing whent wrong!')
  }
}

export { searchError }
