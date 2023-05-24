import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { amountData } from "../../data/amounts";
import { AmountCard } from "./AmountCard";

export const AmountsView = () => {
    return (
        <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={4}
            px={5}
            py={5}
        >
            {amountData.map(x => (
                <AmountCard
                    amount={x.amount}
                    desciption={x.descrption}
                    icon={x.icon}
                />
            ))}
        </SimpleGrid>
    );
};
