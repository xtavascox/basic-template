import { Button } from '../../components'
import { useLocalStorage } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [isLogged, setIsLogged] = useLocalStorage<boolean>({
        key: 'isLogged',
        defaultValue: false,
    })
    const navigate = useNavigate()
    const handleLogin = () => {
        setIsLogged(!isLogged)
        navigate('/')
    }
    return (
        <div>
            <Button
                text='Login'
                onClick={handleLogin}
            />
        </div>
    )
}
