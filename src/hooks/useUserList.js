import { useEffect, useState } from 'react'
import {getUsersList} from '../services/usersListService'

export const useUsersList = () => {
    const [usersList, setUsers] = useState([])
    const [loadingU, setLoadingU] = useState(false)

    const listUsers = () => {
        setLoadingU(true);
        setTimeout(async () => {
            const response = await getUsersList();
            setUsers(response.data);
            setLoadingU(false);
        }, 500);
    }
    useEffect(() => {
        listUsers();
    }, []);

    return {
        loadingU,
        usersList,
    }
}