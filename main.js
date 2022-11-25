

const lettersArray = Array.from('qwertyuiopasdfghjklzxcvbnm')
const containerDiv = document.querySelector('.container')

function displayLetters() {
   containerDiv.innerHTML = lettersArray.map(item => {
      return `
      <div class='letter' data-letter='${item}'>${item}</div>
      `
   }).join('')

   addEventListener('keydown', ({ key }) => {
     [...containerDiv.children].forEach(el => {
      if (el.dataset.letter === key) {
         el.classList.add('clicked')
      }
     })
   })

   addEventListener('keyup', ({ key }) => {
      [...containerDiv.children].forEach(el => {
       if (el.dataset.letter === key) {
          el.classList.remove('clicked')
       }
      })
    })
}

displayLetters()