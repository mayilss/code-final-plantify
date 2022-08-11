import { useState } from 'react';
import { GalleryNav } from '../../components/GalleryNav';
import { Photos } from '../../components/Photos';

export const Gallery = () => {
    const [tabActive, setTabActive] = useState(true);
    const onStateChange = (status) => {
        setTabActive(status);
    }

    return (tabActive ? <main className='container my-4'>
        <GalleryNav status={onStateChange} />
        <Photos />
    </main> : <main className='container my-4'>
        <GalleryNav status={onStateChange}/>
        {/* <Videos /> */}
    </main>)
}