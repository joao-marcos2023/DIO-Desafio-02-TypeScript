import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react"
import {ButtonComponent} from './Button'

export const Card = ()=>{
    return(
        <>

            <ChakraProvider>
                <Center>

                    <Box maxWidth='500px' minHeight='300px' backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
                        <Center marginBottom='20px'><h1>Faça o login</h1></Center>
                        <Input marginBottom='25px' placeholder='email'/>
                        <Input marginBottom='25px' placeholder='password'/>
                        <ButtonComponent/>
                    </Box>
                    
                </Center>
            </ChakraProvider>

        </>
    )
}