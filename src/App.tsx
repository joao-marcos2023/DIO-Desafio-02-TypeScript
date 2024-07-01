import React from 'react';
import { Layout } from './components/Layout';
import { Box } from '@chakra-ui/react';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">

      <Layout>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Card/>
        </Box>
      </Layout>

    </div>
  );
}

export default App;
