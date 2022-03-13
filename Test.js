 function calc(form) {
     let note1 = document.getElementById("NoteMatiere1").value;
     let note2 = document.getElementById("NoteMatiere2").value;
     let note3 = document.getElementById("NoteMatiere3").value;


     let coef1 = parseFloat(document.getElementById("CoefMatiere1").value);
     let coef2 = parseFloat(document.getElementById("CoefMatiere2").value);
     let coef3 = parseFloat(document.getElementById("CoefMatiere3").value);

     let moyenne = ((note1 * coef1) + (note2 * coef2) + (note3 * coef3)) / (coef1 + coef2 + coef3)

     let result = document.getElementById("Result");
     result.innerHTML = moyenne;
 }