function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  console.log(arr);
}

console.log(main());

Q1: What is the length, capacity and memory address of your array?

Answer: Array.push at 3 => length: 1, capacity: 3, ptr: 0

Q2: What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.


Answer: Array.push 5 values=> length: 5, capacity: 12, ptr: 3
everytime you exceed capacity, capacity triples
everytime exceed capacity adds length of array to previous pointer value



Q3: What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.

Answer: length: 2, capacity: 12, ptr: 3 (capacity remains but is open for new allocation, length is decreased)

Q4: Print the 1st item in the array arr.
Answer: index is 5

Empty the array and add just 1 item: arr.push("tauhida");
Print this 1 item that you just added. What is the result? Can you explain your result?
Answer: NaN (data type looking for a number got a string?)

What is the purpose of the _resize() function in your Array class?