import { useState } from 'react';
import { db } from './firebaseConfig';

const UpdateUser = ({ user, onUserUpdated }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  const handleUpdate = async () => {
    try {
      await db.collection('users').doc(user.id).update({ name, age });
      alert('User updated successfully');
      onUserUpdated();
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateUser;
