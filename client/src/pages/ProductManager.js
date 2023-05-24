import { Container, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import {
    CreateProduct,
    fetchProducts,
    ProductHeader,
    ProductsPagination,
    ProductsTable,
    RemoveProduct,
    UpdateProduct,
    ViewProductDetails,
} from "../components/Product";

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isViewOpen,
        onOpen: onViewOpen,
        onClose: onViewClose,
    } = useDisclosure();
    const {
        isOpen: isUpdateOpen,
        onOpen: onUpdateOpen,
        onClose: onUpdateClose,
    } = useDisclosure();
    const {
        isOpen: isDeleteOpen,
        onOpen: onDeleteOpen,
        onClose: onDeleteClose,
    } = useDisclosure();

    useEffect(() => {
        fetchProducts(setProducts);
    }, []);

    return (
        <Layout>
            <Container maxW="full" p={0} pb={10} bg="gray.100">
                <ProductHeader onOpen={onOpen} />
                <ProductsTable
                    data={products}
                    onDeleteOpen={onDeleteOpen}
                    onUpdateOpen={onUpdateOpen}
                    onViewOpen={onViewOpen}
                />
                <ProductsPagination />
                <CreateProduct isOpen={isOpen} onClose={onClose} />
                <ViewProductDetails
                    isViewOpen={isViewOpen}
                    onViewClose={onViewClose}
                />
                <UpdateProduct
                    isUpdateOpen={isUpdateOpen}
                    onUpdateClose={onUpdateClose}
                />

                <RemoveProduct
                    isDeleteOpen={isDeleteOpen}
                    onDeleteClose={onDeleteClose}
                />
            </Container>
        </Layout>
    );
};

export default ProductManager;
