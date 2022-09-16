import React from 'react'
import ContactForm from '../components/Contact-components/ContactForm'
import ContactHero from '../components/Contact-components/ContactHero'
import Footer from '../components/General-components/Footer'
import Header from '../components/General-components/Header'

const Contact = () => {
  return (
    <div>
        <Header />
        <ContactHero />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact