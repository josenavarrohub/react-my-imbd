import React from 'react'
import ReactDOM from 'react-dom/client'
import MyImdb from './components/MyImdb'
import './index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <MyImdb />
  </React.StrictMode>
)
