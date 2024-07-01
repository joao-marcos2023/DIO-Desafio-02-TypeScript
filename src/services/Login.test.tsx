import { login } from "./Login"

describe("login", ()=>{
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it("exibir alerta com boas vindas", ()=>{
        login()
        expect(mockAlert).toBeCalled()
    })
})