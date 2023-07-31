'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  storeName: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg mx-auto mt-10'
    >
      <div className='grid grid-cols-2 gap-4'>
        <div className='w-full'>
          <label
            htmlFor='firstName'
            className='block mb-2 font-medium text-gray-700'
          >
            Nome
          </label>
          <input
            type='text'
            id='firstName'
            {...register('firstName', { required: 'First name is required' })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
          />
          {errors.firstName && (
            <span className='text-red-600'>{errors.firstName.message}</span>
          )}
        </div>
        <div className='w-full'>
          <label
            htmlFor='lastName'
            className='block mb-2 font-medium text-gray-700'
          >
            Sobrenome
          </label>
          <input
            type='text'
            id='lastName'
            {...register('lastName', { required: 'Last name is required' })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
          />
          {errors.lastName && (
            <span className='text-red-600'>{errors.lastName.message}</span>
          )}
        </div>
        <div className='w-full'>
          <label
            htmlFor='email'
            className='block mb-2 font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', { required: 'Email is required' })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
          />
          {errors.email && (
            <span className='text-red-600'>{errors.email.message}</span>
          )}
        </div>
        <div className='w-full'>
          <label
            htmlFor='phoneNumber'
            className='block mb-2 font-medium text-gray-700'
          >
            Telefone
          </label>
          <input
            type='tel'
            id='phoneNumber'
            {...register('phoneNumber', {
              required: 'Phone number is required',
            })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
          />
          {errors.phoneNumber && (
            <span className='text-red-600'>{errors.phoneNumber.message}</span>
          )}
        </div>
        <div className='col-span-2'>
          <label
            htmlFor='storeName'
            className='block mb-2 font-medium text-gray-700'
          >
            Nome do estabelecimento
          </label>
          <input
            type='text'
            id='storeName'
            {...register('storeName', { required: 'Store name is required' })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
          />
          {errors.storeName && (
            <span className='text-red-600'>{errors.storeName.message}</span>
          )}
        </div>
        <div className='col-span-2'>
          <label
            htmlFor='message'
            className='block mb-2 font-medium text-gray-700'
          >
            Menssagem
          </label>
          <textarea
            id='message'
            {...register('message', { required: 'Message is required' })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200'
            rows={5}
          />
          {errors.message && (
            <span className='text-red-600'>{errors.message.message}</span>
          )}
        </div>
        <div className='col-span-2'>
          <button
            type='submit'
            className='w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-indigo-200'
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
