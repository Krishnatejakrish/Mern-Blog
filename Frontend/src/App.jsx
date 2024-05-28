import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductScreen />} />
          </Routes>
        </main>
      </Router>
      
    </ChakraProvider>
  );
};

export default App;
