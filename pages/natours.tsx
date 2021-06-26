import React, { useEffect } from 'react'
import styles from '@styles/pages/natours.module.scss'

interface NatoursProps {}

const Natours: React.FC = (props: NatoursProps) => {
  return (
    <div className={styles['natours__body']}>
      <header className="header">
        <img src="/img/logo-white.png" alt="Logo" className={styles['logo']} />
        <section>
          <h1 className={styles.heading}>
            <span className={styles['heading__main']}>Outdoors</span>
            <span className={styles['heading__sub']}>
              is where life happens
            </span>
            <a href="#" className={`${styles.btn} ${styles['btn-white']}`}>
              Discover our tours
            </a>
          </h1>
        </section>
      </header>
      <section className="grid">
        <div className="row">
          <div className="col-1-2">Col</div>
          <div className="col-1-2">Col</div>
        </div>
        <div className="row">
          <div className="col-1-3">Col</div>
          <div className="col-1-3">Col</div>
          <div className="col-1-3">Col</div>
        </div>
        <div className="row">
          <div className="col-1-3">Col</div>
          <div className="col-2-3">Col</div>
        </div>
        <div className="row">
          <div className="col-1-4">Col</div>
          <div className="col-1-4">Col</div>
          <div className="col-1-4">Col</div>
          <div className="col-1-4">Col</div>
        </div>
        <div className="row">
          <div className="col-1-4">Col</div>
          <div className="col-1-4">Col</div>
          <div className="col-2-4">Col</div>
        </div>
        <div className="row">
          <div className="col-3-4">Col</div>
          <div className="col-1-4">Col</div>
        </div>
        <div className="row">
          <div className="col-1-12">Col</div>
          <div className="col-1-12">Col</div>
          <div className="col-1-12">Col</div>
          <div className="col-1-12">Col</div>
          <div className="col-8-12">Col</div>
        </div>
      </section>
    </div>
  )
}

Natours.propTypes = {}

export default Natours
