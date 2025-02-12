document.querySelectorAll('.periodo').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Você selecionou o período: ${item.querySelector('.descricao').textContent}`);
        // Aqui você pode redirecionar para outra página:
        // window.location.href = "subtemas.html";
    });
});

