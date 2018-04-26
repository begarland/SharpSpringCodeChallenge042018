export const millisecondsToMinutesAndSecond = (milliseconds) => {
    const minutes = Math.floor(milliseconds/60000)
    let seconds = ((milliseconds % 60000) / 1000).toFixed(0)
    return `${minutes}:${(Number(seconds) < 10 ? '0' : '') + seconds}`
}
