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
        const data = await response.json();
        console.log("data = ", data); // Test the JSON result
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

getLinks(); // Call the function to test it