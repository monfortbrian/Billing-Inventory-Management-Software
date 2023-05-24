import { Box, Divider, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import PieChart from "../../charts/PieChart";

export const TopSellingStat = () => {
    return (
        <GridItem bg="white" borderRadius={10}>
            <Heading size="sm" p={4}>
                Top selling product
            </Heading>
            <Divider />
            <Box p={4}>
                <PieChart />
            </Box>
        </GridItem>
    );
};
