describe("Child and alerts", () => {
    beforeEach("CodenBox lab", () => {
      cy.visit("https://codenboxautomationlab.com/practice/");
    });
  
    it("Verify child", () => {
         cy.get('#opentab').invoke('removeAttr','target').click()
    });


    it("Alerts", () => {
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page who love to learn automation')
        })
   });

   it("Confirm", () => {
    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
});

  });