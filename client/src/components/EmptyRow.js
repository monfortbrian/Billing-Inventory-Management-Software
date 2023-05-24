import React from "react";
import styled from "@emotion/styled";

export const EmptyRow = () => {
    return (
        <tr>
            <EmptyTable colSpan={5}>
                <div>
                    <img src="/images/mailbox.png" />
                    <p>No data</p>
                </div>
            </EmptyTable>
        </tr>
    );
};

const EmptyTable = styled.td`
    max-width: 100%;
    img {
        max-width: 50px;
        opacity: 0.5;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: fit-content;
        padding: 40px 0;
        gap: 10px;
    }
`;
