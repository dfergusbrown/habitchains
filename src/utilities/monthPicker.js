let date = new Date();
let year = date.getFullYear()
export let month = date.getMonth()

// Get the last date of the month
export let lastdate = new Date(year, month+1, 0).getDate()

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
