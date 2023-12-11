document.getElementById('toggleButton').addEventListener('click', function() {
    const mediaContent = document.getElementById('mediaContent');
    const button = document.getElementById('toggleButton');

    if (mediaContent.style.display === 'none') {
        mediaContent.style.display = 'block';
        button.textContent = 'Hide Media';
    } else {
        mediaContent.style.display = 'none';
        button.textContent = 'Show Media';
    }
});
