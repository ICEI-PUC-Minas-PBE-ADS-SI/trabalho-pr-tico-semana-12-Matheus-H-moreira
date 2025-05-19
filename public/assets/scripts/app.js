document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card')

    cards.forEach((card) => {
        card.style.cursor = 'pointer'
        card.addEventListener('click', () => {
            const id = card.getAttribute('id')
            window.location.href = `detalhes.html?id=${id}`

        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const imagensCarrossel = document.querySelectorAll('#carouselExampleIndicators .carousel-item img')

    imagensCarrossel.forEach((img) => {
        img.style.cursor = 'pointer'
        img.addEventListener('click', function () {
            const id = img.id;
            window.location.href = `detalhes.html?id=${id}`
        });
    });
});       