# Movie Database

A web application that displays movie and TV series information using The Movie Database (TMDB) API.

## Features

- **Top Lists**: Browse curated lists including:
  - Top 10 rated movies
  - Top 10 popular movies
  - Top 10 TV series
  - Top 10 upcoming movies
  - Top 10 trending movies
  
- **Search Functionality**: Search for:
  - Movies by title
  - Actors and people in the film industry

- **Movie Information**: View details including:
  - Movie posters
  - Release dates
  - Ratings

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 modules)
- TMDB API

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling
├── js/
│   ├── index.js        # Main JavaScript and event handlers
│   ├── getscripts.js   # API calls and data fetching
│   ├── gui.js          # Rendering functions
│   ├── error.js        # Error handling
│   └── animate.js      # Animations
├── img/                # Images folder
└── readme.md           # This file
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Start exploring movies and TV series!

## Usage

### Browse Top Lists
1. Use the dropdown menu at the top to select a category
2. The top 10 items will be displayed automatically

### Search
1. Enter a movie title or person's name in the search bar
2. Select the search category (Movie or Person)
3. Click the "Search" button
4. Results will be displayed below

## API

This project uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie and TV series data.

## Author

Charlie Nilsson

## License

This is a school project (FE25-JS1 Slutprojekt).
