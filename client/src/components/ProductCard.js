import React from "react";
import useAudio from "../hooks/useAudio";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

export const ProductCard = ({ product, addToCart }) => {
    const { name, image, price } = product;
    const toogle = useAudio();

    const handleClick = () => {
        toogle();
        addToCart(product);
    };

    return (
        <VStack
            maxH="280px"
            bg="white"
            borderRadius={6}
            gap={5}
            cursor="pointer"
            py={5}
            px={3}
            onClick={handleClick}
        >
            <Image
                src={image}
                height="160px"
                objectFit="cover"
                borderRadius={3}
            />
            <VStack spacing={2} align="flex-start" w="full">
                <Text size="sm">{name}</Text>
                <Heading color="green.500" size="md">
                    {price} BIF
                </Heading>
            </VStack>
        </VStack>
    );
};
