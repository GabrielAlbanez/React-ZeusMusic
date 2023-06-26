import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion';
import Main from '../components/Main';
import { RenderContextProvider } from '../context/Render';

export default function Abertura() {
  return (
    <>
    <RenderContextProvider>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}>
        <Header />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }}>
        <Main/>
      </motion.div>
    </RenderContextProvider>
  </>
  )
}






