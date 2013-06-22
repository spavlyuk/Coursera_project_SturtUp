#!/usr/bin node

function get_100_primes() {
	
	var prime_numbers = [3]
	var test_number = 3

	while  (prime_numbers.length < 100) {
		test_number = test_number + 2

		var primary = true

		for(var i in prime_numbers) {
			if (test_number % prime_numbers[i] == 0) {
				primary = false
				break
			}
		}

		if (primary)
			prime_numbers.push(test_number)

	}

	prime_numbers.slice(0, 0, 2)

	return prime_numbers
}

primer_string = get_100_primes()

fs.writeFileSync(outfile, primer_string);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
