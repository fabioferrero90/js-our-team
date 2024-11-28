const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

function createMemberCard(member) {
  const { name, role, email, img } = member
  return `
  <div class="member-card">
    <div class="member-propic">
      <img src="./assets/${img}" alt="${name}">
    </div>
    <div class="member-info">
      <h4 class="member-name">${name}</h4>
      <span class="member-role">${role}</span>
      <h5 class="member-contact-mail">
        <a href="mailto:${email}">${email}</a>
      </h5>
    </div>
  </div>`
}

function renderCards(team) {
  const memberGrid = document.getElementById('members-grid')
  let cards = '';
  for (let member of team) {
    cards += createMemberCard(member)
  }
  memberGrid.innerHTML = '';
  memberGrid.innerHTML = cards
}

renderCards(teamMembers);

const submitButton = document.getElementById('submitNewMember');

submitButton.addEventListener('click', e => {
  e.preventDefault();

  const newMember = {
    name: document.getElementById('fullName').value.trim(),
    role: document.getElementById('role').value.trim(),
    email: document.getElementById('email').value.trim(),
    img: `img/${document.getElementById('profilePicture').value.trim()}`,
  };
  teamMembers.push(newMember);
  renderCards(teamMembers);
})