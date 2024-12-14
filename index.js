document.addEventListener('DOMContentLoaded', () => {
    // Get references to elements
    const filmsList = document.getElementById('films');
    const poster = document.getElementById('movie-poster');
    const title = document.getElementById('movie-title');
    const runtime = document.getElementById('movie-runtime');
    const showtime = document.getElementById('movie-showtime');
    const availableTickets = document.getElementById('available-tickets');
    const buyTicketButton = document.getElementById('buy-ticket-button');

    // Reusable function to display movie details
    function displayMovieDetails(film) {
        poster.src = film.poster;
        title.textContent = film.title;
        runtime.textContent = `Runtime: ${film.runtime} minutes`;
        showtime.textContent = `Showtime: ${film.showtime}`;
        availableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;

        // Update button state
        buyTicketButton.disabled = film.capacity - film.tickets_sold <= 0;
        buyTicketButton.textContent = film.capacity - film.tickets_sold > 0 ? "Buy Ticket" : "Sold Out";

        // Handle "Buy Ticket" button click
        buyTicketButton.onclick = function () {
            if (film.capacity - film.tickets_sold > 0) {
                // Update ticket count locally
                film.tickets_sold++;
                availableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;

                // Disable button if tickets are sold out
                if (film.capacity - film.tickets_sold === 0) {
                    buyTicketButton.disabled = true;
                    buyTicketButton.textContent = "Sold Out";
                }

                // Persist changes to the server
                fetch(`http://localhost:3000/films/${film.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ tickets_sold: film.tickets_sold }),
                }).catch((error) => console.error('Error updating ticket sales:', error));
            }
        };
    }

    // Fetch and display the first movie
    fetch('http://localhost:3000/films/1')
        .then((response) => response.json())
        .then((film) => {
            displayMovieDetails(film);
        })
        .catch((error) => console.error('Error fetching the first movie:', error));

    // Fetch and display all movies in the list
    fetch('http://localhost:3000/films')
        .then((response) => response.json())
        .then((films) => {
            
        })
        .catch((error) => console.error('Error fetching films:', error));
});
