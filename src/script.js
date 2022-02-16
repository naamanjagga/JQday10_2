var globalArray = [];
$(document).ready(function() {
	$('#btn').on('click', function() {
		validation();
	});
});
function validation() {
	var username = document.getElementById('username').value;
	console.log(username);
	var password = document.getElementById('password').value;
	var pattern = '^[a-zA-Z]*$';
	var pass_pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})';
	if (username == '') {
		alert('please enter the user name');
	} else if (!username.match(pattern)) {
		alert('please enter only alphabet in user name');
	} else if (password == '') {
		alert('please enter the password');
	} else if (!password.match(pass_pattern)) {
		alert('please enter a strong password');
	} else {
		//unique();
        alert('added successfully');
        var obj = {
            username: username,
            password: password
        };
        globalArray.push(obj);
       console.log(globalArray);
		display();
	}
}
function display() {
	
	var dis = '<table><tr><th>Username</th><th>Password</th></tr>';
	for (var i = 0; i < globalArray.length; i++) {
		dis += '<tr><td>' + globalArray[i].username + '</td><td>' + globalArray[i].password + '</td></tr>';
	}
	dis += '</table>';content
    document.getElementById('content').innerHTML = dis;

}