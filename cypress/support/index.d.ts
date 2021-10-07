declare namespace Cypress {
    interface Chainable<Subject = any> {
        login(id: string,pass:string): Chainable<Subject>
    }
  }