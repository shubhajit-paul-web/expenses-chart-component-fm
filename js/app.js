// Data for days and amounts
const data = [{
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];

// Select chart bar elements and day name elements
const chartBars = document.querySelectorAll(".chart-bar");
const daysElem = document.querySelectorAll(".day-name");

// Find the maximum amount from the data
let maxAmount = Math.max(...data.map(elem => elem.amount));

// Adding contents to chart bars and day names
data.forEach((elem, index) => {
    // Get the current chart bar element
    let chartBar = chartBars[index];

    // Set the height and data-amount attribute of the chart bar
    chartBar.style.height = `${elem.amount}%`;
    chartBar.setAttribute("data-amount", `$${elem.amount}`);

    // Set the text content of the day name
    daysElem[index].textContent = elem.day;

    // Add 'highest' class to the chart bar if it has the maximum amount
    if (elem.amount === maxAmount) {
        chartBar.classList.add("highest");
    }
});