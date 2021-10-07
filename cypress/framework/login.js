var loginElementx = {
	_userLogin: '#user_login',
	_userPassword: '#user_password',
	_btn: '.btn',
	_errorMessage: '',
}


function loginx(username, password) {
	cy.clearCookies()
	cy.clearLocalStorage()

	cy.get(loginElementx._userLogin)
		.type(username)
		.get(loginElementx._userPassword)
		.type(password)
		.get(loginElementx._btn)
		.click()
}

export{loginx,loginElementx}