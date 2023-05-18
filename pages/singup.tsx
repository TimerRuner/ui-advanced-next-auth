import React, {FC} from "react";
import LoginForm from "../components/LonginForm";
import {useTypeSelector} from "../hooks/useSelector";
import {Loader} from "../components/Spinner";
import {Box} from "@chakra-ui/react";

const SingUp: FC = () => {
    const {isLoading} = useTypeSelector(store => store.auth)

    if(isLoading){
        return <Loader/>
    }
    return <LoginForm/>
}

export default SingUp