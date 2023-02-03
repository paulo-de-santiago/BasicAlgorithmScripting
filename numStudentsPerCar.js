/* If I have one frustration with helping new programmers (not that I’m complaining) it is a lack of debugging skills. When I tried out your code in codepen and it didn’t do what I wanted, the first thing I did was open up the browser console and looked for errors. There were none so the the next thing I do is put some console.log statements in to see if it was doing what I wanted. I saw that the for loop wasn’t running the correct number of times. That led me to the math. That’s why I added the console.log line that I did above - to see what was actually happening.

I have math problems I use when tutoring elementary school kids. One trap I often put in is, “If 10 students can go on the field trip and each car will hold 3 students, how many cars are needed?” It’s amazing how many kids will reflexively answer, “3 and a third!” Of course, you can’t have a third of a car. And you can’t round down because kids will get left behind.

So, I would want to know how rounding would affect those loops. Let’s take a look: */

var numStudents = 10;
var spacesPerCar = 3;

var carsNeeded = numStudents / spacesPerCar;

console.log("carsNeeded = " + carsNeeded);

console.log("\n\n\nRunning with rounding down ...");
for (var i = 0; i < Math.floor(carsNeeded); i++) {
  console.log("putting kids in car " + (i + 1));
}

console.log("\n\n\nRunning with the rounding up ...");
for (var i = 0; i < Math.ceil(carsNeeded); i++) {
  console.log("putting kids in car " + (i + 1));
}

console.log("\n\n\nRunning with no rounding ...");
for (var i = 0; i < carsNeeded; i++) {
  console.log("putting kids in car " + (i + 1));
}

/* When we look at the output, obviously the last two give us correct answers. Which is better? I like the rounding up because it is clearer. With no rounding, I have to stop and think : How does JS handle a floating point number in a for loop? I guess it makes sense, since 3 is less than 3.3333333. But I would probably round it up just for clarity. */
