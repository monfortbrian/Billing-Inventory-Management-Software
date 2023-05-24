import React from "react";
import {
    SimpleGrid,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from "@chakra-ui/react";

export const CreateProductForm = ({ formik }) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} columnGap={4} rowGap={1}>
                <FormControl
                    isInvalid={!!formik.touched.name && !!formik.errors.name}
                >
                    <FormLabel>Product name</FormLabel>
                    <Input type="text" {...formik.getFieldProps("name")} />
                    <FormErrorMessage m={0} fontSize="xs">
                        {formik.errors.name}
                    </FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={
                        !!formik.touched.description &&
                        !!formik.errors.description
                    }
                >
                    <FormLabel>Description</FormLabel>
                    <Input
                        type="text"
                        {...formik.getFieldProps("description")}
                    />
                    <FormErrorMessage m={0} fontSize="xs">
                        {formik.errors.description}
                    </FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={
                        !!formik.touched.categoryId &&
                        !!formik.errors.categoryId
                    }
                >
                    <FormLabel>Category</FormLabel>
                    <Input
                        type="text"
                        {...formik.getFieldProps("categoryId")}
                    />
                    <FormErrorMessage m={0} fontSize="xs">
                        {formik.errors.categoryId}
                    </FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={!!formik.touched.price && !!formik.errors.price}
                >
                    <FormLabel>Price</FormLabel>
                    <Input type="text" {...formik.getFieldProps("price")} />
                    <FormErrorMessage m={0} fontSize="xs">
                        {formik.errors.price}
                    </FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={!!formik.touched.qty && !!formik.errors.qty}
                >
                    <FormLabel>Quantity</FormLabel>
                    <Input type="text" {...formik.getFieldProps("qty")} />
                    <FormErrorMessage m={0} fontSize="xs">
                        {formik.errors.qty}
                    </FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={
                        !!formik.touched.unityMesureId &&
                        !!formik.errors.unityMesureId
                    }
                >
                    <FormLabel>UOM</FormLabel>
                    <Input
                        type="text"
                        {...formik.getFieldProps("unityMesureId")}
                    />
                    <FormErrorMessage m={0} fontSize="xs">
                        {formik.errors.unityMesureId}
                    </FormErrorMessage>
                </FormControl>
            </SimpleGrid>
        </form>
    );
};
