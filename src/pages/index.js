import React from 'react';
import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero';
import SearchResults from '../components/SearchResults';



const Index = (props) => {

    return (
        <Box w="100%">
            <Hero />
            <SearchResults />
        </Box>
    );
}

export default Index;
