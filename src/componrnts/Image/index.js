

import { forwardRef, useState } from 'react'
import styles from './Image.module.scss'
import images from '~/acssets/img';
import classNames from 'classnames';

const Image= forwardRef (({className, src, alt, fallBack: customFallBack= images.noImage, ...props }, ref)=> {

    const [fallBack, setfallback] = useState('')
    const hanldeError = ()=>{
        setfallback(customFallBack)
    }
    return (  
        <img {...props} 
            ref={ref}
            src={fallBack || src}
            alt={alt}
            onError={hanldeError}
            className={classNames(styles.Wrapper,className)}
        />
    );
})

export default Image;