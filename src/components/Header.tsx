import { Box, Center, ChakraProvider } from '@chakra-ui/react'

export const Header = ()=>{
    return(
        <>
            <ChakraProvider>
                <Box backgroundColor='#E94D5F' w='100%' p={4} color='white'>
                    <Center fontSize='40px'>
                        Dio Bank
                    </Center>
                    
                </Box>
            </ChakraProvider>


        </>
    )
}