import ShowsApi from './build-shows-page-api.js';

document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = 'c592ebb9-90cf-4409-8420-b7e1cb9e748d';  // Use the provided API key
    const api = new ShowsApi(apiKey);

    const showsContainer = document.querySelector('.shows-section');

    // Fetch the shows data from the API
    const shows = await api.getShows();

    // Helper function to format date
    const formatDate = (timestamp) => {
        const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(timestamp).toLocaleDateString('en-US', options);
    };

    // Populate the shows on the page
    shows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.classList.add('show');

        showElement.innerHTML = `
            <div class="show-details">
                <div class="show-section">
                    <p class="labels">Date</p>
                    <p class="date">${formatDate(show.date)}</p>
                </div>
                <div class="show-section">
                    <p class="labels">Venue</p>
                    <p class="venue">${show.place}</p>
                </div>
                <div class="show-section">
                    <p class="labels">Location</p>
                    <p class="location">${show.location}</p>
                </div>
                <div class="show-section">
                    <button class="buy-tickets">Buy Tickets</button>    
                </div>
            </div>
        `;

        showElement.addEventListener('click', function () {
            document.querySelectorAll('.show').forEach(item => item.classList.remove('selected'));
            showElement.classList.add('selected');
        });

        showsContainer.appendChild(showElement);
    });

    const buttons = document.querySelectorAll('.buy-tickets');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); 
            alert('Tickets are not yet available.');
        });
    });
});
// getShows();