import React from "react";
import styled from "@emotion/styled";

export const Header = () => {
    return (
        <HeaderWrapper>
            <h3>POS</h3>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px 18px;
    width: 100%;
    background: #fff;
`;
