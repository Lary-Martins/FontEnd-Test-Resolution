import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'

import '../../styles/Header.css';

export default function TuriviusHeader() {
    return (
      <div className="turivius-header">
        <Image 
         className="img"
         src={ logo }
         alt="Turivius logo"
        />
      </div>
    )
}