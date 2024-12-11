const selectorsList = {
    usernameField: "[name='username']", 
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    failLoginText: '[data-test="signin-error"]',
    popupGetStarted: "[data-test='user-onboarding-dialog']",
  }

class loginClass {
  makeLoginSuccess(username,password){
    cy.get(selectorsList.usernameField).type(username)
    cy.get(selectorsList.passwordField).type(password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.popupGetStarted).contains("Get Started with Real World App")
  }

  makeLoginFail(username,password){
    cy.get(selectorsList.usernameField).type(username)
    cy.get(selectorsList.passwordField).type(password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.failLoginText).contains("Username or password is invalid")
  }
}

export default loginClass