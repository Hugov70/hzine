import React from 'react';
import { FaTruck, FaCreditCard } from 'react-icons/fa';
import { BiRocket } from 'react-icons/bi';
import { CarrosselM } from './styled';

export default function CarrosselMsg() {
  return (
    <CarrosselM>
      <div className="carousel-container">
        <div className="messages">
          <span className='item' > <FaTruck className='icons' /> <span className='text'>Frete Grátis</span> <br /> <span className='text'>Acima de R$280,00</span> </span>
          <span className='item'> <BiRocket className='icons' /><span className='text'>Lançamentos</span> <br /> <span className='text'>Lançamentos antecipados</span> </span>
          <span className='item'> <FaCreditCard className='icons' /><span className='text'>Formas de Pagamento</span> <br /><span className='text'>Várias formas de pagamento</span> </span>
        </div>
      </div>
    </CarrosselM>
  );
};

