import React from 'react';
import AddUser from './components/AddUser'; 
import UsersList from './components/UsersList'; 


function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
    
      <UsersList />
    </div>
  );
}

export default App;
