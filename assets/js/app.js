document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      renderHeader(data.personal);
      renderAbout(data.personal);
      renderSpeaking(data.speaking);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      app.innerHTML = '<p>Error loading content. Please try again later.</p>';
    });

  function renderHeader(personal) {
    const header = document.createElement('header');
    header.innerHTML = `
      <h1>${personal.name}</h1>
      <p class="social-links">
        ${personal.social.map(link => `
          <a href="${link.url}" target="_blank" aria-label="${link.name}" style="color: ${link.color}">
            <i class="${link.icon}"></i>
          </a>
        `).join('')}
      </p>
    `;
    app.appendChild(header);
  }

  function renderAbout(personal) {
    const section = document.createElement('section');
    section.innerHTML = `
      <h2>About Me</h2>
      <p>${personal.bio}</p>
      <ul>
        ${personal.passions.map(p => `<li>${p}</li>`).join('')}
      </ul>
      <p>${personal.contact}</p>
    `;
    app.appendChild(section);
  }

  function renderSpeaking(speaking) {
    const section = document.createElement('section');
    section.innerHTML = '<h2>Speaking</h2>';
    const list = document.createElement('ul');
    list.className = 'speaking-list';
    speaking.forEach(talk => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${talk.title} @ ${talk.event} | ${talk.date}`;
      list.appendChild(listItem);
    });
    section.appendChild(list);
    app.appendChild(section);
  }
});
