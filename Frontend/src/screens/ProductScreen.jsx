import { Box, Center, Wrap, WrapItem, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../redux/actions/productAction";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products, pagination, favoritesToggled } =
    useSelector((state) => {
      return state.product;
    });

  useEffect(() => {
    dispatch(getProducts(1));
  }, []);

  const paginationButtonClick = (page) => {
    dispatch(getProducts(page));
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      paginationButtonClick(pagination.currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pagination.currentPage > 1) {
      paginationButtonClick(pagination.currentPage - 1);
    }
  };

  return (
    <>
      {products.length >= 1 && (
        <Box>
          <Wrap
            spacing="30px"
            justify="center"
            minHeight="80vh"
            mx={{ base: "12", md: "20", lg: "32" }}
          >
            {products.map((product) => (
              <WrapItem key={product._id}>
                <Center w={"250px"} h={"450px"}>
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>

          {!favoritesToggled && (
            <Wrap spacing="10px" justify="space-evenly" p="5">
              <Button
                onClick={handlePreviousPage}
                colorScheme={pagination.currentPage === 1 ? "gray" : "cyan"}
              >
                <ArrowLeftIcon />
              </Button>
              {Array.from(Array(pagination.totalPages), (e, i) => {
                return (
                  <Button
                    key={i}
                    onClick={() => paginationButtonClick(i + 1)}
                    colorScheme={
                      pagination.currentPage === i + 1 ? "cyan" : "gray"
                    }
                  >
                    {i + 1}
                  </Button>
                );
              })}
              <Button
                onClick={handleNextPage}
                colorScheme={
                  pagination.currentPage === pagination.totalPages
                    ? "gray"
                    : "cyan"
                }
              >
                <ArrowRightIcon />
              </Button>
            </Wrap>
          )}
        </Box>
      )}
    </>
  );
};

export default ProductScreen;
