import React from 'react';
import ContactForm from './form';

const ContactSection: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-8 px-4'>
      <h1 className='text-secondary text-4.5xl mb-6'>CONTATO</h1>
      <div className='flex flex-col justify-center items-center text-center space-y-2 mb-6'>
        <p className='text-lg font-light'>Email: info@hoopbank.com</p>
        <p className='text-lg font-light'>Tel: (11) 3456-7890</p>
      </div>
      <p className='text-2xl font-light text-center max-w-3xl mb-2'>
        Indique aqui a loja ou estabelecimento que você gostaria de comprar
        usando o Hoop
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
