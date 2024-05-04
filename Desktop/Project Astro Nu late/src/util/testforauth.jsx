import { useEffect } from 'react';

export function Testforauth(){

  useEffect(() => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      
      if (!accessToken || !refreshToken) {
        window.location.href ="/login"; 
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, []); 
};
