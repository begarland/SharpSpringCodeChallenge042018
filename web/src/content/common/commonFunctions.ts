export const millisecondsToMinutesAndSecond = (milliseconds) => {
    const minutes = Math.floor(milliseconds/60000)
    const seconds = ((milliseconds % 60000) / 100).toFixed(0)
    return `${minutes}:${(Number(seconds) < 10 ? '0' : '') + seconds}`
}