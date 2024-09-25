import { useState } from 'react';
import { db } from './firebaseConfig';

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('users').add({ name, email, age });
      alert('User added successfully');
      onUserAdded();  
      setName('');
      setEmail('');
      setAge('');
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
