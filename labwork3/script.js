 function showTable() {
    document.getElementById("myTable").style.display = "block";
    document.getElementById("buttonAdd").disabled = false;
    document.getElementById("buttonDell").disabled = false;
}
    const btn = document.querySelector('.dellbtn')
    function getValue(e) {
    // get the label by traversing up the DOM tree to the closest label element
    const parent = e.target.closest('label')
    // get the input that lives inside the label element using querySelector
    const input = parent.querySelector('input')
    // get the inputs value and assign to variable
    const inputValue = input.value
    // only push values that are not empty
    if (inputValue.match(/^[+]?\d+$/)) {
    const value = document.getElementById("valueToDelete").value;
    document.querySelector('[row-id="' + value + '"]').remove();
} //check negative numbers
    else if(inputValue.match(/^[-]?\d+$/)){
    alert("Please enter a positive number!");
}
    //check if the input is empty
    else if(inputValue === ""){
    alert("Your input is empty, enter a number!");
} //check chars
    else{
    alert("Please enter a valid number!");
}

}
    //event listener for click on btn element
    btn.addEventListener('click', getValue)
    function addRow() {
    function randomName(){
        var randomNames = ["Makok", "Max", "Marat", "Makokinho", "Nura", "Nj", "Nurali", "Erka", "Erkhanat", "Serik", "Serikbay"];
        var randomItem = randomNames[Math.floor(Math.random()*randomNames.length)];
        return randomItem
    }
    function randomUser(){
    var randomUsers = ["Jandolla", "Jagy", "Janture", "Japok", "Adilbi", "Adish", "Ahtolhin", "Ahish", "Hoja", "Nurjol", "Bambi", "Shonti"];
    var randomItem = randomUsers[Math.floor(Math.random()*randomUsers.length)];
    return randomItem;
}
    function Gender(){
    var genders = ["Male", "Female"];
    var randomItem = genders[Math.floor(Math.random()*genders.length)];
    return randomItem;
}
    function Country(){
    var Countries = ["Mongolia", "Russia", "Kazakhstan", "USA", "France","Holland",];
    var randomItem = Countries[Math.floor(Math.random()*Countries.length)];
    return randomItem;
}
    var tr = document.getElementsByTagName("tr");
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    row.setAttribute("row-id", tr.length - 1);
    cell1.innerHTML = tr.length - 1;
    cell2.innerHTML = randomName();
    cell3.innerHTML = randomUser();
    cell4.innerHTML = Gender();
    cell5.innerHTML = Country();
}
