    (function(){
    const slide = (direction) => {
    const carouselBox = document.querySelector('.carouselbox');
    const movies = carouselBox.querySelectorAll('img');
    const movieWidth = movies[0].clientWidth + 10;

    const scrollPos = carouselBox.scrollLeft;
    const visibleWidth = carouselBox.clientWidth;
    const totalWidth = carouselBox.scrollWidth;

    const fullyVisible = Math.floor(visibleWidth / movieWidth) * movieWidth;
    const partiallyVisible = visibleWidth % movieWidth;
    const threshold = totalWidth - fullyVisible;

    let newPosition = 0;

    if (direction === 'left') {
        newPosition = scrollPos - fullyVisible;
        if (newPosition < 0) {
            newPosition = 0;
        }

    } else if (direction === 'right') {
        newPosition = scrollPos + fullyVisible;
        if (newPosition > threshold) {
            newPosition = threshold;
        }
    }

    carouselBox.scrollTo({
        left: newPosition,
        behavior: 'smooth'
    });
}});


// Função para voltar ao topo da página
function voltarAoTopo() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// const imagemMagica = document.getElementById("imagemMagica");

//     imagemMagica.addEventListener("click", () => {
//         alert("Bem-vindo ao mundo mágico de Harry Potter!")
//     });


fetch('https://api.potterdb.com/v1/books')
    .then(response => response.json())
    .then(data => {
        // Exibindo os dados da API no console
        console.log(data);

        const livrosContainer = document.getElementById('livros-container');
        const listaLivros = document.createElement('ul');

        data.data.forEach(livro => {
            // Exibindo cada título e imagem no console
            console.log(livro.attributes.title);
            console.log(livro.attributes.cover);

            const itemLista = document.createElement('li');

            // Adicionando a imagem
            const imagemLivro = document.createElement('img');
            imagemLivro.src = livro.attributes.cover;
            imagemLivro.alt = livro.attributes.title;

            // Adicionando o título
            const tituloLivro = document.createElement('p');
            tituloLivro.textContent = livro.attributes.title;

            itemLista.appendChild(imagemLivro);
            itemLista.appendChild(tituloLivro);

            listaLivros.appendChild(itemLista);
        });

        livrosContainer.appendChild(listaLivros);
    })
    .catch(error => console.error('Ocorreu um erro ao buscar os dados:', error));



