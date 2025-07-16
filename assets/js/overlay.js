// assets/js/overlay.js

// Select all project buttons that should open an overlay
const projectLinks = document.querySelectorAll('.eric-gallery-button, .eric-gallery-link');


// Create the overlay container if it doesn't already exist
let overlay = document.getElementById('project-overlay');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.id = 'project-overlay';
  overlay.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    justify-content: center;
    align-items: center;
  `;

  overlay.innerHTML = `
    <div id="overlay-content" style="position: relative; width: 90%; height: 90%; background: white; border-radius: 10px; overflow: hidden;">
      <button id="overlay-close" style="position: absolute; top: 10px; right: 10px; font-size: 2rem; background: none; border: none; cursor: pointer;">&times;</button>
      <iframe id="overlay-iframe" src="" frameborder="0" style="width: 100%; height: 100%;"></iframe>
    </div>
  `;

  document.body.appendChild(overlay);
}

const iframe = document.getElementById('overlay-iframe');
const closeButton = document.getElementById('overlay-close');

projectLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = link.getAttribute('href');
    iframe.src = url;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // prevent scrolling behind the overlay
  });
});

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  iframe.src = '';
  document.body.style.overflow = ''; // re-enable scrolling
});
