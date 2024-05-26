import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect} from "react";
import ProductCard from "../components/ProductCard";
import {useSelector, useDispatch} from 'react-redux'
import { getProducts } from "../redux/actions/productAction";

const ProductScreen = () => {
  // const [products, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/products")
  //     .then((response) => {
  //       setData(response.products.products);
  //       // console.log(response.data.products)
  //     })
  //     .catch((error) => {
  //       console.error("error fetching data:", error);
  //     });
  // }, []);

  const dispatch  = useDispatch()
  const {loading,error, products, pagination} =  useSelector((state)=>{
        return state.product
  })

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <>
      {products.length > 1 && (
        <Box>
          <Wrap spacing="30px" justify="center" minHeight="80vh"  mx={{ base: '12', md: '20', lg: '32' }}>
            {products.map((product) => (
              <WrapItem key={product._id}>
                <Center w={"250px"} h={"450px"}>
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
};

export default ProductScreen;
