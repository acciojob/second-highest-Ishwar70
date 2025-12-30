<script>
	function secondHighest(arr) {
		// convert to numbers
		arr = arr.map(Number);

		// Edge case: less than 2 elements
		if (arr.length < 2) return -Infinity;

		let max = -Infinity;
		let second = -Infinity;

		for (let num of arr) {
			if (num > max) {
				second = max;
				max = num;
			} else if (num < max && num > second) {
				second = num;
			}
		}

		// If no second highest exists (all equal)
		if (second === -Infinity) return -Infinity;

		return second;
	}

	function Main() {
		var n = parseInt(prompt("Enter the number of elements"));
		var arr = [];

		for (var i = 0; i < n; i++) {
			arr[i] = prompt("Enter element " + (i+1));
		}

		// Cypress compares number => force numeric
		alert(Number(secondHighest(arr)));
	}
	Main();
</script>
