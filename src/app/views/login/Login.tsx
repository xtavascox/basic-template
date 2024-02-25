import { Button } from '../../components'
import { useLocalStorage } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [, setIsLogged] = useLocalStorage<boolean>({
        key: 'isLogged',
        defaultValue: false,
    })
    const navigate = useNavigate()
    const handleLogin = () => {
        setIsLogged(true)
        navigate('/')
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div
                className='w-1/4 h-1/2 rounded-lg border bg-card text-card-foreground shadow-sm'
                data-v0-t='card'
            >
                <div className='flex flex-col space-y-1.5 p-6'>
                    <h3 className='font-semibold whitespace-nowrap tracking-tight text-2xl'>
                        Login
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                        Enter your email below to login to your account.
                    </p>
                </div>
                <div className='p-6 space-y-4'>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                            Email
                        </label>
                        <input
                            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                            id='email'
                            placeholder='Email'
                            type='email'
                        />
                    </div>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                            Password
                        </label>
                        <input
                            className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                            id='password'
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                </div>
                <Button
                    text='Sign in'
                    onClick={handleLogin}
                    className='w-full rounded-t-none'
                ></Button>
            </div>
        </div>
    )
}
