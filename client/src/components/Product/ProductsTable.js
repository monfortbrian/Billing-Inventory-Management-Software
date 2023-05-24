import {
    HStack,
    IconButton,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

export const ProductsTable = ({
    data,
    onDeleteOpen,
    onUpdateOpen,
    onViewOpen,
}) => {
    return (
        <TableContainer bg="white" borderRadius={6} mx={5}>
            <Table size="sm" w="100%">
                <Thead>
                    <Tr>
                        <Th fontSize="sm" py={5}>
                            IMAGE
                        </Th>
                        <Th fontSize="sm" py={5}>
                            PRODUCT
                        </Th>
                        <Th fontSize="sm" py={5}>
                            CATEGORY
                        </Th>

                        <Th fontSize="sm" py={5} isNumeric>
                            PRICE
                        </Th>
                        <Th fontSize="sm" py={5}>
                            BARCODE
                        </Th>
                        <Th fontSize="sm" py={5} textAlign="center">
                            ACTION
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data && data.length
                        ? data.map((prod, index) => (
                              <Tr key={index}>
                                  <Td>
                                      <Image
                                          w="40px"
                                          h="40px"
                                          objectFit="cover"
                                          src={prod.image}
                                      />
                                  </Td>
                                  <Td>{prod.name}</Td>
                                  <Td>{prod.category}</Td>
                                  <Td isNumeric>{prod.price} BIF</Td>
                                  <Td>{prod.barCode}</Td>
                                  <Td textAlign="center">
                                      <Menu>
                                          <MenuButton
                                              as={IconButton}
                                              aria-label="Options"
                                              icon={<HiDotsVertical />}
                                              variant="outline"
                                              size="sm"
                                          />
                                          <MenuList>
                                              <MenuItem
                                                  icon={<FaEye />}
                                                  onClick={onViewOpen}
                                              >
                                                  View
                                              </MenuItem>
                                              <MenuItem
                                                  icon={<FaEdit />}
                                                  onClick={onUpdateOpen}
                                              >
                                                  Edit
                                              </MenuItem>
                                              <MenuItem
                                                  icon={<FaTrashAlt />}
                                                  onClick={onDeleteOpen}
                                              >
                                                  Remove
                                              </MenuItem>
                                          </MenuList>
                                      </Menu>
                                  </Td>
                              </Tr>
                          ))
                        : null}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
