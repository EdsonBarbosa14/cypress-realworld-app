import { first } from "lodash"

const selectorsList = {
    signupText: "[data-test='signup']",
    urlSignup: "/signup",
    firstnameField: "[name='firstName']",
    lastnameField: "[name='lastName']",
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    confirmPasswordField: "[name='confirmPassword']",
    signupButton: "[type='submit']",
  }

class registerClass {
  makeRegisterSuccess(firstname, lastname, username,password, confirmpassword){
    cy.get(selectorsList.signupText).click()
    cy.location('pathname').should('equal', selectorsList.urlSignup)
    cy.get(selectorsList.firstnameField).type(firstname)
    cy.get(selectorsList.lastnameField).type(lastname)
    cy.get(selectorsList.usernameField).type(username)
    cy.get(selectorsList.passwordField).type(password)
    cy.get(selectorsList.confirmPasswordField).type(confirmpassword)
    cy.get(selectorsList.signupButton).click()
  }

  makeRegisterFail(firstname, lastname, username,password, confirmpassword){
    cy.get(selectorsList.signupText).click()
    cy.location('pathname').should('equal', selectorsList.urlSignup)
    cy.get(selectorsList.firstnameField).type(firstname)
    cy.get(selectorsList.lastnameField).type(lastname)
    cy.get(selectorsList.usernameField).type(username)
    cy.get(selectorsList.passwordField).type(password)
    cy.get(selectorsList.confirmPasswordField).type(confirmpassword)
    cy.get(selectorsList.signupButton).click()
    // if (firstname == "") {
    //     cy.get("[data-test='signup-first-name']")
    // }
  }
}

export default registerClass