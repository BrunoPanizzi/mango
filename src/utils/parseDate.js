function fixNumber(num) {
  //  4 => 04,  13 => 13
  return ('0' + num).slice(-2)
}

export default function parseDate(date) {
  const day   = fixNumber(date.getDate())
  const month = fixNumber(date.getMonth() + 1)
  const year  = date.getFullYear()

  return `${day}/${month}/${year}`
}
