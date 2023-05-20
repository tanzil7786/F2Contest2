let users = [
    {
        id:1, name:"john", age:"18", profession:"developer"
    },
    {
        id:2, name:"jack",age:"20", profession:"developer"
    },
    {
        id:3, name:"karen", age:"19", profession:"admin"
    }
];

/////        Filter     //////
const container = document.getElementById("filterContent");

function filter() {
    let filterValue = document.getElementById("filter-option").value;

    if(filterValue == "") {
        alert("Please select a profession before clicking the filter button");
        return;
    }
    
    // Resetting the container
    container.innerHTML = '';

    for(let i=0; i<users.length; i++) {
        if(users[i].profession.toLowerCase() == filterValue)
            showUser(i);
    }
}

    ////     Add new user   /////
function addUser() {
    // check
    if(document.getElementById("name").value == "" || document.getElementById("profession").value == "" || document.getElementById("age").value == "")
        return;

    // Clearing the container
    container.innerHTML = '';

    let newUser = {};
    newUser.id = users.length+1;
    newUser.name = document.getElementById("name").value;
    newUser.profession = document.getElementById("profession").value;
    newUser.age = document.getElementById("age").value;
    
    users.push(newUser);

    for(let i=0; i<users.length; i++)
        showUser(i);

    // Clear the input text box
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
}

    ////    Showing user UI card in filter section   /////
function showUser(i) {
    
    const userContainer1 = document.createElement("div");//Creating the Ui card container
    userContainer1.className = "user";

    const idSpan1 = document.createElement("span");
    idSpan1.innerText = users[i].id.toString() + ".";

    const nameSpan1 = document.createElement("span");
    nameSpan1.innerText = "Name: " + users[i].name[0].toUpperCase() + users[i].name.substring(1);

    const professionSpan1 = document.createElement("span");
    professionSpan1.innerText = "Profession: " + users[i].profession[0].toUpperCase() + users[i].profession.substring(1);

    const ageSpan1 = document.createElement("span");
    ageSpan1.innerText = "Age: " + users[i].age;

    userContainer1.append(idSpan1);
    userContainer1.append(nameSpan1);
    userContainer1.append(professionSpan1);
    userContainer1.append(ageSpan1);

    container.append(userContainer1);
}