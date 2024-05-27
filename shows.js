document.addEventListener('DOMContentLoaded', function () {
    const shows = [
        {
            date: 'Mon Sept 09 2024',
            venue: 'Ronald Lane',
            location: 'San Francisco, CA'
        },
        {
            date: 'Tue Sept 17 2024',
            venue: 'Pier 3 East',
            location: 'San Francisco, CA'
        },
        {
            date: 'Sat Oct 12 2024',
            venue: 'View Lounge',
            location: 'San Francisco, CA'
        },
        {
            date: 'Sat Nov 16 2024',
            venue: 'Hyatt Agency',
            location: 'San Francisco, CA'
        },
        {
            date: 'Fri Nov 29 2024',
            venue: 'Moscow Center',
            location: 'San Francisco, CA'
        },
        {
            date: 'Wed Dec 18 2024',
            venue: 'Press Club',
            location: 'San Francisco, CA'
        }
    ];

    const showsContainer = document.querySelector('.shows-section');

    shows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.classList.add('show');

        showElement.innerHTML = `
            <div class="show-details">
                <div class="show-section">
                    <p class="labels">Date</p>
                    <p class="date">${show.date}</p>
                </div>
                <div class="show-section">
                    <p class="labels">Venue</p>
                    <p class="venue">${show.venue}</p>
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
