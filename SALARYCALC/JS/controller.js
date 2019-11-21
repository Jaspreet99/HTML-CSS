window.addEventListener("load", bindEvents);
console.log("hello");
function bindEvents(){
    document.getElementById('compute').addEventListener('click', takeSalary);
}
function takeSalary(){
    var basicSalary=document.getElementById('bs').value;
    console.log(basicSalary);
    salaryOperations.inputSalary(parseInt(basicSalary));
    printSalarySlip();
}
function printSalarySlip(){
    for(let key in salaryOperations){
        if(key=='basicSalary' || key=='inputSalary'){
            continue;
        }
        document.getElementById(key).innerText=salaryOperations[key]();
    }
}
