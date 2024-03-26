window.onload = async function() {
    const almanacList = document.getElementById('almanac-list');

    try {
        const response = await fetch('https://api.github.com/Sun-of-Sobros/almanac/contents');
        if (!response.ok) {
            throw new Error('Failed to fetch almanac files');
        }
        const data = await response.json();
        data.forEach(item => {
            if (item.type === 'file' && item.name.endsWith('.html')) {
                const fileLink = document.createElement('a');
                fileLink.classList.add('file-link');
                fileLink.href = item.html_url;
                fileLink.textContent = item.name.replace(/\.html$/, '').replace(/_/g, ' ');
                almanacList.appendChild(fileLink);
            }
        });
    } catch (error) {
        console.error('Error fetching almanac files:', error);
    }
};
