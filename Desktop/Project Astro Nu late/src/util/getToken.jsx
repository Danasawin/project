// Navauth.jsx
import { useEffect, useState } from 'react';
import Nav from "../components/Nav.jsx";
import Nav2 from "../components/Nav2.jsx";

export default function Navauth() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log('Navauth component mounted');
    try {
      const accessToken = localStorage.getItem('accessToken');
      console.log('Retrieved token from localStorage:', accessToken);
      if (accessToken) {
        setToken(accessToken);
        console.log('Token set in state:', accessToken);
      } else {
        console.log('Token not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving token from localStorage:', error);
    }
  }, []);

  return (
    <div>
      {token ? (
        <div><Nav2 /></div>
      ) : (
        <div><Nav/></div>
      )}
    </div>
  );
}
