describe('Test Fitur Login in Website CURA Healthcare Service', () => {
    it('Visits the website', () => {
       cy.visit('https://katalon-demo-cura.herokuapp.com/')
      cy.get('#menu-toggle').click()
    })
    it('Show Fitur Menu',()=>
    {
       cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
       cy.get('.alert')
       /*cy.get(':nth-child(1) > .col-sm-4')
       cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')
       cy.get('.col-sm-offset-4 > .input-group > .form-control')*/
       cy.get('#txt-username').type('John Doe')
       cy.get('#txt-password').type('ThisIsNotAPassword')
       cy.get('#btn-login').click()
       cy.get('h2').should('have.text', 'Make Appointment') //assert on the appointment page dan should untuk mastiin
       cy.get('#combo_facility').select('Tokyo CURA Healthcare Center') //check facility
        cy.get('#chk_hospotal_readmission').check() //check readmission
        cy.get('#radio_program_none').check() //check healthcare program None
        cy.get('#txt_visit_date').click() //click date button
        cy.get('[class="day"]').contains('5').click()  //untuk select date 5 kalo adanya cumamn class doang pake ini
        cy.contains('Comment').click() //untuk nutup datepicker kalo contains biasanya buat cari datanya
        cy.get('#txt_comment').click().type('okok')
        cy.get('#btn-book-appointment').click()
        cy.get('h2').contains('Appointment Confirmation')//ini untuk konfirmasi berhasil
        cy.get('#facility').should('have.text', 'Tokyo CURA Healthcare Center')//untuk cek data berhasil atau tidak
        cy.get('#hospital_readmission').should('have.text', 'Yes')//untuk cek yes atau ga
        cy.get('#program').should('have.text', 'None')
        cy.get('#visit_date').should('have.text', '05/09/2023')
        cy.get('#comment').should('have.text', 'okok')
        cy.get('[class="btn btn-default"]').contains('Go to Homepage').click()  
    })
   })