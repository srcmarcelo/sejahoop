import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='py-24 px-16'>
      <div className='bg-footer p-28 flex flex-col justify-center text-center'>
        <h3 className='text-5xl font-light mb-4'>JUNTE-SE À LISTA DE EMAILS</h3>
        <div className='w-3/4 mx-auto p-8 bg-white'>
          <div className='flex flex-col text-left space-y-4'>
            <p>Insira seu email aqui *</p>
            <div className='flex space-x-3'>
              <input
                type='email'
                id='emailInput'
                placeholder='Digite seu email'
                className='border border-black w-full px-4 py-2 focus:outline-none focus:border-#49F1C9'
              />
              <button
                type='button'
                className='bg-zinc-700 w-48 text-white py-2 px-4'
              >
                Assinar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-around py-4'>
        <div>
          <p>© 2023 HoopBank</p>
        </div>
        <div className='space-x-4'>
          <a href=''>Política de privacidade</a>
          <a href=''>Política de cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
