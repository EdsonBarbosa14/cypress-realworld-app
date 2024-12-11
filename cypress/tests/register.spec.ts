import registerClass from '../pages/registerPage'
const register = new registerClass()
const loginUrl = '/signin'

describe('template spec', () => {


  it('Register success', () => {
    cy.visit(loginUrl)
    register.makeRegisterSuccess('Edson', 'Campos', 'dequinho10', 'asd123456789', 'asd123456789')
  })

  it.only('Register Fail', () => {
    cy.visit(loginUrl)
    register.makeRegisterFail('Edson', 'Campos', 'dequinho11', 'asd', 'asd')
  })
})