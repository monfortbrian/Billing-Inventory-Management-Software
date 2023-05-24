import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { PaymentsStat } from "./PaymentsStat";
import { SalesPurchasesStat } from "./SalesPurchasesStat";
import { TopSellingStat } from "./TopSellingStat";

export const StatsView = () => {
    return (
        <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={4} px={5} pb={6}>
            <TopSellingStat />
            <SalesPurchasesStat />
            <PaymentsStat />
        </SimpleGrid>
    );
};
