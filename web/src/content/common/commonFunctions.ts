export const millisecondsToMinutesAndSecond = (milliseconds) => {
    const minutes = Math.floor(milliseconds/60000)
    let seconds = ((milliseconds % 60000) / 1000).toFixed(0)
    return `${minutes}:${(Number(seconds) < 10 ? '0' : '') + seconds}`
}

export const dateFormatToReadableDate = (date) => {
    const year = date.substr(0, 4)
    const month = date.substr(5, 2)
    const day = date.substr(8, 2)
    return `${month}/${day}/${year}`
}