import React from "react";
import styled from "@emotion/styled";
import { CloseIcon } from "../assets";

export const Modal = ({ children, setOpen }) => {
    return (
        <ModalWrapper>
            <ModalContent>
                <CloseBtn onClick={() => setOpen(false)}>
                    <CloseIcon />
                </CloseBtn>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
    background: rgba(0, 0, 0, 0.7);
    max-height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    place-items: center;
    overflow-y: scroll;
    padding: 40px 0;
`;

const ModalContent = styled.div`
    max-width: 440px;
    margin: auto;
    background: #fff;
    padding: 60px 0px 20px;
    position: relative;
    border-radius: 8px;
`;

const CloseBtn = styled.button`
    background: #f1f1f1;
    border-radius: 30px;
    padding: 6px;
    cursor: pointer;
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;
    display: grid;
    place-items: center;
`;
