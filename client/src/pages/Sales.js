import { Container } from "@chakra-ui/react";
import React from "react";
import { SalesHeader, SalesTabs } from "../components/Sales";
import Layout from "../layouts/Layout";

const Sales = () => {
    return (
        <Layout>
            <Container maxW="full" p={0} pb={10} bg="gray.100">
                <SalesHeader />
                <SalesTabs />
            </Container>
        </Layout>
    );
};

export default Sales;
