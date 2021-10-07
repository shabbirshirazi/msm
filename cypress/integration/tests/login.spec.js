import {login1} from '../../framework/functions/loginFunctions'
import {loginx} from '../../framework/login'

describe('login tests', () => {
	beforeEach('', () => {
		cy.gotoLoginPage()
	})

	it('login with valid details', () => {
		cy.fixture('vusers').then(vusers => {
			 loginx(vusers.username,  vusers.password)
		})

	})
    it('login with invalid details', () => {

		cy.fixture('invusers').then(invusers => {
			login1(invusers.username,  invusers.password)
            cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
            
		})

	})

    it('test test', () => {
        cy.login('username','password')
    });

	it('login using function', () => {
		login1('username','password')
	});

	it('Login with single file elements and functions', () => {
		loginx('test','test')
	});
})
