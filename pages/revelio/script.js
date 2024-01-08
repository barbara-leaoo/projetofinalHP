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

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// Função para voltar ao topo da página
function voltarAoTopo() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}