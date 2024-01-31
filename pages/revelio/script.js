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
};


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
        console.log(data);

        const livrosContainer = document.getElementById('livros-container');
        const listaLivros = document.createElement('ul');

        const titulosTraduzidos = {
            "Harry Potter and the Philosopher's Stone": "Harry Potter e a Pedra Filosofal",
            "Harry Potter and the Chamber of Secrets": "Harry Potter e a Câmara Secreta",
            "Harry Potter and the Prisoner of Azkaban": "Harry Potter e o Prisioneiro de Azkaban",
            "Harry Potter and the Goblet of Fire": "Harry Potter e o Cálice de Fogo",
            "Harry Potter and the Order of the Phoenix": "Harry Potter e a Ordem da Fênix",
            "Harry Potter and the Half-Blood Prince": "Harry Potter e o Enigma do Príncipe",
            "Harry Potter and the Deathly Hallows: Part 1": "Harry Potter e as Relíquias da Morte: Parte 1",
            "Harry Potter and the Deathly Hallows: Part 2": "Harry Potter e as Relíquias da Morte: Parte 2"
        };

        data.data.forEach(livro => {
            const tituloLivro = document.createElement('p');
            const autorElement = document.createElement('p');
            const paginasElement = document.createElement('p');
            const dataLancamentoElement = document.createElement('p');

            const itemLista = document.createElement('li');

            const imagemLivro = document.createElement('img');
            imagemLivro.src = livro.attributes.cover;
            imagemLivro.alt = livro.attributes.title;
            imagemLivro.classList.add('livro-imagem');

            if (titulosTraduzidos[livro.attributes.title]) {
                tituloLivro.textContent = titulosTraduzidos[livro.attributes.title];
            } else {
                tituloLivro.textContent = livro.attributes.title;
            }

            autorElement.textContent = `Autor(a): ${livro.attributes.author}`;
            paginasElement.textContent = `Páginas: ${livro.attributes.pages}`;
           
            const dataLancamento = new Date(livro.attributes.release_date);
            const dia = String(dataLancamento.getDate()).padStart(2, '0');
            const mes = String(dataLancamento.getMonth() + 1).padStart(2, '0');
            const ano = String(dataLancamento.getFullYear()).slice(0);
            dataLancamentoElement.textContent = `Data de Lançamento: ${dia}/${mes}/${ano}`;

            itemLista.appendChild(imagemLivro);
            itemLista.appendChild(tituloLivro);
            itemLista.appendChild(autorElement);
            itemLista.appendChild(paginasElement);
            itemLista.appendChild(dataLancamentoElement);

            listaLivros.appendChild(itemLista);
        });

        livrosContainer.appendChild(listaLivros);
    })
    .catch(error => console.error('Ocorreu um erro ao buscar os dados:', error));




