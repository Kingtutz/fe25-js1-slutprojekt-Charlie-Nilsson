import { topListSelector } from './index.js'

const apiKey = 'da2b5ada6fc011b0593f9808478118ac'
const baseUrl = `https://api.themoviedb.org/3/`

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
    if (topListSelector.value === 'movie' || topListSelector.value === 'tv') {
      const res = await fetch(
        baseUrl + `${input}/top_rated?language=en-US&page=1`,
        options
      )
      if (!res.ok) {
        throw error
      }
      const data = await res.json()
      return data
    } else if (
      topListSelector.value === 'popular' ||
      topListSelector.value === 'upcoming'
    ) {
      const res = await fetch(
        baseUrl + `movie/${input}?language=en-US&page=1`,
        options
      )
      if (!res.ok) {
        throw error
      }
      const data = await res.json()
      return data
    } else if (topListSelector.value === `trending`) {
      const res = await fetch(
        baseUrl + `trending/all/day?language=en-US`,
        options
      )
      if (!res.ok) {
        throw error
      }
      const data = await res.json()
      return data
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
async function getSearched (searchInput, catagory) {
  try {
    const res = await fetch(
      baseUrl +
        `search/${searchInput}?query=${catagory}&include_adult=false&language=en-US&page=1`,
      options
    )
    if (!res.ok) {
      throw error
    }
    const data = await res.json()
    if (data.total_results === 0) {
      throw 'searcherror'
    } else {
      return data
    }
  } catch (error) {
    throw error
  }
}

export { getListData, getSearched }
