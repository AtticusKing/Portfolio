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
  <div id="overlay-content" style="
    position: relative;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: auto;
    animation: fadeIn 0.3s ease;
  ">
    <button id="overlay-close" class="overlay-close-button">&times;</button>
    <iframe id="overlay-iframe" src="" frameborder="0" style="
      width: 100%;
      max-width: 1024px;
      height: 90vh;
      display: block;
      margin: 0 auto;
      border: none;
    "></iframe>
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
requestAnimationFrame(() => overlay.classList.add('show'));

    document.body.style.overflow = 'hidden'; // prevent scrolling behind the overlay
  });
});

closeButton.addEventListener('click', () => {
    overlay.classList.remove('show');
    setTimeout(() => {
      overlay.style.display = 'none';
      iframe.src = '';
      document.body.style.overflow = '';
    }, 400);
    
  iframe.src = '';
  document.body.style.overflow = ''; // re-enable scrolling
});


// Close overlay on Escape key (with fade-out)
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.style.display === 'flex') {
      overlay.classList.remove('show');
      setTimeout(() => {
        overlay.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = '';
      }, 400); // Match your fade-out duration
    }
  });
  