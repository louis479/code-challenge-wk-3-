# code-challenge

# Flatdango

Flatdango is a web application for a movie theater that allows users to view movie details, select movies, purchase tickets, and manage ticket availability.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [JSON Server Data](#json-server-data)
- [License](#license)

## Features

- **Display Movie Details**: Shows movie poster, title, runtime, showtime, and available tickets.
- **List of Movies**: Displays a clickable list of movies.
- **Purchase Tickets**: Updates ticket availability when a ticket is purchased.
- **Sold-Out Indicator**: Marks sold-out movies and disables further ticket purchases.

## Setup

### Prerequisites

- Install [Node.js](https://nodejs.org/) if not already installed.
- Install JSON Server globally:

```bash
npm install -g json-server
```

### Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd flatdango
```

3. Start the JSON Server:

```bash
json-server --watch db.json
```

4. Open `index.html` in your browser to view the application.

## Usage

1. Select a movie from the list to view its details.
2. Click the "Buy Ticket" button to purchase a ticket for the selected movie.
3. If all tickets are sold, the movie will be marked as "Sold Out," and further purchases will be disabled.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the application.
- **JavaScript**: For dynamic interactions and fetching data.
- **JSON Server**: For simulating a backend API.

## File Structure

```plaintext
Flatdango/
├── index.html       # The main HTML file
├── styles.css       # The CSS file for styling
├── index.js         # The JavaScript file for functionality
├── db.json          # JSON Server data file
```

## JSON Server Data

The `db.json` file contains a list of movies with the following structure:

```json
{
  "films": [
    {
      "id": "1",
      "title": "The Giant Gila Monster",
      "runtime": "108",
      "capacity": 30,
      "showtime": "04:00PM",
      "tickets_sold": 27,
      "description": "A giant lizard terrorizes a rural Texas community...",
      "poster": "https://example.com/poster.jpg"
    }
  ]
}
```

### Key Fields

- `id`: Unique identifier for the movie.
- `title`: The name of the movie.
- `runtime`: Duration of the movie in minutes.
- `capacity`: Total number of tickets available.
- `showtime`: The movie's showtime.
- `tickets_sold`: Number of tickets already sold.
- `poster`: URL for the movie poster.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
