import React from 'react';
import BookList from './components/BookList'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'
import './App.css';


//Applo client Setup 
const client=new ApolloClient({
  uri:"http://localhost:4000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>

    <div className="App">
      <BookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
