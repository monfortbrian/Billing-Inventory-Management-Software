import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <Flex w="100%">
            <Sidebar />
            {children}
        </Flex>
    );
};

export default Layout;
