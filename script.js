document.addEventListener("DOMContentLoaded", function() {
    const asciiContainer = document.getElementById('asciiContainer');

    fetch('YouTubeWatchlistVHSHORROR.txt')
        .then(response => response.text())
        .then(data => {
            const updatedText = convertUrlsToLinks(data);
            asciiContainer.innerHTML = updatedText;
        })
        .catch(error => {
            console.error('Error loading file:', error);
            asciiContainer.textContent = 'Failed to load file.';
        });
});

function convertUrlsToLinks(text) {
    const urlPattern = /(https?:\/\/[^\s\]]+)/g;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/ /g, '&nbsp;') // Replace spaces with non-breaking spaces
        .replace(/\n/g, '<br>')  // Replace newlines with <br> for HTML
        .replace(urlPattern, '<a href="$1" target="_blank">$1</a>'); // Make URLs clickable
}