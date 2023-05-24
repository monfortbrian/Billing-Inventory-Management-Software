import React from "react";
import styled from "@emotion/styled";

export const CategorySkeleton = () => {
    return (
        <>
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
    width: 120px;
    height: 100px;
    margin-right: 10px;
    border-radius: 8px;
    display: inline-grid;
    animation: 1s linear infinite alternate animate;
    background: #c9c9c9;
`;
