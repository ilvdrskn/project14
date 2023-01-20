window.onload = function() {
    var form = document.getElementsByClassName("form");
    var inputs = document.getElementsByClassName("input");
    var inputEmail = document.getElementsByClassName("inputEmail");

    function validEmail(email) {
        var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(String(email).toLowerCase());
    }

    form[0].onsubmit = function() {
        var emailVal = inputEmail[0].value;
        var emptyInputs = [];


        for( var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                inputs[i].classList.add("error");
                emptyInputs.push(inputs[i]);
            } else {
                inputs[i].classList.remove("error")
            }
        }

        if(emptyInputs.length != 0) {
            return false;
        }

        if (!validEmail(emailVal)) {
            inputEmail[0].classList.add("error");
            return false;
        } else {
            inputEmail[0].classList.remove("error");
            
            return true; 
        }
    }
}