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

export const UpdateProduct = ({ isUpdateOpen, onUpdateClose }) => {
    return (
        <Drawer
            isOpen={isUpdateOpen}
            placement="right"
            size="md"
            onClose={onUpdateClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Update product</DrawerHeader>

                <DrawerBody>
                    <Text>Update product here...</Text>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onUpdateClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="green">Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
