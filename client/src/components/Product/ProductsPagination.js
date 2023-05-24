import { Button, HStack, Select } from "@chakra-ui/react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ProductsPagination = () => {
    return (
        <HStack ml="auto" spacing={4} justify="flex-end" py={4} px={5}>
            <HStack spacing={2}>
                <Button p={0} size="sm">
                    <FaChevronLeft />
                </Button>
                <Button p={0} colorScheme="green" size="sm">
                    1
                </Button>
                <Button p={0} size="sm">
                    2
                </Button>
                <Button p={0} size="sm">
                    3
                </Button>
                <Button p={0} size="sm">
                    <FaChevronRight />
                </Button>
            </HStack>
            <Select maxW="32">
                <option value="option1">10/page</option>
                <option value="option2">20/page</option>
                <option value="option3">30/page</option>
            </Select>
        </HStack>
    );
};
