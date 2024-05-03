function calculateAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty. Cannot calculate average.");
    }
    var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
    return sum / numbers.length;
}
// Test the function
var numberArray = [77, 55, 45, 4533, 455, 10];
var average = calculateAverage(numberArray);
console.log("Average: ".concat(average));
