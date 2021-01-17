import React from 'react'
import styles from './styles.module.css'
import Button from 'react-bootstrap/Button'

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.test}>
      Example Component: {text}
      <Button variant='primary'>Primary</Button>{' '}
      <Button variant='secondary'>Secondary</Button>{' '}
      <Button variant='success'>Success</Button>{' '}
      <Button variant='warning'>Warning</Button>{' '}
      <Button variant='danger'>Danger</Button>{' '}
      <Button variant='info'>Info</Button>{' '}
      <Button variant='light'>Light</Button>{' '}
      <Button variant='dark'>Dark</Button> <Button variant='link'>Link</Button>
    </div>
  )
}
