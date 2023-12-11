document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadResumeBtn').addEventListener('click', fetchResume);
});

function fetchResume() {
    // Fetch the resume.pdf file
    fetch('./data/resume.pdf')
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob(); // Convert the response to a Blob
    })
    .then(blob => {
        // Create a URL for the blob
        const url = window.URL.createObjectURL(blob);
        // Create a new link element
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click(); // Trigger the download
        window.URL.revokeObjectURL(url); // Clean up the URL
        document.body.removeChild(a); // Clean up the link element
    })
    .catch(e => {
        console.error('There was a problem fetching the resume:', e);
    });
}
