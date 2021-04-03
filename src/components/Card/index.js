import React from 'react'
import styles from './Card.module.css'

export default function Card({ children, isFeatured }) {
  return (
    <div className={` ${styles.card} ${isFeatured && styles.featured} `}>
      { children }
    </div>
  )
}
