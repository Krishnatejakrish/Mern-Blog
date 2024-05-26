import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ProductScreen from './screens/ProductScreen'
const App = () => {
  return (
    <ChakraProvider>
   <ProductScreen/>
  </ChakraProvider>
  )
}

export default App