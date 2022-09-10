import Head from 'next/head';
import React from 'react'
import Navbar from './Navbar'

export interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        <Head>
          <title>Trending Collections</title>
          <meta name="description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {children}
        <footer className="text-center border-gray-500 border-t-2 m-10 p-2">2022</footer>
    </div>
  )
}

export default Layout
