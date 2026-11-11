const panels = [...document.querySelectorAll('.panel')];
const links = [...document.querySelectorAll('nav a')];
function selectSection() {
  const hash = ['#education', '#career'].includes(location.hash) ? '#journey' : location.hash;
  const active = panels.find(panel => '#' + panel.id === hash) || panels[0];
  panels.forEach(panel => { panel.hidden = panel !== active });
  links.forEach(link => {
    if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', selectSection);
selectSection();
