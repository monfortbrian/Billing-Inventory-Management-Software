import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export const CategoryCard = ({ item, setFilter, filter }) => {
    const { image, name, id } = item;
    let isActive = filter === id;
    const handleClick = () => {
        setFilter(() => id);
    };

    return (
        <Box
            display="inline-grid"
            gap={3}
            p={3}
            bg={isActive ? "green.500" : "white"}
            color={isActive ? "white" : "blackAlpha.900"}
            borderRadius={6}
            placeItems="center"
            mr={4}
            minW="100px"
            cursor="pointer"
            transition="all 300ms ease"
            onClick={handleClick}
        >
            <Image src={image} w="40px" />
            <Text fontSize="sm">{name}</Text>
        </Box>
    );
};
