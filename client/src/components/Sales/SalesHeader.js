import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Divider,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    SimpleGrid,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus, FaSearch, FaUpload } from "react-icons/fa";

export const SalesHeader = ({ onOpen }) => {
    return (
        <Box bg="white" mb={5} px={5}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing="10"
                w="full"
                py={6}
                alignItems="center"
            >
                <VStack align="flex-start">
                    <Heading size="lg">Sales</Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink isCurrentPage>Sales</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </VStack>

                <Button
                    colorScheme="green"
                    onClick={onOpen}
                    w={{ base: "full", lg: "fit-content" }}
                    justifySelf="end"
                >
                    <HStack spacing={2}>
                        <FaPlus />
                        <Text>Add new sale</Text>
                    </HStack>
                </Button>
            </SimpleGrid>
            <Divider />
            <Stack
                direction={{ base: "column", lg: "row" }}
                justify="flex-start"
                maxW={{ lg: "container.sm" }}
                spacing={3}
                py={4}
            >
                <InputGroup>
                    <Input type="text" placeholder="Search by invoice" />
                    <InputRightElement
                        children={
                            <Button p={0}>
                                <FaSearch color="#333" />
                            </Button>
                        }
                    />
                </InputGroup>
                <Select placeholder="Select Customer...">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Select placeholder="Select Category...">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </Stack>
        </Box>
    );
};
