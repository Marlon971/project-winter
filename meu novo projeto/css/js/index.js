
const bosses = document.querySelectorAll('.boss');


bosses.forEach((boss) => {
    boss.addEventListener('mouseenter', () => {
        removerSelecaoDoBoss();
        boss.classList.add('selecionado');
        alterarImagemBossSelecionado(boss);
        alterarNomeBossSelecionado(boss);
        alterarDescricaoBoss(boss);
    })
})


function removerSelecaoDoBoss() {
    const bossSelecionado = document.querySelector('.selecionado');
    bossSelecionado.classList.remove('selecionado');
}


function alterarDescricaoBoss(boss) {
    const descricaoBoss = document.getElementById('descricao-boss');
    descricaoBoss.innerText = boss.getAttribute('data-description');
}

function alterarNomeBossSelecionado(boss) {
    const nomeBoss = document.getElementById('nome-boss');
    nomeBoss.innerText = boss.getAttribute('data-name');
}


function alterarImagemBossSelecionado(boss) {
    const imagemBossGrande = document.querySelector('.boss-grande');
    const idBoss = boss.attributes.id.value;
    imagemBossGrande.src = `./src/imagens/card-${idBoss}.png`;
}