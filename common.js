// getting element parse float to number function

function getValueById(id){
    const elementValue = document.getElementById(id);
    const value = parseFloat(elementValue.innerText);
    return value;
}

function setValue(id,value){
    const element = document.getElementById(id);
    element.innerText = value;
}

