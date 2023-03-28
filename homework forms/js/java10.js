function getMLFile(path) {
  fetch(path)
    .then((response) => response.text())
    .then((xmlString) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");
      setMLData(xmlDoc);
    })
    .catch((error) => console.log(error));
}

function setMLData(xmlDoc) {
  console.log(xmlDoc);
  const cds = xmlDoc.getElementsByTagName("CD");
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cds.length; i++) {
    table +=
      "<tr><td>" +
      cds[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

document.getElementById("get-data").addEventListener("click", function () {
  getMLFile("java10.xml");
});

function getMLFile(path) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(this.responseText, "text/xml");
      setMLData(xmlDoc);
      console.log("Data received successfully");
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

function setMLData(xmlDoc) {
  console.log(xmlDoc);
  const cds = xmlDoc.getElementsByTagName("CD");
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cds.length; i++) {
    table +=
      "<tr><td>" +
      cds[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("demo1").innerHTML = table;
}

document.getElementById("berkan").addEventListener("click", function () {
  getMLFile("java10.xml");
});
