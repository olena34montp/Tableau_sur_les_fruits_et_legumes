let newArr = [
    ['', 'Mai', 'Juin', 'Juillet'],
    ['Abricot', 5.80, 3.37, 3.72],
    ['Fraise', 10.57, 11.11, 12.84],
    ['Poireau', 1.66, 2.34, 1.98]
];

// console.table(newArr);

function display() {
    for (i = 1; i < newArr.length; i++) {
        for (j = 1; j < newArr.length; j++){
            document.write(newArr[i][0] + ' coutait ' + newArr[i][j] + ' euros le kilo en ' + newArr[0][j] + '<br><br>');
        }
    }
}

function generateTable () {
    document.write("<table>");
    document.write("<tr>");
    document.write('<td>' + newArr[0][0] + '</td>');
    document.write('<td>' + newArr[0][1] + '</td>');
    document.write('<td>' + newArr[0][2] + '</td>');
    document.write('<td>' + newArr[0][3] + '</td>');
    document.write("</tr>");
    for (i = 1; i < newArr.length; i++) {
        document.write("<tr>");
        for (j = 0; j < newArr[i].length; j++){
            document.write('<td>' + newArr[i][j] + '</td>');
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

newArr.push(['Tomate', 4.34, 3.13, 2.77]);
console.log(newArr);
let icitableau = document.querySelector("#icitableau");
icitableau.appendChild(document.innerHTML(generateTable()));

// document.getElementById("table").innerHTML = generateTable();