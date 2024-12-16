const baseUrl = "https://saintrick-fm.github.io/wdd230/";
const linksUrl = baseUrl + "data/links.json";
const links = [
    { name: "Home", url: "index.html" },
    { name: "Discover", url: "discover.html" },
    { name: "Directory", url: "directory.html" },
    { name: "Join", url: "join.html" },
    { name: "Contact", url: "contact.html" },
  ];

async function getLinks() {
    try {
        const response = await fetch(linksUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const {weeks} = await response.json();
        weeks&& displayLinks(weeks); // Call the displayLinks function with the data
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

function displayLinks(weeks) {
    
    const outputContainer = document.querySelector('#activities'); // Select the existing container for activities
    outputContainer.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekSection = document.createElement('div');
        weekSection.classList.add('activity');

        const weekTitle = document.createElement('span');
        weekTitle.textContent = week.week + ' :';
        weekSection.appendChild(weekTitle);

        const linksList = document.createElement('ul');
        linksList.classList.add('links');

        week.links.forEach(link => {
            const listItem = document.createElement('li');
            listItem.classList.add('link');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.classList.add('activity-link');
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekSection.appendChild(linksList);
        outputContainer.appendChild(weekSection);
    });
}

getLinks(); // Call the function to test it