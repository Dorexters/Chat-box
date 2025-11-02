const messageBox = document.getElementById('message-box');
const mainContent = document.getElementById('main-content');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

btnYes.addEventListener('click', () => {
  messageBox.classList.add('hidden');
  setTimeout(() => {
    mainContent.classList.add('visible');
  }, 400);
});

btnNo.addEventListener('click', () => {});
