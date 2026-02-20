import React from 'react'
import styles from '../styles/Pagination.module.scss'
import { PaginationProps } from '../types'


const Pagination = ({totalPage, setCurrentPage, currentPage} : PaginationProps) => {
  return (
    <div className={styles.paginationContainer}>
        <button className={styles.btn} disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
        {Array.from({length: totalPage}).map((_, i) => {
            return (
                <button className={`${styles.btn} ${currentPage === (i + 1) ? styles.active : ''} `}  onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
            )
        })}
        <button className={styles.btn} disabled={currentPage === totalPage}  onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
    </div>
  )
}

export default Pagination