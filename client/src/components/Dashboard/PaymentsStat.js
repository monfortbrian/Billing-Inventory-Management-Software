import { Box, Divider, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import LineChart from "../../charts/LineChart";

export const PaymentsStat = () => {
    return (
        <GridItem colSpan={{ base: 1, lg: 4 }} bg="white" borderRadius={10}>
            <Heading size="sm" p={4}>
                Payments
            </Heading>
            <Divider />
            <Box p={3}>
                <LineChart />
            </Box>
        </GridItem>
    );
};
