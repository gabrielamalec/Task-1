//switching between pages

const navButtons = document.querySelector("#nav-btns"),
addCustomerBtn = document.querySelector("#addCustomer"),
editCustomerBtn = document.querySelector("#editCustomer"),
deleteCustomerBtn = document.querySelector("#deleteCustomer"),
showCustomerBtn = document.querySelector("#showCustomer"),
addCustomerBox = document.querySelector("#addCustomerBox"),
editCustomerBox = document.querySelector("#editCustomerBox"),
deleteCustomerBox = document.querySelector("#deleteCustomerBox"),
showCustomerBox = document.querySelector("#showCustomerBox");

addCustomerBtn.addEventListener("click", () => {
    navButtons.classList.remove("d-flex-col")
    navButtons.classList.add("d-none")
    addCustomerBox.classList.remove("d-none")
    addCustomerBox.classList.add("d-flex-col")
})

editCustomerBtn.addEventListener("click", () => {
    navButtons.classList.remove("d-flex-col")
    navButtons.classList.add("d-none")
    editCustomerBox.classList.remove("d-none")
    editCustomerBox.classList.add("d-flex-col")
})

deleteCustomerBtn.addEventListener("click", () => {
    navButtons.classList.remove("d-flex-col")
    navButtons.classList.add("d-none")
    deleteCustomerBox.classList.remove("d-none")
})

showCustomerBtn.addEventListener("click", () => {
    navButtons.classList.remove("d-flex-col")
    navButtons.classList.add("d-none")
    showCustomerBox.classList.remove("d-none")
})

document.querySelectorAll('a.home').forEach(item => {
    item.addEventListener('click', event => {
        navButtons.classList.remove("d-none")
        navButtons.classList.add("d-flex-col")
        addCustomerBox.classList.remove("d-flex-col")
        addCustomerBox.classList.add("d-none")
        editCustomerBox.classList.remove("d-flex-col")
        editCustomerBox.classList.add("d-none")
        deleteCustomerBox.classList.remove("d-flex-col")
        deleteCustomerBox.classList.add("d-none")
        showCustomerBox.classList.remove("d-flex-col")
        showCustomerBox.classList.add("d-none")
    })
  })

  
//adding customers

let customers = [];

function addCustomer() {
    let name = document.getElementById("name").value;
    let vatNum = document.getElementById("vatNum").value;
    let address = document.getElementById("address").value;
    if(name == 0 || vatNum == 0 || address == 0){
        alert("Try again! You need to fill all the fields")
    } else {
        const creationdate = new Date();
        customers.push({ name: name, vatNum: vatNum, address: address, creationdate: creationdate});
        alert("Customer added successfully!");
    }
}

//preventing reloading page due to lack of database

let formBtn=document.getElementById("formSubmit");

function submitForm(event){
     event.preventDefault();
     let inputs = document.querySelectorAll('#name, #vatNum, #address');
     inputs.forEach(input => {
        input.value = '';
     });
}
  
formBtn.addEventListener('click', submitForm);


//editing names and addresses of customers indicated by VAT num

const editInputs = document.querySelector("#editCustomerInputs");
let editBtn=document.getElementById("editCustomerInputsSubmit");

function editCustomer() {
    let customerChoice = document.getElementById("editCustomerChoice").value;
    for (let i=0; i < customers.length; i++) {
            if(customers[i].vatNum == customerChoice){
                console.log("success")
                editInputs.classList.remove("d-none")
                editInputs.classList.add("d-flex-col")
                customers[i].name = document.getElementById("name-edit").value;
                customers[i].address = document.getElementById("address-edit").value;
            }
    }
}

function submitEditForm(event){
    event.preventDefault();
    let inputs = document.querySelectorAll('#name, #address');
    inputs.forEach(input => {
       input.value = '';
    });
    editInputs.classList.add("d-none")
    editInputs.classList.remove("d-flex-col")
}

editBtn.addEventListener('click', submitEditForm);


//deleting customers by Vat num

function deleteCustomer() {
    let customerChoice = document.getElementById("deleteCustomerChoice").value;
    for (let i=0; i < customers.length; i++) {
            if(customers[i].vatNum == customerChoice){
                console.log("success")
                customers[i]='';
                alert("Done")
            }
    }
}


//showing list of customers

let listCustomers = document.querySelector("#list-customers")

function showCustomer(){
    listCustomers.innerHTML = '';
    for (let i = 0; i < customers.length; i++) {
        listCustomers.innerHTML += `<li>${customers[i].name + ' - ' + customers[i].vatNum + ' - ' + customers[i].address + ' - ' + customers[i].creationdate}</li>`;
    }
}
