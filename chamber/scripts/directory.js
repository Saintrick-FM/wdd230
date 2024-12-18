const membersContainer = document.querySelector(".members-container");
const gridViewBtn = document.getElementById("grid-view");
const listViewBtn = document.getElementById("list-view");

gridViewBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listViewBtn.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

async function loadMembers() {
  const isGitHubPages = window.location.hostname === "saintrick-fm.github.io";
  const baseUrl = isGitHubPages
    ? "/wdd230/chamber/data/members.json"
    : "./data/members.json";

  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data format");
    }
    displayMembers(data);
  } catch (error) {
    displayError(`Unable to load member directory: ${error.message}`);
  }
}

function displayMembers(members) {
  if (!membersContainer) {
    return;
  }

  membersContainer.innerHTML = ""; // Clear existing content

  members.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("member-card");

    memberCard.innerHTML = `
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Website</a></p>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.info}</p>
            </div>
        `;

    membersContainer.appendChild(memberCard);
  });
}

function displayError(message) {
  const container = document.querySelector(".members-container");
  if (container) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    container.innerHTML = "";
    container.appendChild(errorDiv);
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${document.lastModified}`;

loadMembers();
