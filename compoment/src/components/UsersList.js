import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';  

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);     
  const fetchUsers = async () => {
    setLoading(true);  
    setError(null);  
    try {
      const snapshot = await db.collection('users').get();
      const usersList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);  
    } catch (error) {
      console.error("Error fetching users: ", error);
      setError("Failed to fetch users. Please try again.");  
    } finally {
      setLoading(false); 
    }
  };
  const deleteUser = async (id) => {
    setLoading(true); 
    try {
      await db.collection('users').doc(id).delete();
      alert("User deleted successfully");
      fetchUsers(); 
    } catch (error) {
      console.error("Error deleting user: ", error);
      alert("Failed to delete user. Please try again.");
    } finally {
      setLoading(false); 
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>{error}</p>;    

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.age}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
