import { Box, Divider, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import ColumnChart from "../../charts/ColumnChart";

export const SalesPurchasesStat = () => {
    return (
        <GridItem colSpan={{ base: 1, lg: 3 }} bg="white" borderRadius={10}>
            <Heading size="sm" p={4}>
                {"Sales & Purchases"}
            </Heading>
            <Divider />
            <Box p={3}>
                <ColumnChart />
            </Box>
        </GridItem>
    );
};
