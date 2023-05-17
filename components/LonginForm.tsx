import React, {FC, useEffect, useState} from "react"
import {useTypeSelector} from "../hooks/useSelector";
import {useActions} from "../hooks/actionCreator";
import {useRouter} from "next/router";

const LoginForm: FC = () => {
  const [form, setForm] = useState({email: "", password: ""})
  const {login, registration} = useActions()
  const router = useRouter()
  const {isAuth} = useTypeSelector(store => store.auth)

  useEffect(() => {
      if(isAuth){
          router.push('/')
      }
  }, [isAuth])

    return (
        <div>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(prev => ({...prev, [e.target.name]: e.target.value}))}
                value={form.email}
                type="text"
                name="email"
                placeholder="Email"
            />
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(prev => ({...prev, [e.target.name]: e.target.value}))}
                value={form.password}
                type="password"
                name="password"
                placeholder="Password"
            />
            <button onClick={() => login(form.email, form.password)}>Login</button>
            <button onClick={() => registration(form.email, form.password)}>
                Registration
            </button>
        </div>
    )
}

export default LoginForm
