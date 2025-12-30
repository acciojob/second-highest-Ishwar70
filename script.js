<script>
	function secondHighest(arr) {
		// convert string inputs to numbers
		arr = arr.map(Number);

		// if less than 2 elements
		if (arr.length < 2) return -Infinity;

		let highest = -Infinity;
		let second = -Infinity;

		// find highest and second highest without sorting
		for (let num of arr) {
			if (num > highest) {
				second = highest;
				highest = num;
			} else if (num < highest && num > second) {
				second = num;
			}
		}

		// if second highest was never updated
		return second;
	}

	function Main() {
		var n = prompt("Enter the number of elements");
		var arr = [];
		for (var i = 0; i < n; i++) {
			arr[i] = prompt("Enter element " + (i+1));
		}
		alert(secondHighest(arr));
	}
	Main();
</script>
