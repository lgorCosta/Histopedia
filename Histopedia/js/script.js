document.querySelectorAll('.periodo').forEach(item => {
    item.addEventListener('click', () => {
        const periodo = item.querySelector('.descricao').textContent.trim();
        let destino = '';

        // Mapeie cada período para sua página de temas
        switch (periodo) {
            case 'Pré-Colonial (até 1500)':
                destino = '../index.html?destino=paginas/temas/pre-colonial.html';
                break;
            case 'Período Colonial (1500-1822)':
                destino = '../index.html?destino=paginas/temas/colonial.html';
                break;
            case 'Independência (1822)':
                destino = '../index.html?destino=paginas/temas/independencia.html';
                break;
            case 'Segundo Reinado (1840-1889)':
                destino = '../index.html?destino=paginas/temas/segundo_reinado.html';
                break;
            case 'Era Republicana (1889 - 2014)':
                destino = '../index.html?destino=paginas/temas/era_republicana.html';
                break;
            default:
                destino = '../index.html?destino=paginas/tema.html'; // Página padrão caso não encontre
        }

        // Aplica o fade-out a todos os temas
        document.querySelectorAll('.periodo').forEach(periodo => {
            periodo.classList.add('fade-out');
        });

        // Aguarda o fim da animação antes de redirecionar
        setTimeout(() => {
            window.location.href = destino;
        }, 500); // 500ms = duração da animação
    });
});
