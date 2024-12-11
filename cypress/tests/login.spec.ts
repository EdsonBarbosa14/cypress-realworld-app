import loginClass from '../pages/loginPage'
const login = new loginClass()
const loginUrl = '/signin'

describe('template spec', () => {


  it.only('Login success', () => {
    cy.visit(loginUrl)
    login.makeLoginSuccess('dequinho10', 'asd123456789')
  })

  it('Login Fail', () => {
    cy.visit(loginUrl)
    login.makeLoginFail('aaaa', 'sssss')
  })
})