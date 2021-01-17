import React from 'react'
import styles from './styles.module.css'
import { DatePicker, Tooltip } from 'antd'

export const AntdDatePicker = ({ text }) => {
  return (
    <div className={styles.test}>
      <DatePicker />
      <Tooltip title='prompt text'>
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>
      Example Component: {text}
    </div>
  )
}
