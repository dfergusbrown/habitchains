let date = new Date();
let year = date.getFullYear()
let monthNumber = date.getMonth()

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
export let currentMonth = months[monthNumber]

// Get the last date of the month
export let lastdate = new Date(year, monthNumber+1, 0).getDate()

export const years = [
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030
]
export const currentYear = year


export let dateRow = []
for (let i = 1; i <= lastdate; i++) {
    dateRow.push(i)
}