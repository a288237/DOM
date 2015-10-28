function addParagraph(){
  var paragraph = document.createElement("p");
  paragraph.innerHTML = "Hola, parrafo dinamico";
  var section = document.getElementById("container");
  section.appendChild(paragraph);
}
