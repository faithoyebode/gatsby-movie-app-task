import React from 'react'
import { Box } from '@chakra-ui/react'
import PageTransition from "../components/page-transition";
import TopBar from "../components/TopBar";
import './layout.css';


export default function ({ children }) {


  return (
    <>
      <Box>
          {/* layout goes here - things like headings etc */}
        <TopBar />
        <PageTransition>
          {children} 
        </PageTransition>
      </Box>
    </>
  )
}
