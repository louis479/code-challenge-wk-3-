document.addEventListener('DOMContentLoaded', () => {
    // Fetch the details of the first movie from the JSON server
    fetch('http://localhost:3000/films/1')
      .then(response => response.json())
      .then(film => {
        // Extract movie details from the response
        const poster = document.getElementById('movie-poster');
        const title = document.getElementById('movie-title');
        const runtime = document.getElementById('movie-runtime');
        const showtime = document.getElementById('movie-showtime');
        const availableTickets = document.getElementById('available-tickets');
        const buyTicketButton = document.getElementById('buy-ticket-button');

        // Display movie details in the respective elements
        poster.src = film.poster; // Set movie poster
        title.textContent = film.title; // Set movie title
        runtime.textContent = `Runtime: ${film.runtime} minutes`; // Set runtime
        showtime.textContent = `Showtime: ${film.showtime}`; // Set showtime
        availableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`; // Calculate and display available tickets
  
        
      })
      .catch(error => console.error('Error fetching the first movie:', error));
  });