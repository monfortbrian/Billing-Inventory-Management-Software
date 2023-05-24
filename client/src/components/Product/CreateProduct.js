import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Divider,
} from "@chakra-ui/react";
import { CreateProductForm } from "../../forms/Product";
import { CreateProductFormValidator } from "../../forms/Product/CreateProductFormValidator";

export const CreateProduct = ({ onClose, isOpen }) => {
    const formik = CreateProductFormValidator();
    const handleClose = () => {
        formik.handleReset();
        onClose();
    };
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            size="lg"
            onClose={handleClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontWeight="bold">Create product</DrawerHeader>
                <Divider />
                <DrawerBody pt={10}>
                    <CreateProductForm formik={formik} />
                </DrawerBody>
                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="green" onClick={formik.handleSubmit}>
                        Save
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
