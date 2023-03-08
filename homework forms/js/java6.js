function addRows() {
  var table = document.getElementById("myTable");
  var row1 = table.insertRow(2);
  var row2 = table.insertRow(3);
  var cell1_1 = row1.insertCell(0);
  var cell1_2 = row1.insertCell(1);
  var cell2_1 = row2.insertCell(0);
  var cell2_2 = row2.insertCell(1);
  cell1_1.innerHTML = "Student";
  cell1_2.innerHTML = "Student";
  cell2_1.innerHTML = "Soccer";
  cell2_2.innerHTML = "Basketball";
}
addRows();
var listItems = document.querySelectorAll("#myList li");
for (var i = 0; i < listItems.length; i += 2) {
  listItems[i].style.backgroundColor = "lightgreen";
  listItems[i].style.color = "white";
}
for (var i = 1; i < listItems.length; i += 2) {
  listItems[i].style.backgroundColor = "lightpink";
  listItems[i].style.color = "white";
}
listItems[0].style.backgroundColor = "red";
listItems[0].style.fontWeight = "bold";
listItems[listItems.length - 1].style.backgroundColor = "orange";
listItems[listItems.length - 1].style.color = "white";
listItems[1].style.backgroundColor = "lightgray";
listItems[1].style.fontStyle = "italic";
listItems[2].style.backgroundColor = "lightcoral";
listItems[2].style.fontSize = "20px";

const liElements = document.querySelectorAll("#myList1 li");
liElements.forEach((li) => {
  li.style.backgroundColor = "red";
  li.style.color = "white";
});

const submitButton = document.getElementById("submitButton");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const list = document.getElementById("list");
submitButton.addEventListener("click", () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  list.children[0].textContent = `First Name: ${firstName}`;
  list.children[1].textContent = `Last Name: ${lastName}`;
});
