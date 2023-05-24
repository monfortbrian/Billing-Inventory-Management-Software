import {
    Box,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
} from "@chakra-ui/react";
import React from "react";

export const DashoardHeader = () => {
    return (
        <Box pt={4} px={5} pb={2} bg="white" w="full">
            <Heading size="lg" py={3}>
                Dashboard
            </Heading>
            <Divider />
            <HStack spacing={4} py={6} maxW="container.sm">
                <FormControl>
                    <FormLabel>Start date</FormLabel>
                    <Input type="date" />
                </FormControl>
                <FormControl>
                    <FormLabel>End date</FormLabel>
                    <Input type="date" />
                </FormControl>
            </HStack>
        </Box>
    );
};
