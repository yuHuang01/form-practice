const mainParts = {
	myInputs: document.getElementsByClassName('formInput'),
	form: document.getElementById('form'),
	firstName: document.getElementById('firstName'),
	lastName: document.getElementById('lastName'),
	email: document.getElementById('email'),
	zipCode: document.getElementById('zipCode'),
	country: document.getElementById('country'),
	password: document.getElementById('password'),
	passwordValid: document.getElementById('passwordValid'),
	submit: document.getElementById('submit')
};
const errorPlace = {
	firstName: document.getElementById('fNameError'),
	lastName: document.getElementById('lNameError'),
	email: document.getElementById('emailError'),
	zipCode: document.getElementById('zipCodeError'),
	country: document.getElementById('countryError'),
	password: document.getElementById('passwordError'),
	passwordValid: document.getElementById('passwordValidError'),
};
const errorMessages = {
	form: 'Some of your input might not be correct!',
	firstName: ['Your name must be entered!', 'Your first name can\'t be a single character'],
	lastName: ['Your name must be entered!', 'Your last name can\'t be a single character'],
	email: ['E-mail must be entered', '', 'The entered value must be an e-mail!'],
	zipCode: ['Zip code must be entered!', 'The zip code should be a 4 digit number!'],
	country: ['your country must be entered!'],
	password: ['Your password must be entered', 'The password must be atleast 8 character long'],
	passwordValid: ['Your password must be entered again!', '','This must be the same as the previously entered password!']
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
			e.preventDefault();
		}
	},
	ShowError(e){
		const inputId = e.target.id;
		let errorSpan = errorPlace[inputId];
		if(inputId === 'passwordValid'){
			if(e.target.validity.valueMissing){
				errorSpan.textContent = errorMessages[inputId][0];
			}else if(e.target.value !== mainParts.password.value){
				errorSpan.textContent = errorMessages[inputId][2];
			}else{
				errorSpan.textContent = '';
			}
		}
		if(e.target.validity.valueMissing){
			errorSpan.textContent = errorMessages[inputId][0];
			return;
		}else if(e.target.validity.tooShort || e.target.validity.rangeUnderflow || e.target.validity.rangeOverflow){
			errorSpan.textContent = errorMessages[inputId][1];
			return;
		}else if(e.target.validity.typeMismatch){
			errorSpan.textContent = errorMessages[inputId][2];
			return;
		}else if(e.target.validity.valid){
			errorSpan.textContent = '';
			return;
		}
	}
};


mainParts.form.addEventListener('submit', formFunction.CheckAll);
for(let i = 0; i < mainParts.myInputs.length; i++){
	mainParts.myInputs[i].addEventListener('input', formFunction.ShowError);
}
