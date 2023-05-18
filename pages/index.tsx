import type { NextPage } from 'next'
import {useTypeSelector} from "../hooks/useSelector";
import {Loader} from "../components/Spinner";
import {useState} from "react";
import {IUser} from "../models/IUser";
import {Box, Button, ListItem, OrderedList} from "@chakra-ui/react";
import {useActions} from "../hooks/actionCreator";
import UserService from "../services/UserService";

const Home: NextPage = () => {
  const {isLoading} = useTypeSelector(store => store.auth)
  const [users, setUser] = useState<IUser[]>({} as IUser[])


  const fetchUserHandler = async () => {
      await UserService.fetchUsers().then((res) => setUser(res.data))
  }

  if(isLoading){
    return <Loader/>
  }

  return (
    <Box width="100vw" height="100vh">
      <Button onClick={() => fetchUserHandler()}>Fetch Users</Button>
        {users.length && (
            <OrderedList>
                {users.map((user) => (
                    <ListItem key={user.email}>{user.email}</ListItem>
                ))}
            </OrderedList>
        )}
    </Box>
  )
}

export default Home
