describe('docker test in cypress', () => {
    it('should load website', () => {
        cy.visit('/index.html')
        cy.contains('Online Banking')
    });
});