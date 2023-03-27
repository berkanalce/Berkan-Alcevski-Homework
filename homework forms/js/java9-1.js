let age = localStorage.getItem("age");
if (!age) {
  age = prompt("Please enter your age:");
  localStorage.setItem("age", age);
}
let fullName = sessionStorage.getItem("fullName");
if (!fullName) {
  fullName = prompt("Please enter your full name:");
  sessionStorage.setItem("fullName", fullName);
}
// Function to fetch text from a file using the Fetch API
async function getTextFromFile(file) {
  const response = await fetch(file);
  const text = await response.text();
  return text;
}

// Fetch text from both files
const file1 = "file1.txt";
const file2 = "file2.txt";

(async function () {
  const text1 = await getTextFromFile(file1);
  const text2 = await getTextFromFile(file2);

  // Compare the length of the text in each file
  if (text1.length > text2.length) {
    console.log(text1);
  } else {
    console.log(text2);
  }
})();
