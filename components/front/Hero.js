import React, { Children }  from "react";
import styles from '../../styles/Hero.module.css'
import Link from "next/link";
const Hero = () =>{

    return(
        <div className={styles.container}>
            <div className={styles.hero}> 

            <div className={styles.text}>
                <h1>hello</h1>

            </div>
            <div>
            <button className={styles.button}><Link href="/"><a>Get Quote</a></Link></button>
            </div>

            </div>

        </div>
    )
}

export default Hero