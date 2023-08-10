// Assignment Code
// var generateBtn = document.querySelector("#generate");

//  Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Select the 'generate' button element from the DOM
var generateBtn = document.querySelector('#generate');
var passwordDisplay = document.querySelector('#password');

// Add a click event listener to the 'generate' button
generateBtn.addEventListener('click', generatePassword);

/**
 * Function to generate a password based on user-defined criteria.
 */
function generatePassword() {
    // Prompt user for password criteria
	var includeLowercase = confirm('Include lowercase characters?');
	var includeUppercase = confirm('Include uppercase characters?');
	var includeNumbers = confirm('Include numeric characters?');
	var includeSpecialChars = confirm('Include special characters (%, $, @, etc.)?');

	// Prompt user for desired password length
	var passwordLength = parseInt(prompt('Enter password length (between 8 and 128):'));

	// Check for valid password length
	if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
		passwordDisplay.textContent = 'Please enter a valid number between 8 and 128.';
		return;
	}

	// Prepare character sets based on selected criteria
	var charSets = [];
	if (includeLowercase) charSets.push('abcdefghijklmnopqrstuvwxyz');
	if (includeUppercase) charSets.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
	if (includeNumbers) charSets.push('0123456789');
	if (includeSpecialChars) charSets.push('!@#$%&-_=+');

	// Check if at least one character set is selected
	if (charSets.length === 0) {
		passwordDisplay.textContent = 'Please select at least one character set.';
		return;
	}

	// Generate password
	var password = '';
	for (let i = 0; i < passwordLength; i++) {
		var randomSetIndex = Math.floor(Math.random() * charSets.length);
		var randomCharIndex = Math.floor(Math.random() * charSets[randomSetIndex].length);
		password += charSets[randomSetIndex][randomCharIndex];
	}

	// Display the generated password on the web page
	passwordDisplay.textContent = 'Generated Password: ' + password;
}

// End of code

