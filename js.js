function validate(){
    //celphone

    const cellphone =document.form.cellphone.value;

    if (isNaN(cellphone)){
        alert("Please insert a valid Phone number.");
        return false;
    }

//validate 9*

if(cellphone.length !=9){
    alert("Cellphone number must have 9 digits.");
    return false;
}
if(!cellphone.startsWith(9)){
    alert ("Phone number must start with 9.");
    return false;
}


//Age

 const age=document.form.age.value;
 if(isNaN(age)){
    alert("Please enter a numeric value.");
    return false;
 }
 //verify if +18
 if(age<18){
    alert("This form is only available to people over 18 years old.");
    return false;
 }

 //validate email

 const email=document.form.value;
 const re =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if(!re.test(String(email).toLowerCase())){
    alert("Invalid Email.");
    return false
 }

 alert("Thank you for filling out the form correctly. All fields have been validated");
 return true;

}





