import { Button } from "@chakra-ui/react";
import React from "react";
import { TrashIcon } from "../assets";

export const CartItem = ({ item, index, remove }) => {
    const { name, quantity, quant, totalAmount } = item;
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                {name}
                <br />
                <code>Avl. qty: {quantity}pc</code>
            </td>
            <td>
                <input type="number" value={quant} />
            </td>
            <td>{totalAmount}BIF</td>
            <td>
                <Button
                    p={0}
                    size="sm"
                    colorScheme="green"
                    onClick={() => remove(item)}
                >
                    <TrashIcon />
                </Button>
            </td>
        </tr>
    );
};
