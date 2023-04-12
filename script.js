function addNewWEField() {
    // console.log("Adding new Field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("row", 3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);


}

// generating cv//     // generating cv//     // generating cv//      // generating cv//    // generating cv//   // generating cv//   // generating cv//   // generating cv//  // generating cv//

function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;

    //////////////////////////////////////////////////////////////////////// Direct  ///////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("nameT2").innerHTML = nameField;

    ////////////////////////////////////////////////////////////////////////  contact  /////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    ////////////////////////////////////////////////////////////////////////  Address  /////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    ////////////////////////////////////////////////////////////////////////  facebook, inst, linked  /////////////////////////////////////////////////////////////////////////////

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    /////////////////////////////////////////////////////////////////////////  Objective  //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    ///////////////////////////////////////////////////////////////////////  Work Experience  //////////////////////////////////////////////////////////////////////////////////

    let wes = document.getElementsByClassName("weField");

    let str = "";


    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //////////////////////////////////////////////////////////////////////// Academic Qualification  /////////////////////////////////////////////////////////////////////////////

    let aqs = document.getElementsByClassName("aqField");

    let str1 = "";

    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    /////////////////////////////////////////////////////////////////////////  code for setting image  ///////////////////////////////////////////////////////////////////////////////

    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    // send Image to tempate//

    reader.onloadend = function() {
        document.getElementById("imgTe").src = reader.result;
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("CV-form").style.display = "none"; ////////////////////////////////////
    document.getElementById("CV-template").style.display = "block"; //////////////////////////////       Note related to (Code for setting image) it s include to print CV
    /////////////////////////////////////////////////////////////////////////////////////////////

}

//////////////////////////////////////////////////////////////////////////////    PRINT CV     //////////////////////////////////////////////////////////////////////////////////

function printCV() {

    window.print();

}