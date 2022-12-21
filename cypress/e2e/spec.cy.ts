describe('empty spec', () => {
  beforeEach('passes', () => {
    cy.visit('https://kitchen.applitools.com/ingredients/iframe')
  })

  it('Verify iframe',()=>{
    //cy.get('#youtube-table-cypress').its('contentDocument.body').then(cy.wrap)
     // .find('button.ytp-large-play-button').should('be.visible')
    cy.iframe('#youtube-table-cypress').find('button.ytp-large-play-button',{timeout:60000}).should('be.visible').click()
  })

  
})