// selecting html elements
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
let submitButton = document.querySelector('#submit-button')

submitButton.addEventListener('click', function(e) {
	e.preventDefault();
	let nameValue = name.value;
	let emailValue = email.value;
	let messageValue =message.value;

	console.log('name:', nameValue);
	console.log('email:', emailValue);
	console.log('message:', messageValue);


	if(emailValue.includes('@')) {
		//all good
		sendEmail(nameValue, emailValue, messageValue);

	} else {
		alert('Oh no, that does not look like a valid email address. Please correct it and resubmit your message.');
	}
})

//Send Email info to our email


	function sendEmail(nameValue, emailValue, messageValue) {
		Email.send({
			Host: "smtp.gmail.com",
			Username: "carlycilly@gmail.com",
			password: "Pinacle12",
			To: "carlycilly@gmail.com",
			From: "carlycilly@gmail.com",
			Subject: '${nameValue} sent you a message',
			Body: 'Name: ${nameValue} <br/> Email: ${emailValue} <br/> Message: ${messageValue}',
		}).then((messageValue) => alert('mail sent successfully')) 

	}


