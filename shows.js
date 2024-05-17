// shows.js
document.addEventListener('DOMContentLoaded', () => {
    const showsList = document.getElementById('showsList');

    const shows = [
        { date: 'Mon Sept 09 2024', venue: 'Ronald Lane', location: 'San Francisco, CA' },
        { date: 'Tue Sept 17 2024', venue: 'Pier 3 East', location: 'San Francisco, CA' },
        { date: 'Sat Oct 12 2024', venue: 'View Lounge', location: 'San Francisco, CA' },
        { date: 'Sat Nov 16 2024', venue: 'Hyatt Agency', location: 'San Francisco, CA' },
        { date: 'Fri Nov 29 2024', venue: 'Moscow Center', location: 'San Francisco, CA' },
        { date: 'Wed Dec 18 2024', venue: 'Press Club', location: 'San Francisco, CA' },
    ];

    const renderShows = () => {
        showsList.innerHTML = '';
        shows.forEach(show => {
            const showElement = document.createElement('div');
            showElement.classList.add('show');

            const dateElement = document.createElement('div');
            dateElement.classList.add('show__date');
            dateElement.innerText = show.date;

            const venueElement = document.createElement('div');
            venueElement.classList.add('show__venue');
            venueElement.innerText = show.venue;

            const locationElement = document.createElement('div');
            locationElement.classList.add('show__location');
            locationElement.innerText = show.location;

            const buttonElement = document.createElement('button');
            buttonElement.classList.add('show__button');
            buttonElement.innerText = 'BUY TICKETS';

            showElement.appendChild(dateElement);
            showElement.appendChild(venueElement);
            showElement.appendChild(locationElement);
            showElement.appendChild(buttonElement);

            showsList.appendChild(showElement);
        });
    };

    renderShows();
});
