import React from "react";
import styled from "@emotion/styled";

export const ProductSkeleton = () => {
    return (
        <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    );
};

const Card = styled.div`
    @keyframes animate {
        from {
            opacity: 0.1;
        }
        ,
        to {
            opacity: 0.3;
        }
    }
    opacity: 0.5;
    width: 150px;
    height: 240px;
    background: #fff;
    border-radius: 12px;
    animation: 1s linear infinite alternate animate;
    background: #c9c9c9;
`;
