const mainParts = {
	form: document.getElementById('form'),
	fName: document.getElementById('firstName'),
	lName: document.getElementById('lastName'),
	email: document.getElementById('email'),
	zipCode: document.getElementById('zipCode'),
	country: document.getElementById('country'),
	password: document.getElementById('password'),
	passwordValid: document.getElementById('passwordValid')
};
const errorPlace = {
	fName: document.getElementById('fNameError'),
	lName: document.getElementById('lNameError'),
	email: document.getElementById('emailError'),
	zipCode: document.getElementById('zipCodeError'),
	country: document.getElementById('countryError'),
	password: document.getElementById('passwordError'),
	passwordValid: document.getElementById('passwordValidError'),
};
const errorMessages = {
	name: ['Your name must be entered!', 'Your name can\'be a single character'],
	email: ['E-mail must be entered', 'The entered value must be an e-mail!'],
	zipCode: ['Zip code must be entered!', 'The zip code should be a 4 digit number!'],
	country: ['your country must be entered!'],
	password: ['Your password must be entered', 'The password must be atleast 8 character long'],
	passwordValid: ['You must enter your password again!', 'This must be the same as the previously entered password!']
};


const formFunction = {
	CheckAll(e){
		let iCount = 0;
		for(let i = 0; i < mainParts.myInputs.length; i++){
			if(!mainParts.myInputs[i].validity.valid){
				iCount++;
			}
		}
		if(iCount > 0){
			formFunction.ShowError();
			e.preventDefault();
		}
	},
	Con(){
		console.log('ok');
	}
};

