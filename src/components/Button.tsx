import { ChakraProvider, Center, Button } from "@chakra-ui/react"
import { login } from "../services/Login"



export const ButtonComponent = ()=>{
    return(
        <>

            <ChakraProvider>
                <Center>
                    <Button onClick={login} colorScheme='red' size='lg' width='50%'>Entrar</Button>
                </Center>
            </ChakraProvider>

        </>
    )
}