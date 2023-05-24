import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Badge,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Box,
} from "@chakra-ui/react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

export const AllSalesTable = () => {
    return (
        <TableContainer w="full">
            <Table variant="simple" w="full" size="sm">
                <Thead>
                    <Tr>
                        <Th py={4}>INVOICE NUMBER</Th>
                        <Th py={4}>SALES DATE</Th>
                        <Th py={4}>CUSTOMER</Th>
                        <Th py={4}>SALES STATUS</Th>
                        <Th py={4}>PAID AMOUNT</Th>
                        <Th py={4}>TOTAL AMOUNT</Th>
                        <Th py={4}>PAYMENT STATUS</Th>
                        <Th py={4}>ACTION</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Sale-1</Td>
                        <Td>30-8-2022</Td>
                        <Td>User 1</Td>
                        <Td>
                            <Badge colorScheme="red">Pending</Badge>
                        </Td>

                        <Td>25.400 BIF</Td>
                        <Td>30.400 BIF</Td>
                        <Td>
                            <Badge colorScheme="green">Paid</Badge>
                        </Td>
                        <Td>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HiDotsVertical />}
                                    variant="outline"
                                    size="sm"
                                />
                                <MenuList>
                                    <MenuItem icon={<FaEye />}>View</MenuItem>
                                    <MenuItem icon={<FaEdit />}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrashAlt />}>
                                        Remove
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Sale-1</Td>
                        <Td>30-8-2022</Td>
                        <Td>User 1</Td>
                        <Td>
                            <Badge colorScheme="red">Pending</Badge>
                        </Td>

                        <Td>25.400 BIF</Td>
                        <Td>30.400 BIF</Td>
                        <Td>
                            <Badge colorScheme="green">Paid</Badge>
                        </Td>
                        <Td>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HiDotsVertical />}
                                    variant="outline"
                                    size="sm"
                                />
                                <MenuList>
                                    <MenuItem icon={<FaEye />}>View</MenuItem>
                                    <MenuItem icon={<FaEdit />}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrashAlt />}>
                                        Remove
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Sale-1</Td>
                        <Td>30-8-2022</Td>
                        <Td>User 1</Td>
                        <Td>
                            <Badge colorScheme="red">Pending</Badge>
                        </Td>

                        <Td>25.400 BIF</Td>
                        <Td>30.400 BIF</Td>
                        <Td>
                            <Badge colorScheme="green">Paid</Badge>
                        </Td>
                        <Td>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HiDotsVertical />}
                                    variant="outline"
                                    size="sm"
                                />
                                <MenuList>
                                    <MenuItem icon={<FaEye />}>View</MenuItem>
                                    <MenuItem icon={<FaEdit />}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrashAlt />}>
                                        Remove
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Sale-1</Td>
                        <Td>30-8-2022</Td>
                        <Td>User 1</Td>
                        <Td>
                            <Badge colorScheme="red">Pending</Badge>
                        </Td>

                        <Td>25.400 BIF</Td>
                        <Td>30.400 BIF</Td>
                        <Td>
                            <Badge colorScheme="green">Paid</Badge>
                        </Td>
                        <Td>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HiDotsVertical />}
                                    variant="outline"
                                    size="sm"
                                />
                                <MenuList>
                                    <MenuItem icon={<FaEye />}>View</MenuItem>
                                    <MenuItem icon={<FaEdit />}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrashAlt />}>
                                        Remove
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Sale-1</Td>
                        <Td>30-8-2022</Td>
                        <Td>User 1</Td>
                        <Td>
                            <Badge colorScheme="red">Pending</Badge>
                        </Td>

                        <Td>25.400 BIF</Td>
                        <Td>30.400 BIF</Td>
                        <Td>
                            <Badge colorScheme="green">Paid</Badge>
                        </Td>
                        <Td>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HiDotsVertical />}
                                    variant="outline"
                                    size="sm"
                                />
                                <MenuList>
                                    <MenuItem icon={<FaEye />}>View</MenuItem>
                                    <MenuItem icon={<FaEdit />}>Edit</MenuItem>
                                    <MenuItem icon={<FaTrashAlt />}>
                                        Remove
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};
