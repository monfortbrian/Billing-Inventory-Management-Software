import { Container } from "@chakra-ui/react";
import React from "react";
import {
    AmountsView,
    DashoardHeader,
    StatsView,
} from "../components/Dashboard";

import Layout from "../layouts/Layout";

const Dashboard = () => {
    return (
        <Layout>
            <Container maxW="full" bg="gray.100" p={0} pb={12}>
                <DashoardHeader />
                <AmountsView />
                <StatsView />
            </Container>
        </Layout>
    );
};

export default Dashboard;
