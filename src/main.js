const loop = () => {
    requestAnimationFrame(loop)
}

const initGame = () => {
    loop()
}

const configGame = () => {

}

export default { initGame, configGame }
