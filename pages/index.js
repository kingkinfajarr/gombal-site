import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://api-saut.up.railway.app/public/api/gombal');
  const data = await res.json();

  return {
    props: { gombal: data.data },
  };
};

const Index = ({ gombal }) => {
  const [gombals, setGombal] = useState(
    Math.floor(Math.random() * gombal.length)
  );

  const generateRandomGombal = () => {
    const gombals = Math.floor(Math.random() * gombal.length);
    setGombal(gombals);
  };

  return (
    <>
      <div className="mx-auto md:px-72 px-8">
        <Header />
        <div className="text-center mt-10">
          <h1 className="font-medium">
            Temukan Gombalan maut buat{' '}
            <span className="underline text-green-btn">ayang</span>, biar makin
            jatuh cinta😘
          </h1>
        </div>

        <div className="w-full px-8 py-4 mx-auto rounded-lg shadow-md md:mt-20 mt-14 bg-green-btn">
          <div className="mt-2">
            <p className="md:text-2xl text-xl font-medium md:pb-5 pb-3">
              {gombal[gombals].gombal}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="px-3 py-3 mb-2 bg-green-bg text-sm font-semibold rounded cursor-pointer md:w-11 w-11"
              onClick={() =>
                navigator.clipboard.writeText(gombal[gombals].gombal)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5"
              >
                <path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z" />
              </svg>
            </button>
            <button
              className="px-3 py-3 mb-2 bg-green-bg text-sm font-semibold rounded cursor-pointer ml-auto md:w-52 w-40"
              onClick={generateRandomGombal}
            >
              Gombalan Lainnya
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
