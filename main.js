document.querySelector('#submit-twood').addEventListener('click', () => {
  const newText = document.querySelector('#twood-input').value
  // document.querySelector('.twood').innerText = newText
  document.querySelector('#twood-input').value = ''

  const newTwood = document.createElement('div')
  document.querySelector('.twoods-container').append(newTwood)
  // newTwood.classList.add('twood')
  // newTwood.innerText = newText


})

setTimeout(() => {
  document.querySelector('.cutoff').classList.remove('hidden')  
}, 200000)
