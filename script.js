function checkSubarraySum() {
    // Get the input values
    const arrayInput = document.getElementById('arrayInput').value;
    const targetInput = document.getElementById('targetInput').value;
    const resultDiv = document.getElementById('result');

    // Convert the array input to an array of integers
    const arr = arrayInput.split(',').map(Number);
    const target = parseInt(targetInput, 10);

    // Function to check if a contiguous subarray sums up to the target
    function hasContiguousSubarrayWithSum(arr, target) {
        let start = 0;
        let currentSum = 0;

        for (let end = 0; end < arr.length; end++) {
            currentSum += arr[end];

            while (currentSum > target && start <= end) {
                currentSum -= arr[start];
                start++;
            }

            if (currentSum === target) {
                return true;
            }
        }

        return false;
    }

    // Check if the subarray exists
    const result = hasContiguousSubarrayWithSum(arr, target);

    // Display the result
    resultDiv.textContent = result ? "True" : "False";
}
