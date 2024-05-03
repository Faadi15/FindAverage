function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Array is empty. Cannot calculate average.");
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Test the function
const numberArray: number[] = [77, 55, 45, 4533, 455, 10];

const average = calculateAverage(numberArray);

console.log(`Average: ${average}`);
