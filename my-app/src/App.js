import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Textarea, Container, Flex, Button, Box, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
       <Content />
    </ChakraProvider>
  );
}

export default App;


function Content() {
  const [bericht, setBericht] = React.useState('')
  const handleSetBericht = (event) => {
    // console.log(event.target.value)
    setBericht(event.target.value)
  }
  const [naam, setNaam] = React.useState('TestMan')
  const handleSetNaam = (event) => {
    // console.log(event.target.value)
    setNaam(event.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          HiddeChat
        </h1>
        <Input maxW='200px' placeholder='Naam' value={naam} onChange={handleSetNaam} />
        <Box  maxW='container.sm' minW='container.sm' my='50px' border='1px' borderRadius='md'>
          
        <Table variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Van</Th>
              <Th>Bericht</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetresffffffffffffffffffffffffffffffffffff (mm)</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
            </Tr>
          </Tbody>
        </Table>
        </Box>
        <Container maxW='container.sm'>
          <Flex>
            <Textarea 
              placeholder='Type iets'
              value={bericht}
              onChange={handleSetBericht}
            />
            <Button>
              Verstuur
            </Button>
          </Flex>
        </Container>
      </header>
    </div>
  )
}