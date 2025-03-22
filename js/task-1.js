"use strict";

function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("My First Blog Post"));
console.log(slugify("JavaScript Basics and Beyond"));
console.log(slugify("Learn to Code for Free"));
console.log(slugify("Frontend Development Tips"));
