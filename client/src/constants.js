export const apiUrl = import.meta.env.DEV
? "http://localhost:8000" 
: import.meta.env.PROD 
? "https://api-fantabstic.onrender.com" 
: "https://api-fantabstic-onrender.com"
