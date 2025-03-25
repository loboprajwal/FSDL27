
    // Function to swap values and display the result
    function swapValues() {
      // Step 1: Get user input values
      let a = document.getElementById("inputA").value;
      let b = document.getElementById("inputB").value;

      // Convert inputs to numbers if needed
      a = Number(a);
      b = Number(b);

      // Step 2: Swap the values using a temporary variable
      let temp = a; // Store the value of 'a' in 'temp'
      a = b;        // Assign the value of 'b' to 'a'
      b = temp;     // Assign the value stored in 'temp' to 'b'

      // Step 3: Display the swapped values in the HTML
      document.getElementById("result").innerHTML = `
        <p>Before swapping:</p>
        <p>a = ${a}, b = ${b}</p>
        <p>After swapping:</p>
        <p>a = ${b}, b = ${a}</p>
      `;
    }

