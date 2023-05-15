const btnEmail = document.getElementById('btnEmail');

function updateClipboard(newClip) {
    navigator.clipboard.write(newClip).then(() => {
      /* clipboard successfully set */
    }, () => {
      /* clipboard write failed */
    });
  }

  btnEmail.addEventListener('click', updateClipboard('justine.meunier.design@gmail.com'));