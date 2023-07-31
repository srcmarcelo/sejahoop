import React from 'react';

const DetailsSection: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center py-14'>
      <h1>CONTATO</h1>
      <div>
        <p>Email: info@hoopbank.com</p>
        <p>Tel: (11) 3456-7890</p>
      </div>
      <p>
        Indique aqui a loja ou estabelecimento que você gostaria de comprar
        usando o Hoop
      </p>
      <div>FORMULÁRIO</div>
      <button className='bg-secondary hover:bg-white text-white hover:text-secondary font-semibold py-2 px-4 border-secondary hover:border-secondary'>
        Enviar
      </button>
    </div>
  );
};

export default DetailsSection;
