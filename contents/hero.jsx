import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import { Download } from 'lucide-react'
import Link from 'next/link'


const Hero = () => {
    useEffect(() => {
        document.getElementById('gradient2').style.opacity = '1'

        const graphicsone = document.getElementById('imagegraph1')

        graphicsone.style.opacity = '1'
        graphicsone.style.scale = '1'

        const texthero = document.getElementById('moevefrmlftfdo')

        texthero.style.opacity = '1'
        texthero.style.transform = 'translateX(0px)'
        setTimeout(() => {

            document.getElementById('gradient1').style.opacity = '1'
        }, 500);

    }, [])

    return (
        <>
            <div className={styles.mnbgcntnttnrfrh}>
                <div className={styles.mainherocnttntr}>
                    <div className={styles.lftsdmnfrcnttntnrsgrad}>
                        <div className={styles.topttlmngrad} id='gradient1'></div>
                        <div className={styles.btmmntgln} style={{ opacity: 0 }}>
                            Add simple clans to your Minecraft Servers.
                        </div>
                        <div className={styles.smmlmrfdesc} style={{ opacity: 0 }}>
                            This is a simple to use clans plugin for Minecraft servers. Create and manage clans with ease, and enhance your multiplayer experience. Perfect for any server looking to add a competitive edge!
                        </div>
                        <div className={styles.btnsfrbtmmndwnlds} style={{ opacity: 0 }}>
                            <Link href={'/download'}>
                                <div className={styles.downlloadbtnm}>
                                    <Download /> Download
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className={styles.rgtsdmnfrcnttntnrs}>
                        <div className={styles.lgomnfrclmnsmngrad} id='gradient2'></div>
                    </div>
                </div>
                <div className={styles.mainherocnttntrmn}>
                    <div className={styles.lftsdmnfrcnttntnrs} id='moevefrmlftfdo'>
                        <div className={styles.topttlmn}></div>
                        <div className={styles.btmmntgln}>
                            Add simple clans to your Minecraft Servers.
                        </div>
                        <div className={styles.smmlmrfdesc}>
                            This is a simple to use clans plugin for Minecraft servers. Create and manage clans with ease, and enhance your multiplayer experience. Perfect for any server looking to add a competitive edge!
                        </div>
                        <div className={styles.btnsfrbtmmndwnlds}>
                            <Link href={'/download'}>
                            <div className={styles.downlloadbtnm}>
                                <Download /> Download
                            </div>
                            </Link>
                        </div>

                    </div>
                    <div className={styles.rgtsdmnfrcnttntnrs}>
                        <div className={styles.lgomnfrclmnsmn} id='imagegraph1'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero