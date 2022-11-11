function showTable() {
    document.getElementById("myTable").style.display = "block";
    document.getElementById("buttonAdd").disabled = false;
    document.getElementById("buttonDell").disabled = false;
}   let lastID = 0;
    const btn = document.querySelector('.dellbtn')
    function getValue(e) {
    // get the label by traversing up the DOM tree to the closest label element
    const parent = e.target.closest('label')
    // get the input that lives inside the label element using querySelector
    const input = parent.querySelector('input')
    // get the inputs value and assign to variable
    const inputValue = input.value;
    // check conditions and push values
    if (inputValue.match(/^[+]?\d+$/ )) {
    const value = document.getElementById("valueToDelete").value;
    document.querySelector('[row-id="' + value + '"]').remove();
} //check negative numbers
    else if(inputValue.match(/^[-]?\d+$/ )){
    alert("Please enter a positive value!");
}
    //check if the input is empty
    else if(inputValue === ""){
    alert("Your input is empty, enter a value!");
} //check chars
    else{
    alert("Please enter a valid value!");
}
}
    //event listener for click on btn element
    btn.addEventListener('click', getValue)
    function addRow() {
    function getRandomName(){
        var randomNames = ["Makok", "Max", "Marat", "Makokinho", "Nura", "Nj", "Nurali", "Erka", "Erkhanat", "Serik", "Serikbay"];
        var getItem = randomNames[Math.floor(Math.random()*randomNames.length)];
        return getItem;
    }
    function getRandomUser(){
    var randomUsers = ["Jandolla", "Jagy", "Janture", "Japok", "Adilbi", "Adish", "Ahtolhin", "Ahish", "Hoja", "Nurjol", "Bambi", "Shonti"];
    var getItem = randomUsers[Math.floor(Math.random()*randomUsers.length)];
    return getItem;
}
    function getGender(){
    var genders = ["Male", "Female"];
    var getItem = genders[Math.floor(Math.random()*genders.length)];
    return getItem;
}
    function getCountry(){
    var Countries = ["Mongolia", "Russia", "Kazakhstan", "USA", "France","Holland",];
    var getItem = Countries[Math.floor(Math.random()*Countries.length)];
    return getItem;
}
    var tr = document.getElementsByTagName("tr");
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    row.setAttribute("row-id", lastID);
    cell1.innerHTML = lastID;
    cell2.innerHTML = getRandomName();
    cell3.innerHTML = getRandomUser();
    cell4.innerHTML = getGender();
    cell5.innerHTML = getCountry();
    lastID=lastID+1;
}
$("table#myTable").find('tr').each(function() { });