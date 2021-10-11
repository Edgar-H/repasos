import React, { useState, useEffect } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Garage = () => {
  const [data, setData] = useState({}),
    [error, setError] = useState(''),
    [success, setSuccess] = useState(''),
    [inventory, setInventory] = useState();

  const handlerChange = ({ name, value }) => {
    setData({ ...data, [name]: value });
  };

  const getInventory = async () => {
    try {
      const { docs } = await getDocs(collection(db, 'inventory'));
      let newArray = docs.map((i) => ({ id: i.id, ...i.data() }));
      setInventory(newArray);
      setSuccess('');
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImg = (e) => {
    e.preventDefault();
    console.log('Hello');
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const { brand, model, version, color, year, price } = data;
    if (!brand || !model || !version || !color) {
      return setError('Capture all data');
    }

    let currentYear = new Date().getFullYear() + 1;
    if (year.length !== 4 || year < 2000 || year > currentYear) {
      return setError('Invalid year');
    }
    if (price.length <= 5) {
      return setError('Invalid Price');
    }

    try {
      const setCar = await addDoc(collection(db, 'inventory'), data);
      setSuccess(`Saved successfully ${setCar.id}`);
    } catch (err) {
      console.log(err);
    }
    setError('');
    setData('');
    getInventory();
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <>
      <h3 className='text-center text-3xl font-semibold text-gray-700 mb-4'>
        Car Inventory
      </h3>

      <form
        onSubmit={handlerSubmit}
        className='pb-8 border-b-4 border-blue-200'
      >
        <div className='form-container flex flex-wrap justify-center'>
          <div className='img-upload w-1/4 h-80'>
            <div className='rounded-md overflow-hidden mx-auto'>
              <img
                src='https://source.unsplash.com/user/erondu'
                alt=''
                className='max-h-64 mx-auto'
              />
            </div>
            <div className='fx-center'>
              <div
                onClick={uploadImg}
                className='bg-gray-500 border-none my-2 px-2 py-1 rounded text-blue-50'
              >
                Search file
              </div>
            </div>
          </div>
          <div className='w-2/4 mx-5 form-data'>
            <div className=''>
              <label htmlFor='brand'>Brand</label>
              <input
                type='text'
                name='brand'
                value={data.brand || ''}
                placeholder='Nissan'
                required
                onChange={(e) => handlerChange(e.target)}
              />
            </div>
            <div className=''>
              <label htmlFor='model'>Model</label>
              <input
                type='text'
                name='model'
                value={data.model || ''}
                placeholder='Sentra'
                required
                onChange={(e) => handlerChange(e.target)}
              />
            </div>
            <div className=''>
              <label htmlFor='version'>Version</label>
              <input
                type='text'
                name='version'
                value={data.version || ''}
                placeholder='Exclusive CVT'
                required
                onChange={(e) => handlerChange(e.target)}
              />
            </div>
            <div className=''>
              <label htmlFor='color'>Color</label>
              <input
                type='text'
                name='color'
                value={data.color || ''}
                placeholder='Blue'
                required
                onChange={(e) => handlerChange(e.target)}
              />
            </div>
            <div className=''>
              <label htmlFor='year'>Year</label>
              <input
                type='number'
                name='year'
                value={data.year || ''}
                placeholder='2020'
                required
                onChange={(e) => handlerChange(e.target)}
              />
            </div>
            <div className=''>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                name='price'
                value={data.price || ''}
                placeholder='317,900'
                required
                onChange={(e) => handlerChange(e.target)}
              />
            </div>
          </div>
          {error && <div className='error-message w-1/3 mb-4'>{error}</div>}
          {success && (
            <div className='success-message w-1/3 mb-4'>{success}</div>
          )}
        </div>
        <div className='fx-center'>
          <button
            type='submit'
            className='bg-blue-600 w-1/4 text-white font-medium py-1 rounded-md'
          >
            Save
          </button>
        </div>
      </form>
      <div className='block'>
        <h3 className='text-center font-semibold text-lg text-gray-600 my-3'>
          Stocktaking
        </h3>
        <div className='stock-items flex flex-wrap justify-around my-5'>
          {inventory ? (
            inventory.map((i) => (
              <div
                className='stock-item w-96 max-h-36 flex items-center shadow-sm ring-gray-400 mr-2 mb-2'
                key={i.id}
              >
                <div className='bg-yellow-500 w-1/3'>
                  <img
                    src='https://img.automexico.com/crop/840x640/2020/07/07/rkwP8Fam/nissan-sentra-2020-1280-11-059a.jpg'
                    alt=''
                  />
                </div>
                <div className='info text-center px-1 text-gray-700 uppercase'>
                  {i.brand} {i.model} {i.version} {i.year} {i.color} {i.price}
                </div>
              </div>
            ))
          ) : (
            <p className='w-full text-center text-gray-600 text-4xl font-semibold'>
              Empty inventory :/
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Garage;
