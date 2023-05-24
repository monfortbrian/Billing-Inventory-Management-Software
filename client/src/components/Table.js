import React from "react";
import styled from "@emotion/styled";
import { CartItem } from "./CartItem";
import { EmptyRow } from "./EmptyRow";

export const Table = ({ cart, remove }) => {
    return (
        <MainTable>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
            </tr>{" "}
            <tbody>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <CartItem item={item} index={index} remove={remove} />
                    ))
                ) : (
                    <EmptyRow />
                )}
            </tbody>
        </MainTable>
    );
};

const MainTable = styled.table`
    border: none;
    width: 100%;

    tbody {
        tr {
            border-bottom: 1px dotted #f1f1f1;
        }
    }

    th,
    td {
        max-width: 110px;
        text-align: left;
        padding: 8px;
        font-size: 14px;

        code {
            background: #f1f1f1;
            font-size: 0.7em;
            padding: 2px;
        }

        input {
            max-width: 50%;
            padding: 3px;
        }
    }
`;
