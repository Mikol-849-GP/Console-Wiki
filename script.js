function showSection(id) {
  document.querySelectorAll('.wiki-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Load JSON data (example)
fetch('data/consoles.json')
  .then(res => res.json())
  .then(data => {
    const section = document.getElementById('consoles');
    data.forEach(console => {
      const div = document.createElement('div');
      div.innerHTML = `<h2>${console.name}</h2><p>${console.description}</p>`;
      section.appendChild(div);
    });
  });
