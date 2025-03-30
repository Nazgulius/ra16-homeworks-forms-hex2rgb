import { useState } from 'react'

export default function ColorConverter () {
    const [color, setColor] = useState();


    setColor: string () {
        document.body.style.backgroundColor = '#fff';
    }

    return (
        <>
        <form className='form' action="">
            <input className='color-input' type="text" maxLength={10} placeholder='color HEX' />
            <div className="color-out" backgroundColor="#fff">color RGB</div>
        </form>
        </>
    );
}