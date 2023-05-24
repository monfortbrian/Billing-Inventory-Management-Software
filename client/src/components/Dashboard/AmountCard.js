import { Box, Center, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const AmountCard = ({ amount, desciption, icon }) => {
    return (
        <HStack gap={1} bg="white" borderRadius={6} p={4}>
            <Center
                w={14}
                h={14}
                p={0}
                borderRadius={6}
                bg="green.500"
                color="white"
            >
                {icon}
            </Center>
            <Box>
                <Heading size="md">{amount} BIF</Heading>
                <Text>{desciption}</Text>
            </Box>
        </HStack>
    );
};
