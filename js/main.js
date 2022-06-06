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
        return false;
    }

    return true;
}

const form = document.getElementById('test-form');

const delay = ms => new Promise(res => setTimeout(res, ms));

