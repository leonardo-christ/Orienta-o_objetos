function Computador_convencional(necessario, valor) {
    this.o_que_e_necessario = necessario
    this.valor = valor
}

function computador_intermediario(necessario, valor, fps) {
    Computador_convencional.call(this, necessario, valor)

    this.fps = fps
}

function Computador_sofisticado() {

}

const computador_entrada = new Computador_convencional("Para um computador convencional é necesssario as seguintes peças, placa mãe, processador, memória ram e fonte.", "Cerca de R$ 1000")
const computador_medio = new computador_intermediario(
    "Para um computador intermediário, que é voltado mais para o público gamer, são requisitadas as seguintes peças: placa-mãe, processador, memória RAM, fonte, placa de vídeo e um bom gabinete para ter ventilação.",
    "Cerca de R$ 5000",    
    "A média de FPS de um computador dessa faixa de preço gira em torno de 100 FPS.")
const computador_sofisticado = new Computador_sofisticado()

console.log(computador_entrada);
console.log(computador_medio)
