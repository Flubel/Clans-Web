import React,{useEffect} from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react';

const footer = () => {


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adds a smooth scrolling effect
        });
    }
    const showhidembf = () => {
        const element = document.getElementById('optnmncntnrfrmenyyftrm');
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    };
    const showhidembf1 = () => {
        const element = document.getElementById('optnmncntnrfrmenyyftrm1');
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    };
    const showhidembf2 = () => {
        const element = document.getElementById('optnmncntnrfrmenyyftrm2');
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    };
    const showhidembf3 = () => {
        const element = document.getElementById('optnmncntnrfrmenyyftrm3');
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    };
    useEffect(() => {
        const mainflgfnc = async () => {

            const response = await axios.get('https://ipwhois.app/json/');
            const data = response.data;

            const flabgbcntnr = document.getElementById('webuserflgcntry')
            flabgbcntnr.style.backgroundImage = `url(${data.country_flag})`
        }
        mainflgfnc()

    }, [])



    return (
        <>
            <div className={styles.mainfooter}>
                <div className={styles.topfootercmprtmnt}>
                    <div className={styles.logomnfrftr}></div>
                    <div className={styles.socialsmnfrftr}></div>
                    <div className={styles.usernationalityfr}>
                        <div className={styles.webuserflgcntry} id='webuserflgcntry'></div>
                    </div>
                </div>
                <div className={styles.midfootercmprtmnt}>
                    <div className={styles.cntnrfrmdbyflb}>
                        <div className={styles.ttlfrcntnrmdbflb}>Made by Flubel</div>
                        <div className={styles.listfrmdbyflbmn}>
                            <div >FlubelMC</div>
                            <div >Zenzing</div>
                            <div >Sentient</div>
                            <div >SQLDB</div>
                            <div >Flubel-Shop</div>
                            <div >Flubel-Dev</div>
                            <div >Xmage</div>
                        </div>
                    </div>
                    <div className={styles.cntnrfrmdbyflb}>
                        <div className={styles.ttlfrcntnrmdbflb}>Company</div>
                        <div className={styles.listfrmdbyflbmn}>
                            <div >About</div>
                            <Link className={styles.clckablftr} href={'https://flubel.com/toc'}>Terms and Conditions</Link>
                            <Link className={styles.clckablftr} href={'https://flubel.com/news'}>News</Link>
                            <Link className={styles.clckablftr} href={'https://flubel.com/license'}>License</Link>
                        </div>
                    </div>
                    <div className={styles.cntnrfrmdbyflb}>
                        <div className={styles.ttlfrcntnrmdbflb}>Tech Partners</div>
                        <div className={styles.listfrmdbyflbmn}>
                            <div>Google</div>
                            <div>Meta</div>
                            <div>OpenAI</div>
                            <div>Oracle</div>
                            <div>Mistral</div>
                            <div>Black Forest Labs</div>
                        </div>
                    </div>
                    <div className={styles.cntnrfrmdbyflb}>
                        <div className={styles.ttlfrcntnrmdbflb}>Developers</div>
                        <div className={styles.listfrmdbyflbmn}>
                            <div>Fiend</div>
                            <div>EnderCowww</div>
                        </div>
                    </div>

                    <div className={styles.outrcntnrfrmdbyflbmb}>
                        <div className={styles.cntnrfrmdbyflbmb} onClick={showhidembf}>
                            <span>Made by Flubel</span>
                            <div className={styles.chevfrftrmnmbl}>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className={styles.optnmncntnrfrmenyyftrm} id='optnmncntnrfrmenyyftrm'>
                            <div>FlubelMC</div>
                            <div>Zenzing</div>
                            <div>Versity</div>
                            <div>SQLDB</div>
                            <div>Flubel-Shop</div>
                        </div>
                    </div>


                    <div className={styles.outrcntnrfrmdbyflbmb}>

                        <div className={styles.cntnrfrmdbyflbmb} onClick={showhidembf1}>
                            <span>Company</span>
                            <div className={styles.chevfrftrmnmbl}>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className={styles.optnmncntnrfrmenyyftrm} id='optnmncntnrfrmenyyftrm1'>
                            <div>About</div>
                            <Link className={styles.clckablftrm} href={'https://flubel.com/toc'}>Terms and Conditions</Link>
                            <Link className={styles.clckablftrm} href={'https://flubel.com/news'}>News</Link>
                            <Link className={styles.clckablftrm} href={'https://flubel.com/license'}>License</Link>
                        </div>
                    </div>

                    <div className={styles.outrcntnrfrmdbyflbmb}>
                        <div className={styles.cntnrfrmdbyflbmb} onClick={showhidembf2}>
                            <span>Tech Partners</span>
                            <div className={styles.chevfrftrmnmbl}>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className={styles.optnmncntnrfrmenyyftrm} id='optnmncntnrfrmenyyftrm2'>
                            <div>Google</div>
                            <div>Meta</div>
                            <div>OpenAI</div>
                            <div>Oracle</div>
                            <div>Mistral</div>
                            <div>Black Forest Labs</div>
                        </div>
                    </div>

                    <div className={styles.outrcntnrfrmdbyflbmb}>
                        <div className={styles.cntnrfrmdbyflbmb} onClick={showhidembf3}>
                            <span>Developers</span>
                            <div className={styles.chevfrftrmnmbl}>
                                <ChevronDown />
                            </div>
                        </div>
                        <div className={styles.optnmncntnrfrmenyyftrm} id='optnmncntnrfrmenyyftrm3'>
                            <div>Fiend</div>
                            <div>EnderCowww</div>
                        </div>
                    </div>
                </div>
                <div className={styles.btmfootercmprtmnt}>
                    <div className={styles.maontoccoprfooter}>
                        &copy; 2025, Clans By Flubel. All rights reserved. The website is owned and operated by Flubel and content is protected by applicable intellectual property laws.
                    </div>
                    <div className={styles.mainscrolltptpbgcntnr}>
                        <div className={styles.mianbtnfrscrttp} onClick={scrollToTop}>
                            <span>Back to Top</span>
                            &nbsp;&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 50 50"><path fill="#fff" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15" /><path fill="#fff" d="M33.3 26.7L25 18.4l-8.3 8.3l-1.4-1.4l9.7-9.7l9.7 9.7z" /><path fill="#fff" d="M24 17h2v17h-2z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer