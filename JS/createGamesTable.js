document.getElementById('loadButton').addEventListener('click', function() {
    const table = document.getElementById('gamesTable');
    const button = document.getElementById('loadButton');
    if (table.style.display === 'none' || table.innerHTML === '') {
        fetch('./data/videoGamesTable.json')
            .then(response => response.json())
            .then(data => {
                populateTable(data);
                table.style.display = 'table';
                button.textContent = 'Hide Games List'; // Change button text to 'Hide Games List'
            })
            .catch(error => console.error('Error:', error));
    } else {
        table.style.display = 'none';
        button.textContent = 'Show Games List'; // Change button text to 'Show Games List'
    }
});

function populateTable(data) {
    const table = document.getElementById('gamesTable');
    table.innerHTML = ''; // Clear existing table data

    // Create header row for genres
    let headerRow = table.insertRow();
    data.forEach(genreObj => {
        let headerCell = document.createElement('th');
        headerCell.textContent = genreObj.genre;
        headerRow.appendChild(headerCell);
    });

    // Find the maximum number of games in any genre
    const maxGames = Math.max(...data.map(genreObj => genreObj.games.length));

    // Create rows for games
    for (let i = 0; i < maxGames; i++) {
        let row = table.insertRow();
        data.forEach(genreObj => {
            let cell = document.createElement('td');
            cell.textContent = genreObj.games[i] || ''; // Add game name or empty string if no game
            row.appendChild(cell);
        });
    }
}
