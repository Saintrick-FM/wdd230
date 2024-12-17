const membersContainer = document.querySelector('.members-container');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');

gridViewBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

listViewBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

async function displayMembers() {
    try {
        const response = await fetch('./data/members.json');
        const members = await response.json();
        
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p> ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Website</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.info}</p>
                </div>
            `;
            
            membersContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

displayMembers();
