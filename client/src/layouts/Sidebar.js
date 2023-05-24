import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import {
    HiDesktopComputer,
    HiHome,
    HiMenuAlt1,
    HiViewGrid,
    HiShoppingCart,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [expand, setExpand] = useState(true);

    return (
        <Flex
            h="100vh"
            pos="sticky"
            top={0}
            px="12px"
            pt={8}
            borderRight="1px solid"
            borderColor="gray.200"
            transition="300ms all ease"
            flexDir="column"
            w={expand ? "160px" : "60px"}
            display={{ base: "none", lg: "flex" }}
            gap={10}
        >
            <IconButton
                size="sm"
                w="fit-content"
                ml="1"
                icon={<HiMenuAlt1 size={22} />}
                onClick={() => setExpand(x => !x)}
            />
            <VStack align="flex-start" w={expand ? "160px" : "60px"}>
                <Link to="/">
                    <HStack
                        p="8px"
                        h="fit-content"
                        spacing={2}
                        borderRadius={6}
                    >
                        <HiHome size={24} />
                        <Text
                            visibility={expand ? "visible" : "hidden"}
                            opacity={expand ? "1" : "0"}
                            transition="300ms all ease"
                        >
                            Dashboard
                        </Text>
                    </HStack>
                </Link>
                <Link to="/product">
                    <HStack
                        px={2}
                        py={2}
                        h="fit-content"
                        spacing={2}
                        borderRadius={6}
                    >
                        <HiViewGrid size={24} />
                        <Text
                            visibility={expand ? "visible" : "hidden"}
                            opacity={expand ? "1" : "0"}
                            transition="300ms all ease"
                        >
                            Product
                        </Text>
                    </HStack>
                </Link>
                <Link to="/pos">
                    <HStack
                        px={2}
                        py={2}
                        h="fit-content"
                        spacing={2}
                        borderRadius={6}
                    >
                        <HiDesktopComputer size={24} />
                        <Text
                            visibility={expand ? "visible" : "hidden"}
                            opacity={expand ? "1" : "0"}
                            transition="300ms all ease"
                        >
                            POS
                        </Text>
                    </HStack>
                </Link>
                <Link to="/sales">
                    <HStack
                        px={2}
                        py={2}
                        h="fit-content"
                        spacing={2}
                        borderRadius={6}
                    >
                        <HiShoppingCart size={24} />
                        <Text
                            visibility={expand ? "visible" : "hidden"}
                            opacity={expand ? "1" : "0"}
                            transition="300ms all ease"
                        >
                            Sales
                        </Text>
                    </HStack>
                </Link>
            </VStack>
        </Flex>
    );
};

export default Sidebar;
