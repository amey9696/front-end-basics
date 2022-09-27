// if else ladder
// ie if...else if.. else if.. else

let season = "rainy";

if (season === "summer") {
    console.log("season is summer");
} else if (season === "rainy") {
    console.log("season is rainy");
} else {
    console.log("season is winter");
}

let today = new Date().getDay();
if (today === 0) {
    console.log("Today is Sunday");
}
else if (today === 1) {
    console.log("Today is Monday");
}
else if (today === 2) {
    console.log("Today is Tuesday");
}
else if (today === 3) {
    console.log("Today is Wednesday");
}
else if (today === 4) {
    console.log("Today is Thursday");
}
else if (today === 5) {
    console.log("Today is Friday");
}
else {
    console.log("Today is Saturday");
}