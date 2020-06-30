import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import { Footer } from './Footer';


export const Layout = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <>
    <Header />
    <ToastContainer />
    <div className="max-w-screen-xl m-auto">
      {children}
    </div>
  </>
)

