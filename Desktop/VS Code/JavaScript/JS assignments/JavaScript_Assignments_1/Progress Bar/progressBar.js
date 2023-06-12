const progressBar = document.getElementById('progress-bar');
const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

function updateProgressBar() {
  const currentScrollHeight = window.pageYOffset;
  const progress = (currentScrollHeight / maxScrollHeight) * 100;
  progressBar.style.width = progress + '%';
};

window.addEventListener('scroll', function() {
    window.requestAnimationFrame(updateProgressBar);
  });