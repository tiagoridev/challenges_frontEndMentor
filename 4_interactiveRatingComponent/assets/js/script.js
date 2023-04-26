const notes = document.querySelectorAll('.list-item');
const btn = document.querySelector('#container-btn')
let selectedNote = null;

notes.forEach(note => {
    note.addEventListener('click', () => { 
        selectedNote = note.textContent;       
})
})

btn.addEventListener('click', () => {
    if(selectedNote !== null ){    
    document.querySelector('.container-back').classList.remove('hidden');
    document.querySelector('.container-front').classList.add('hidden');
    document.querySelector('#container-note').textContent = `You selected ${selectedNote} out of 5`;
    } else{
        alert('Please, select a note.')
    }
})



 






