// const currentYear = new Date().getFullYear()
// const yearDisplay = document.getElementById('year') as HTMLSpanElement

// if (yearDisplay) {
//   yearDisplay.textContent = '' + currentYear
// }

// const year = document.getElementById('year') as HTMLSpanElement
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', '' + thisYear)
// year.textContent = '' + thisYear

// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear

// // 1st variation:
// let year: HTMLElement | null
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute('datetime', thisYear)
//   year.textContent = thisYear
// }

// 2nd variation
const year = document.getElementById('year2') as HTMLSpanElement
const thisYear = new Date().getFullYear().toString()
// if (year) {
//   year.setAttribute('datetime', thisYear)
//   year.textContent = thisYear
// }
year.setAttribute('datetime', thisYear)
year.textContent = thisYear
