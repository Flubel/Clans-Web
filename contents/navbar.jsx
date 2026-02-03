import React, { useEffect, useState } from 'react'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { ChevronDown, Database, FileBadge, Gamepad2Icon, Globe, Image, LetterText, LogOut, Menu, Scale, Scroll, ScrollIcon, ScrollTextIcon, ShoppingCart, UserRound, X } from 'lucide-react';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [userStatus, setUserStatus] = useState(false);
    const [userName, setUserName] = useState('');

    const [currentPath, setCurrentPath] = useState('');
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = () => {
            resetBodyStyles();
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

    const resetBodyStyles = () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
    };

    useEffect(() => {
        const hoverbtn = document.getElementById('mnsvgcntntcntnr');
        const popover = document.getElementById('topnavbrmncntnrstylbrm');
        const svgrtt = document.getElementById('rttrsvg');
        const mainpopiver = document.getElementById('mainpopovercntnt');
        let hoverTimeout;

        const handleMouseOver = () => {
            clearTimeout(hoverTimeout);
            popover.style.display = 'flex';
            hoverTimeout = setTimeout(() => {
                svgrtt.style.rotate = '-180deg';
                mainpopiver.style.scale = '1';
                mainpopiver.style.opacity = '1';
            }, 10);
        };

        const handleMouseLeave = () => {
            clearTimeout(hoverTimeout);
            mainpopiver.style.scale = '0.8';
            mainpopiver.style.opacity = '0';
            svgrtt.style.rotate = '0deg';
            hoverTimeout = setTimeout(() => {
                popover.style.display = 'none';
            }, 300);
        };

        hoverbtn.addEventListener('mouseover', handleMouseOver);
        hoverbtn.addEventListener('mouseleave', handleMouseLeave);
        popover.addEventListener('mouseover', handleMouseOver);
        popover.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            hoverbtn.removeEventListener('mouseover', handleMouseOver);
            hoverbtn.removeEventListener('mouseleave', handleMouseLeave);
            popover.removeEventListener('mouseover', handleMouseOver);
            popover.removeEventListener('mouseleave', handleMouseLeave);
        };

    }, []);
    useEffect(() => {

        const buttonchckr = document.getElementById('mininputverfkey')
        const mainbutton = document.getElementById('contnumnbtn')
        buttonchckr.addEventListener('input', (input) => {
            if (input.target.value.length >= 2) {
                mainbutton.style.filter = 'brightness(1)'
                mainbutton.style.cursor = 'pointer'
            } else {
                mainbutton.style.filter = 'brightness(0.6)'
                mainbutton.style.cursor = 'not-allowed'

            }
        })

    }, [])

    const showsigninlogic = async () => {
        const bgshow = document.getElementById('signinwithmcaccmnifn')
        const maindvshw = document.getElementById('mainsgnincntnttnr')

        bgshow.style.display = 'flex'
        setTimeout(() => {
            bgshow.style.opacity = '1'
            setTimeout(() => {
                maindvshw.style.opacity = '1'
                maindvshw.style.scale = '1'
            }, 100);
        }, 10);

    }
    const hidesigninlogic = async () => {
        const bgshow = document.getElementById('signinwithmcaccmnifn')
        const maindvshw = document.getElementById('mainsgnincntnttnr')


        maindvshw.style.opacity = '0'
        maindvshw.style.scale = '0.8'
        bgshow.style.opacity = '0'

        setTimeout(() => {
            bgshow.style.display = 'none'
        }, 100);

    }

    const userauthlggacc = async () => {
        console.log('wrkng');
        const buttonchckr = document.getElementById('mininputverfkey');

        if (buttonchckr.value.length >= 2) {

            localStorage.setItem('UserStatus', 'true');
            localStorage.setItem('UserName', buttonchckr.value);

            await setUserStatus('true');
            await setUserName(buttonchckr.value);

            hidesigninlogic()
        }
    };


    useEffect(() => {

        const bgshow = document.getElementById('signinwithmcaccmnifn');
        const maindvshw = document.getElementById('mainsgnincntnttnr');
        const button = document.getElementById('contnumnbtn');
        const bgClickHandler = (event) => {
            if (event.target !== button) {
                hidesigninlogic();
            }
        };

        const contentClickHandler = (event) => {
            if (button && event.target !== button) {
                event.stopPropagation();
            }
        };

        bgshow.addEventListener('click', bgClickHandler);
        maindvshw.addEventListener('click', contentClickHandler);

        return () => {
            bgshow.removeEventListener('click', bgClickHandler);
            maindvshw.removeEventListener('click', contentClickHandler);
        };
    }, []);



    useEffect(() => {
        setUserStatus(localStorage.getItem('UserStatus'));
        setUserName(localStorage.getItem('UserName') || 'User');
        console.log(localStorage.getItem('UserStatus'))
        console.log(localStorage.getItem('UserName'))
    }, []);


    useEffect(() => {

        const hoverbtn = document.getElementById('btnonmncntnr');
        const popover = document.getElementById('otrmncntnrnvbr');
        const mainpopiver = document.getElementById('navbrothrmnoptpnsm');
        if (!hoverbtn || !popover || !mainpopiver) {
            console.error('One or more elements not found');
            return;
        }

        let hoverTimeout;

        popover.style.left = hoverbtn.getBoundingClientRect().x + hoverbtn.getBoundingClientRect().width * 2 - 200 + "px";
        const handleMouseOver = () => {
            clearTimeout(hoverTimeout);
            popover.style.display = 'flex';
            hoverTimeout = setTimeout(() => {
                mainpopiver.style.scale = '1';
                mainpopiver.style.opacity = '1';
            }, 10);
        };

        const handleMouseLeave = () => {
            clearTimeout(hoverTimeout);
            mainpopiver.style.scale = '0.8';
            mainpopiver.style.opacity = '0';
            hoverTimeout = setTimeout(() => {
                popover.style.display = 'none';
            }, 300);
        };

        hoverbtn.addEventListener('mouseover', handleMouseOver);
        hoverbtn.addEventListener('mouseleave', handleMouseLeave);
        popover.addEventListener('mouseover', handleMouseOver);
        popover.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            hoverbtn.removeEventListener('mouseover', handleMouseOver);
            hoverbtn.removeEventListener('mouseleave', handleMouseLeave);
            popover.removeEventListener('mouseover', handleMouseOver);
            popover.removeEventListener('mouseleave', handleMouseLeave);
        };

    }, [userName]);

    const logoutuser = async () => {
        localStorage.setItem('UserName', null)
        localStorage.setItem('UserStatus', false)

        setUserStatus(false);
        setUserName(' ');
    }


    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (!Array.isArray(cart)) return;

            const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
            setCartCount(totalCount);
        };

        updateCartCount(); // Run on mount

        // 🔥 Listen for the 'cartUpdated' event
        window.addEventListener('cartUpdated', updateCartCount);

        return () => {
            window.removeEventListener('cartUpdated', updateCartCount);
        };
    }, []);



    useEffect(() => {
        setCurrentPath(router.pathname);
    }, [router.pathname]);


    useEffect(() => {
        const openmenu = document.getElementById('menu1')
        const closemenu = document.getElementById('menu2')
        const menu = document.getElementById('flcttrmn1')
        openmenu.addEventListener('click', () => {

            document.body.style.top = `0px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            openmenu.style.display = 'none'
            closemenu.style.display = 'flex'
            menu.style.display = 'flex'
            setTimeout(() => {
                menu.style.marginTop = '-30px'
                menu.style.opacity = '1'
            }, 10);
        })
        closemenu.addEventListener('click', () => {

            document.body.style.top = '';
            document.body.style.width = "";
            document.body.style.overflow = "";
            document.body.style.position = "";
            closemenu.style.display = 'none'
            openmenu.style.display = 'flex'
            menu.style.marginTop = '-120px'
            menu.style.opacity = '0'
            setTimeout(() => {
                menu.style.display = 'none'
            }, 300)
        })
    }, [])


    const showscriptmenu = () => {
        document.getElementById('scrpwrmnshwrfrmenucntnt').style.display = 'flex'
        setTimeout(() => {
            document.getElementById('scrpwrmnshwrfrmenucntnt').style.opacity = '1'
            document.getElementById('scrpwrmnshwrfrmenucntnt').style.left = '0px'
            document.getElementById('scrpwrmnshwrfrmenucntnt').style.top = '0px'
        }, 10);
    }
    const hidescriptmenu = () => {
        document.getElementById('scrpwrmnshwrfrmenucntnt').style.opacity = '0'
        document.getElementById('scrpwrmnshwrfrmenucntnt').style.left = '5vh'
        setTimeout(() => {
            document.getElementById('scrpwrmnshwrfrmenucntnt').style.display = 'none'
        }, 300);
    }

    return (
        <>
            <div className={styles.mannvbrmnofcbg}>

            </div>
            <div className={styles.mntpnvbr}>
                <div className={styles.mnsvgcntntcntnr} id='mnsvgcntntcntnr'>
                    <div className={styles.mnflblgofrcntnts}>

                    </div>
                    <ChevronDown id='rttrsvg' />
                </div>
                <div className={styles.mnbgcntnrpopover} id='topnavbrmncntnrstylbrm'>
                    <div className={styles.topnavbrmncntnrstylbrm} id='mainpopovercntnt'>
                        <div className={styles.mncntnttnro}>
                            <div className={styles.mnttlpopovrmn}>Discover</div>
                            <a href='https://flubel.com' className={styles.mnbtnoptnon}>
                                <Globe />Flubel
                            </a>
                            <a href='https://web.flubelmc.xyz' className={styles.mnbtnoptnon}>
                                <Gamepad2Icon />FlubelMC
                            </a>
                            <a href='https://docs.flubel.com' className={styles.mnbtnoptnon}>
                                <ScrollTextIcon />Flubel Docs
                            </a>

                            <a href='http://sqldb.flubel.com' className={styles.mnbtnoptnon}>
                                <Database />SQLDB
                            </a>

                            <a href='http://xmage.flubel.com' className={styles.mnbtnoptnon}>
                                <Image /> Xmage
                            </a>
                        </div>
                        <div className={styles.mncntnttnro}>
                            <div className={styles.mnttlpopovrmn}>Legal</div>
                            <a href='https://flubel.com/toc' className={styles.mnbtnoptnon}>
                                <Scale /> Terms and Conditions
                            </a>
                            <a href='https://flubel.com/license' className={styles.mnbtnoptnon}>
                                <Scroll />License
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.mnlgonvbrspltr}></div>
                <Link href={'/'}>
                    <div className={styles.mnlgofrwbsd}>

                    </div>
                </Link>
                <div className={styles.qucklnkffrnvbr}>
                    <Link href={'/leaderboards'}>
                        <div
                            className={`${styles.optnnvbrqklnk} ${currentPath === '/leaderboards' ? styles.activeLink : ''
                                }`}
                            style={currentPath === '/leaderboards' ? { color: 'white' } : {}}
                        >
                            Leaderboards
                        </div>
                    </Link>
                    <Link href={'https://flubel.com/license'}>
                        <div className={styles.optnnvbrqklnk}>License</div>
                    </Link>

                </div>
                <div className={styles.restofnavbrcntnr}>

                    &nbsp;&nbsp;
                    <Link href={'/download'}>
                        <div className={styles.mainlginbtncntnr} id='mainlginbtncntnr'>Download</div>
                    </Link>
                </div>
                <div className={styles.mobilnavhambmnu}>
                    <Menu id='menu1' />
                    <X className={styles.cmnscls} id='menu2' />
                </div>
            </div>
            <div className={styles.signinwithmcaccmnifn} id='signinwithmcaccmnifn'>
                <div className={styles.mainsgnincntnttnr} id='mainsgnincntnttnr'>
                    <UserRound className={styles.mntpscggntnt} />
                    <div className={styles.cntntnrmnttl}>
                        Enter your Minecraft username.
                    </div>
                    <input type="text" id='mininputverfkey' className={styles.mininputverfkey} />
                    <div className={styles.contnumnbtn} id='contnumnbtn' onClick={userauthlggacc}>
                        Continue
                    </div>
                    <div className={styles.tocfrusraccsgnin}>
                        By signing in, you agree to Flubel's Terms and Conditions.
                    </div>
                </div>
            </div>

            <div className={styles.flcttrmn1} id='flcttrmn1'>
                <div className={styles.scrpwrmnshwrfrmenucntnt} id='scrpwrmnshwrfrmenucntnt'>
                    <div className={styles.topmnoptnsfrmnu1}>
                        <div className={styles.mnbckbtnfrsftwrs} onClick={hidescriptmenu}>
                            <ChevronDown />
                            <span>Back</span>
                        </div>
                    </div>
                    <div className={styles.mnoptnfrmnshermnu}>Made by Flubel</div>

                    <div className={styles.alloptnsfrmenufrsmlscrn}>
                        <div className={styles.mncntnttnro} style={{ padding: '7px' }}>
                            <div className={styles.mnttlpopovrmn}>Discover</div>
                            <a href='https://flubel.com' className={styles.mnoptnonfrmenubsc}>
                                <Globe />Flubel
                            </a>

                            <a href='https://web.flubelmc.xyz' className={styles.mnoptnonfrmenubsc}>
                                <Gamepad2Icon />FlubelMC
                            </a>
                            <a href='https://docs.flubel.com' className={styles.mnoptnonfrmenubsc}>
                                <ScrollTextIcon />Flubel Docs
                            </a>

                            <a href='http://sqldb.flubel.com' className={styles.mnoptnonfrmenubsc}>
                                <Database />SQLDB
                            </a>

                            <a href='http://xmage.flubel.com' className={styles.mnoptnonfrmenubsc}>
                                <Image /> Xmage
                            </a>
                        </div>
                        <div className={styles.mncntnttnro} style={{ padding: '7px' }}>
                            <div className={styles.mnttlpopovrmn}>Legal</div>
                            <a href='https://flubel.com/toc' className={styles.mnoptnonfrmenubsc}>
                                <Scale /> Terms and Conditions
                            </a>
                            <a href='https://flubel.com/license' className={styles.mnoptnonfrmenubsc}>
                                <Scroll />License
                            </a>
                        </div>

                    </div>
                </div>



                <div className={styles.topmnoptnsfrmnu}>
                    <Link href={'/download'}>
                        <div className={styles.mainlginbtncntnr} id='mainlginbtncntnr'>Download</div>
                    </Link>
                </div>
                <div className={styles.menymnlfsdg}>
                    Menu
                </div>
                <div className={styles.optnmnvfrcntr}>
                    <Link href={'/leaderboards'} className={styles.mnoptnonfrmenubsc}>
                        Leaderboards
                    </Link>
                    <Link href={'https://flubel.com/license'} className={styles.mnoptnonfrmenubsc}>
                        License
                    </Link>
                    <div className={styles.mnoptnonfrmenubsc} onClick={showscriptmenu}>
                        <span>More by Flubel</span>
                        <div className={styles.sftwrmncntnrsvi}>
                            <ChevronDown />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar