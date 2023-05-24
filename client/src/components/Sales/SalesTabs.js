import React from "react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    SimpleGrid,
    Flex,
} from "@chakra-ui/react";
import { AllSalesTable } from "./AllSalesTable";

export const SalesTabs = () => {
    return (
        <Flex mx="20px" bg="white" borderRadius={6}>
            <Tabs colorScheme="green" py={4} w="full">
                <TabList>
                    <Tab>All sales</Tab>
                    <Tab>Unpaid</Tab>
                    <Tab>paid</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel py={5} px={0}>
                        <AllSalesTable />
                    </TabPanel>
                    <TabPanel px={0}>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel px={0}>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
};
