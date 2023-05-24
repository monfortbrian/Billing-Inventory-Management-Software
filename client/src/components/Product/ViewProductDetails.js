import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Text,
} from "@chakra-ui/react";
import React from "react";

export const ViewProductDetails = ({ isViewOpen, onViewClose }) => {
    return (
        <Drawer
            isOpen={isViewOpen}
            placement="right"
            size="md"
            onClose={onViewClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>View product</DrawerHeader>

                <DrawerBody>
                    <Text>Product details here...</Text>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onViewClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="green">Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
