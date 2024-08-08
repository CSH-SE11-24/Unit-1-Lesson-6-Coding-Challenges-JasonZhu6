// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["I'm in 11th grade", "I'm in SE", "I'm doing this challenge in class"]

// console log the 1st element (element is not same as index!)
console.log(truths[0])

// change the value of the last element
truths[truths.length - 1] = "I just change this value"

// console log the last element to check that it's changed
console.log(truths[truths.length - 1])

// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["I'm not in 11th grade", "I'm not in SE", "I'm not doing this challenge in class"]

// delete a value from the lies array
lies.pop()

// console log the second list to confirm the value is gone
console.log(lies)

// add a new lie to the lies array
lies.push("I did not just add a new lie to the array")

// SPICY
// pick the truths or lies array and console log the 1st element
console.log(truths[0])

// prompt the user to guess if it was true or false
let trueOrFalse = prompt("Is this a truth or lie?")

// stretch: how could you check they are right or wrong?
for (let x = 0; x < 10; x++){
  if (trueOrFalse == "truth") {
  console.log("Yes, this is a truth.")
  break
} else if (trueOrFalse == "lie") {
  console.log("No, it's not a lie. It's actually a truth. ")
}
}