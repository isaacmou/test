const txt = document.querySelector("#input");
const btn1 = document.querySelector("#searchbutton");
function initialize() {
    var status = "* Offline *";
    if (navigator.onLine) {
        status = "* Online *";
        retrieveContacts();
    } else {
        const localStorage = window.localStorage;
        if (localStorage) {
            const contacts = localStorage.getItem("contacts");
            if (contacts) {
                displayContacts(JSON.parse(contacts));
            }
        }
    }

    document.getElementById("status").innerHTML = status;

    document.body.addEventListener('click',
            "online",
            function () {
                document.getElementById("status").innerHTML = "Online";
            },
            false
            );
    document.body.addEventListener(
            "offline",
            function () {
                document.getElementById("status").innerHTML = "Offline";
            },
            false
            );
}
btn1.onclick = function () {
    addRowWithName(contact)
}
function retrieveContacts() {
    const xhr = new XMLHttpRequest();
    const url = "contacts.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var contacts = JSON.parse(xhr.response).contacts;
            displayContacts(contacts);

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("contacts", JSON.stringify(contacts));
            }
        }
    };

    xhr.open("get", url);
    xhr.send();
}

function displayContacts(contacts) {
    contacts.forEach(addRow);
}

function displayContactsWithName(contacts) {
    contacts.forEach(addRowWithName);
}
function addRow(contact) {
    var tcontent = document.getElementById("tcontent");
    var row = tcontent.insertRow();

    var nameCell = row.insertCell();
    nameCell.setAttribute('data-label', "Name");
    nameCell.innerHTML = contact.name;

    var addressCell = row.insertCell();
    addressCell.setAttribute('data-label', "Address");
    addressCell.innerHTML = contact.address;

    var mobileCell = row.insertCell();
    mobileCell.setAttribute('data-label', "Mobile");
    mobileCell.innerHTML = contact.phone.mobile;
}


function addRowWithName(contact) {
    var tcontent = document.getElementById("tcontent");
    if (contact.name == "Michael"){
        var row = tcontent.insertRow();

        var nameCell = row.insertCell();
        nameCell.setAttribute('data-label', "Name");
        nameCell.innerHTML = contact.name;

        var addressCell = row.insertCell();
        addressCell.setAttribute('data-label', "Address");
        addressCell.innerHTML = contact.address;

        var mobileCell = row.insertCell();
        mobileCell.setAttribute('data-label', "Mobile");
        mobileCell.innerHTML = contact.phone.mobile;
    }
}

