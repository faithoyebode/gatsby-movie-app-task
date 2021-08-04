import React from 'react';
import { Box } from '@chakra-ui/react'
import Layout from '../layouts';
import Hero from '../components/Hero';


const Index = (props) => {

    return (
        <Box w="100%">
            <Layout>
                <Hero />
            </Layout>
        </Box>
    );
}

export default Index;
