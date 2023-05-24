import React, { useRef } from "react";
import styled from "@emotion/styled";
import { PrintIcon } from "../assets";
import { useReactToPrint } from "react-to-print";

export const Invoice = ({ cart }) => {
    const invoice = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => invoice.current,
    });

    return (
        <div>
            <InvoiceToPrint ref={invoice}>
                <InvoiceHead>
                    <h2>Lorem stock</h2>
                    <p>Bujumbura, Burundi</p>
                    <p>Email: company@example.com</p>
                </InvoiceHead>
                <MainTable>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Total</th>
                    </tr>
                    {cart.length > 0 && (
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quant}pc(s)</td>
                                    <td>{item.price}BIF</td>
                                    <td>{item.totalAmount}BIF</td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </MainTable>
            </InvoiceToPrint>
            <PrintButton onClick={handlePrint}>
                <PrintIcon />
                <span>Print Invoice</span>
            </PrintButton>
        </div>
    );
};

const MainTable = styled.table`
    border: none;
    width: 100%;
    margin-bottom: 40px;

    th {
        font-weight: 500;
        background: #f1f1f1;
    }

    th,
    td {
        max-width: 110px;
        text-align: left;
        padding: 8px;
        font-size: 10px;
        line-height: 22px;
    }

    tr {
        border-bottom: 1px dotted #f1f1f1;
    }
`;

const InvoiceHead = styled.div`
    text-align: center;
    padding: 20px 0 40px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
`;

const PrintButton = styled.button`
    padding: 10px 20px;
    background-color: #00ab33;
    color: #fff;
    border: none;
    border-radius: 3px;
    display: flex;
    place-items: center;
    gap: 10px;
    margin: auto;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

const InvoiceToPrint = styled.div`
    max-width: 400px;
    padding: 0px 10px;
`;
