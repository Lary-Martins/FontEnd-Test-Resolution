import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'

import '../../styles/Header.css';

export default function TuriviusHeader() {
    return <div className="turivius-header">
        <Image 
         src={ logo }
         alt="Turivius logo"
         className="img"
        />
    </div>
}