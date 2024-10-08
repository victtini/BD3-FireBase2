const listBook = document.querySelector('#book-list')

function renderList(doc){
    let li = document.createElement('li');
    let autor = document.createElement('span');
    let titulo = document.createElement('span');

    autor.textContent = doc.autor;
    titulo.textContent = doc.titulo;

    li.appendChild(titulo);
    li.appendChild(autor);

    listBook.appendChild(li);

}
db.collection('libre-colection')
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
            renderList(doc.data())
        }
    )
    });

    const form = document.querySelector('#add-book-form');

    // Adding an event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from refreshing the page
        alert('Formulario funcionando');
    });