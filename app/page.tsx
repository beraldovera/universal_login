import Image from 'next/image'
'use client';
import React from 'react';
import styles from './Page.module.scss';
import Login from './Login';
// import Logo from '@/components/Logo';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-white'>
          <div id={styles.stars1}></div>
          <div id={styles.stars2}></div>
          <div id={styles.stars3}></div>
          <br />
          <div id={styles.stars1}></div>
          <div id={styles.stars2}></div>
          <div id={styles.stars3}></div>

          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-24 h-24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>

            <h1 className='mt-4'></h1>
            <p className='mt-2 text-base font-semibold text-gray-800'>
              ONE COMPANY.{' '}
              <span className='font-bold text-blue-800'> ONE TEAM. </span>
            </p>
            <Login />
          </div>
        </section>
      </main>
    </>
  )
}
