let NoteMatiere1 = parseFloat(prompt("9adesh Jebt fel philo"));
let NoteMatiere2 = parseFloat(prompt("9adesh Jebt fel Anglais"));
let NoteMatiere3 = parseFloat(prompt("9adesh Jebt fel Français"));
let CoefMatiere1 = parseInt(prompt("9adesh Coef el philo"));
let CoefMatiere2 = parseInt(prompt("9adesh Coef el Anglais"));
let CoefMatiere3 = parseInt(prompt("9adesh Coef el Français"));
let MoyenneMatiere1 = (NoteMatiere1 * CoefMatiere1)
let MoyenneMatiere2 = (NoteMatiere2 * CoefMatiere2)
let MoyenneMatiere3 = (NoteMatiere3 * CoefMatiere3)
let Moyenne = ((MoyenneMatiere1 + MoyenneMatiere2 + MoyenneMatiere3) / (CoefMatiere1 + CoefMatiere2 + CoefMatiere3))
alert(`la moyenne est egale à ${Moyenne}`)