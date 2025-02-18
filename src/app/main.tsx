import '@mantine/core/styles.css'

import ReactDOM from 'react-dom/client'
import App from './app'
import { appStarted } from '~/shared/api/config/init'

const container = document.querySelector('#root') as HTMLElement

const root = ReactDOM.createRoot(container)

appStarted()
root.render(<App />)
