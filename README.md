# Flatdango

Flatdango is a web application designed for a movie theater, allowing users to browse available films, view detailed information about each film, and purchase tickets. The app interacts with a JSON server that holds information about the movies, including their showtimes, available tickets, and more.

---

## Features

- **Movie List**: Displays a list of all available movies, including their titles and status (sold out or not).
- **Movie Details**: Showcases detailed information about a selected movie, including:
  - Poster
  - Title
  - Runtime
  - Showtime
  - Number of tickets available
- **Buy Tickets**: Allows users to purchase tickets for a selected movie, with the ticket count updated dynamically.
- **Sold-Out Indicator**: Movies with no available tickets are marked as sold out in the movie list.
- **Persistent Changes**: Updates to ticket sales are sent to the server to ensure persistence.

---

## Technologies Used

### Frontend
- **HTML**: For structuring the content.
- **CSS**: For styling the user interface.
- **JavaScript**: For dynamic content updates and interaction with the JSON server.

### Backend
- **JSON Server**: Mock server to simulate a real backend for storing movie data.

---

## How It Works

1. **Setup the JSON Server**
   - The application uses a `db.json` file to store movie information.
   - Run the following command to start the JSON server:
     ```bash
     json-server --watch db.json
     ```
   - The server will run on `http://localhost:3000/`.

2. **Loading the Page**
   - On page load, the app fetches movie data from `http://localhost:3000/films`.
   - The first movie's details are displayed by default.

3. **Interacting with the App**
   - **View Movie Details**:
     - Click on a movie title in the list to view its details.
   - **Purchase Tickets**:
     - Click the `Buy Ticket` button to reduce the number of available tickets.
     - If tickets reach zero, the movie is marked as sold out.

4. **Updating the Server**
   - When tickets are purchased, the app sends a `PATCH` request to update the ticket count on the JSON server.

---

## File Structure

```
Flatdango/
├── index.html       # Main HTML file for the application
├── styles.css       # CSS file for styling
├── index.js         # JavaScript file for functionality
└── db.json          # Mock database for movies
```

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Flatdango
   ```

2. Install JSON Server:
   ```bash
   npm install -g json-server
   ```

3. Start the JSON server:
   ```bash
   json-server --watch db.json
   ```

4. Open `index.html` in your browser to view the app.

---

## JSON Data Format

The `db.json` file contains an array of films with the following structure:

```json
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
```

### Fields:
- `id`: Unique identifier for the movie
- `title`: Title of the movie
- `runtime`: Runtime in minutes
- `capacity`: Total number of tickets available
- `showtime`: Showtime of the movie
- `tickets_sold`: Number of tickets already sold
- `description`: Brief description of the movie
- `poster`: URL of the movie poster

---

## Notes
- Ensure that the JSON server is running before using the app.
- Any updates to the ticket count are persistent and reflected in the `db.json` file.

---

Thank you for your time. Have a great day
