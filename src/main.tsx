import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './app/router/Navigation.tsx'
import './index.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Navigation />
    </React.StrictMode>,
)
