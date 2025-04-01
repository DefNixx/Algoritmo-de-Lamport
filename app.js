let relogios = { 1: 0, 2: 0, 3: 0 };

function atualizarRelogio() {
    document.getElementById("clock1").innerText = relogios[1];
    document.getElementById("clock2").innerText = relogios[2];
    document.getElementById("clock3").innerText = relogios[3];
}

function registrarEvento(processo, tipo, valor) {
    let logElemento = document.getElementById(`logP${processo}`);
    let novoEvento = document.createElement("li");
    novoEvento.className = tipo;
    if (tipo === "interno") {
        novoEvento.innerHTML = `🔄 Evento interno (${valor})`;
    } else {
        novoEvento.innerHTML = `📩 Mensagem recebida (${valor})`;
    }
    logElemento.prepend(novoEvento);
}

function eventoInterno(processo) {
    relogios[processo]++;
    atualizarRelogio();
    registrarEvento(processo, "interno", relogios[processo]);
    console.log(`P${processo} executou evento interno | Relógio: ${relogios[processo]}`);
}

function enviarMensagem(de, para) {
    relogios[de]++;
    atualizarRelogio();
    registrarEvento(de, "interno", relogios[de]);
    console.log(`P${de} enviou mensagem para P${para} | Relógio: ${relogios[de]}`);

    setTimeout(() => {
        relogios[para] = Math.max(relogios[para], relogios[de]) + 1;
        atualizarRelogio();
        registrarEvento(para, "mensagem", relogios[para]);
        console.log(`P${para} recebeu mensagem de P${de} | Relógio atualizado: ${relogios[para]}`);
    }, 1000);
}

function iniciarEventosAutomaticos() {
    setInterval(() => eventoInterno(1), Math.random() * 3000 + 2000);
    setInterval(() => eventoInterno(2), Math.random() * 4000 + 3000);
    setInterval(() => eventoInterno(3), Math.random() * 3000 + 3000);
}

iniciarEventosAutomaticos();
