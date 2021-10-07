
import { loginElement } from "../elements/loginElements"

function login1(username, password) {
	cy.clearCookies()
	cy.clearLocalStorage()

	cy.get(loginElement._userLogin)
		.type(username)
		.get(loginElement._userPassword)
		.type(password)
		.get(loginElement._btn)
		.click()
}

export{login1}