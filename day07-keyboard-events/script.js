const keyInfo = document.querySelector('.key-info');

document.addEventListener('keydown', (e) => {
  keyInfo.innerHTML = `
    <p><strong>Key:</strong> ${e.key}</p>
    <p><strong>Code:</strong> ${e.code}</p>
    <p><strong>KeyCode:</strong> ${e.keyCode}</p>
  `;
});
