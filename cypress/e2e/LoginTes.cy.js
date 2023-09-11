describe('Test Fitur Login in Website CURA Healthcare Service', () => {
  it('Visits the website', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#menu-toggle').click()
  })
  it('Show Fitur Menu Login Sukses',()=>
  {
     cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
     cy.get('.alert')
     /*cy.get(':nth-child(1) > .col-sm-4')
     cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')
     cy.get('.col-sm-offset-4 > .input-group > .form-control')*/
     cy.get('#txt-username').type('John Doe')
     cy.get('#txt-password').type('ThisIsNotAPassword')
     cy.get('#btn-login').click()
  })
  it('Show Fitur Menu Login Username Wrong',()=>
  {
     cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
     cy.get('.alert')
    /* cy.get(':nth-child(1) > .col-sm-4')
     cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')
     cy.get('.col-sm-offset-4 > .input-group > .form-control')*/
     cy.get('#txt-username').type('Irma ika')
     cy.get('#txt-password').type('ThisIsNotAPassword')
     cy.get('#btn-login').click()
     cy.get('[class="lead text-danger"]').contains('Login failed! Please ensure the username and password are valid.')
  })
  it('Show Fitur Menu Login Password Wrong',()=>
  {
     cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
     cy.get('.alert')
     /*cy.get(':nth-child(1) > .col-sm-4')//css
     cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')//ccs
     cy.get('.col-sm-offset-4 > .input-group > .form-control')//css*/
     cy.get('#txt-username').type('John Doe')
     cy.get('#txt-password').type('NANAoke123')
     cy.get('#btn-login').click()
     cy.get('[class="lead text-danger"]').contains('Login failed! Please ensure the username and password are valid.')
  })
  it('Show Fitur Menu Login Username and Password Wrong',()=>
  {
     cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
     cy.get('.alert')
     /*cy.get(':nth-child(1) > .col-sm-4')//css
     cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')//ccs
     cy.get('.col-sm-offset-4 > .input-group > .form-control')//css*/
     cy.get('#txt-username').type('Isna')
     cy.get('#txt-password').type('NANAoke345')
     cy.get('#btn-login').click()
     cy.get('[class="lead text-danger"]').contains('Login failed! Please ensure the username and password are valid.')
  })
 })