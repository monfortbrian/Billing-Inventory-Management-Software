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

export const ProductHeader = ({ onOpen }) => {
    return (
        <Box bg="white" mb={5} px={5}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing="10"
                w="full"
                py={6}
            >
                <VStack align="flex-start">
                    <Heading size="lg">Product</Heading>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">
                                Product manager
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="/product">
                                Product
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </VStack>
                <HStack
                    w="full"
                    justify={{ base: "space-between", lg: "flex-end" }}
                >
                    <Button
                        colorScheme="green"
                        w={{ base: "full", lg: "auto" }}
                    >
                        <HStack spacing={2}>
                            <FaUpload />
                            <Text>Import products</Text>
                        </HStack>
                    </Button>
                    <Button
                        colorScheme="green"
                        onClick={onOpen}
                        w={{ base: "full", lg: "auto" }}
                    >
                        <HStack spacing={2}>
                            <FaPlus />
                            <Text>Add product</Text>
                        </HStack>
                    </Button>
                </HStack>
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
                    <Input type="text" placeholder="Search" />
                    <InputRightElement
                        children={
                            <Button p={0}>
                                <FaSearch color="#333" />
                            </Button>
                        }
                    />
                </InputGroup>
                <Select placeholder="Select Brand...">
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
