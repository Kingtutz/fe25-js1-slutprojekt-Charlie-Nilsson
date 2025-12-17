const apiKey = 'da2b5ada6fc011b0593f9808478118ac'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTJiNWFkYTZmYzAxMWIwNTkzZjk4MDg0NzgxMThhYyIsIm5iZiI6MTc2NTM3MjY0Ny4zOTEsInN1YiI6IjY5Mzk3MmU3NGNkMWY3MmM0MmY4N2FiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.in6UB28IgCgWqCDvrYp5Js1ITbGkBD_0u7mhDt9sLXc'
  }
}

async function getListData (input) {
  try {
    if (input === 'movie' || input === 'tv') {
      const res = await fetch(
        `https://api.themoviedb.org/3/${input}/top_rated?language=en-US&page=1`,
        options
      )
      const data = await res.json()
      return data
    } else if (input === `popular`) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        options
      )
      const data = await res.json()
      return data
    }
  } catch (err) {
    console.error(err)
  }
}
async function getSearched (searchInput, catagory) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${searchInput}?query=${catagory}&include_adult=false&language=en-US&page=1`,
      options
    )
    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }
}

export { getListData, getSearched }
