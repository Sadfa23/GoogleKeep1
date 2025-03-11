import React, { useEffect ,useState} from 'react'
import axios from 'axios';

function ApiTest() {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('http://127.0.0.1:5000/api/users')
        console.log(response.data.users)
        setUsers(response.data.users)
    }

    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <div>{users.map((user,index)=><p key={index}>{user}</p>)}</div>
  )
}

export default ApiTest
/*
<NoteInputButton 
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z" />
            </svg>
          } 
        />
        <NoteInputButton 
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
            </svg>
          } 
        />*/