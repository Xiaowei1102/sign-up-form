function check() {
    const password1 = document.getElementById('pwd1');
    const password2 = document.getElementById('pwd2');
    if (password1.value != password2.value) {
        document.querySelector('.error').innerHTML = "* Passwords do not match";
        document.getElementById('pwd1').style.border = '2px solid red';
        document.getElementById('pwd1').style.outline = 'none';
        document.getElementById('pwd2').style.border = '2px solid red';
        document.getElementById('pwd2').style.outline = 'none';
    } else {
        document.querySelector('.error').innerHTML = "";
        document.getElementById('pwd1').style.border = '1.5px solid #E5E7EB';
        
        document.getElementById('pwd2').style.border = '1.5px solid #E5E7EB';
        
    }
}
