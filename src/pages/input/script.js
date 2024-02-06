const button = document.getElementById("generate-ticket");

if(!button) suckMyDick();

console.log(button)

button.addEventListener("click", (event) => {

  const divisors = document.getElementsByClassName('input-container');

    var inputs = divisors[0].getElementsByTagName("input")

    var allFilled = true

    for (let element of inputs) {
      if(!element.value?.length) {
        allFilled = false;
        break;
      }
    }
  


  if(!allFilled) return;

  event.preventDefault();

  const divisorText = document.getElementById('secondText')
  const secondText = document.createTextNode("Attendi! Stiamo caricando il tuo biglietto.")

  while(divisors.length > 0) {
    divisors[0].parentNode.removeChild(divisors[0])
  }

  button.parentNode.removeChild(button)

  divisorText.appendChild(secondText)

  const canvas = document.createElement('canvas');

  canvas.id = 'canvasElement'

  canvas.width = 2000
  canvas.height = 647
  
  const ctx = canvas.getContext('2d');

  var img = new Image();

  img.src = '../../images/ticket.png'

  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

    var font = new FontFaceObserver("Public Sans")

    font.load().then(() => {
      ctx.font = 'bold 40px "Public Sans"'
      ctx.fillStyle = 'black'
  
      ctx.fillText(inputs[1].value, 237, 286)

      ctx.font = '34px "Public Sans"'
  
      ctx.fillText(inputs[0].value, 1580, 232)
    }).catch((error) => {
      console.log('Font not avaible', error)
    })
  }

  const canvasDiv = document.getElementById('canvas')

  canvasDiv.appendChild(canvas);
  secondText.parentNode.removeChild(secondText)
})