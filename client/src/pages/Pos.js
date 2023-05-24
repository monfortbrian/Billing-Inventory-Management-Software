import React, { useState, useEffect, useMemo } from "react";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    HStack,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import { CategoryCard } from "../components/CategoryCard";
import { ProductCard } from "../components/ProductCard";
import { Table } from "../components/Table";
import axios from "axios";
import { Modal } from "../components/Modal";
import { Invoice } from "../components/Invoice";
import { CategorySkeleton } from "../skeletons/CategorySkeleton";
import { ProductSkeleton } from "../skeletons/ProductSkeleton";

export const Pos = () => {
    const [filter, setFilter] = useState(0);
    const [modal, setModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const grandTotal = useMemo(
        () => cart.map(a => a.totalAmount).reduce((a, b) => a + b, 0),
        [cart]
    );

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:5000/api/category"
            );
            console.log(data);
            setCategories(() => data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:5000/api/product"
            );
            console.log(data);
            setProducts(() => data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const addToCart = product => {
        let findProductInCart = cart.find(x => x.id === product.id);

        if (findProductInCart) {
            let newCart = [],
                newItem;

            cart.forEach(item => {
                if (item.id === product.id) {
                    newItem = {
                        ...item,
                        quant: item.quant + 1,
                        totalAmount: parseInt(item.price * (item.quant + 1)),
                    };
                    newCart.push(newItem);
                } else {
                    newCart.push(item);
                }
            });
            setCart(newCart);
        } else {
            let addingItem = {
                ...product,
                quant: 1,
                totalAmount: parseInt(product.price),
            };
            setCart([...cart, addingItem]);
        }
    };

    const removeFromCart = product => {
        let newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    const displayProducts = filter => {
        let filteredProducts = [];
        if (filter === 0) return products;
        filteredProducts = products.filter(
            product => product.categoryId === filter
        );
        return filteredProducts;
    };

    const resetCart = () => setCart([]);

    const PayNow = () => {
        if (cart.length < 1) return;
        setModal(true);
    };

    return (
        <>
            <SimpleGrid columns={2} spacing="10" w="full" py={4} px={6}>
                <VStack w="full" align="flex-start">
                    <Heading size="lg">POS</Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>POS</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </VStack>
            </SimpleGrid>

            <Container maxW="full" bg="gray.100" p={0}>
                <Grid
                    templateColumns={{ base: "auto", lg: "40% auto" }}
                    gap={4}
                    p={4}
                    w="full"
                >
                    <GridItem order={{ base: 2, lg: 1 }}>
                        <Grid
                            templateRows="2fr 1fr"
                            w="full"
                            h="calc(100vh - 80px)"
                            gap={4}
                        >
                            <Box
                                p={5}
                                borderRadius={6}
                                overflow="overlay"
                                bg="white"
                                sx={{
                                    "::-webkit-scrollbar": {
                                        width: "7px",
                                        height: "7px",
                                    },
                                    "::-webkit-scrollbar-thumb": {
                                        borderRadius: "30px",
                                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    },
                                }}
                            >
                                <Table cart={cart} remove={removeFromCart} />
                            </Box>
                            <SimpleGrid
                                columns={2}
                                bg="white"
                                p={5}
                                borderRadius={6}
                                overflow="overlay"
                                alignItems="center"
                            >
                                <Box>
                                    <Text>Grand total</Text>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        {grandTotal} BIF
                                    </Text>
                                </Box>
                                <HStack spacing={4} justify="flex-end">
                                    <Button
                                        onClick={PayNow}
                                        disabled={!cart.length}
                                        colorScheme="green"
                                    >
                                        Pay now
                                    </Button>
                                    <Button
                                        onClick={resetCart}
                                        disabled={!cart.length}
                                        variant="ghost"
                                        colorScheme="green"
                                    >
                                        Reset
                                    </Button>
                                </HStack>
                            </SimpleGrid>
                        </Grid>
                    </GridItem>
                    <GridItem order={{ base: 1, lg: 2 }}>
                        <Grid
                            templateRows="110px 1fr"
                            gap={3}
                            h="calc(100vh - 70px)"
                            overflowY="overlay"
                            sx={{
                                "::-webkit-scrollbar": {
                                    width: "8px",
                                },
                                "::-webkit-scrollbar-thumb": {
                                    borderRadius: "30px",
                                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                                },
                            }}
                        >
                            <Box
                                whiteSpace="nowrap"
                                overflowX="overlay"
                                sx={{
                                    "::-webkit-scrollbar": {
                                        height: "7px",
                                    },
                                    "::-webkit-scrollbar-thumb": {
                                        borderRadius: "30px",
                                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    },
                                }}
                            >
                                {categories.length > 0 ? (
                                    <>
                                        <CategoryCard
                                            item={{
                                                id: 0,
                                                image: "/images/menu.png",
                                                name: "All",
                                            }}
                                            setFilter={setFilter}
                                            filter={filter}
                                        />

                                        {categories.map((category, index) => (
                                            <CategoryCard
                                                key={index}
                                                item={category}
                                                setFilter={setFilter}
                                                filter={filter}
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <CategorySkeleton />
                                )}
                            </Box>
                            <Grid
                                templateColumns={{
                                    base: "repeat(2, 1fr)",
                                    lg: "repeat(4, 1fr)",
                                }}
                                py={3}
                                gap={4}
                                h="fit-content"
                            >
                                {displayProducts(filter).length > 0 ? (
                                    displayProducts(filter).map(
                                        (product, index) => (
                                            <ProductCard
                                                key={index}
                                                product={product}
                                                addToCart={addToCart}
                                            />
                                        )
                                    )
                                ) : (
                                    <ProductSkeleton />
                                )}
                            </Grid>
                        </Grid>
                    </GridItem>
                    {modal && (
                        <Modal setOpen={setModal}>
                            <Invoice cart={cart} />
                        </Modal>
                    )}
                </Grid>
            </Container>
        </>
    );
};
