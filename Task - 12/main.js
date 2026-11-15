    function validateEmail(){
    let email=document.myform.mailid.value.trim();

    if(email.includes("@") && email.includes(".") && email.includes(".com") || email.includes(".org") || email.includes(".in")){
    alert('Valid Email');
    document.myform.mailid.focus();
    return true;
    }
    alert('Invalid Email');
    document.myform.mailid.focus();
    return false;
    }