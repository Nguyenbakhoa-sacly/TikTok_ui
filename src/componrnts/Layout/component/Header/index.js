

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faCircleXmark, faMagnifyingGlass, faSpinner, faEllipsisVertical, 
        faEarthAsia, faCircleQuestion, faKeyboard, 
        faCloudArrowUp, faUser, faCoins, faGear, faSignOut 
        }from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/componrnts/Popper'
import AccountItem from '~/componrnts/AccountItem';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import image from '~/acssets/img';
import Button from '~/componrnts/Button' 
import Menu from '~/componrnts/Popper/Menu';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
 
const MENU_ITEMS = [
    {
        icon:<FontAwesomeIcon icon ={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data:[
                {
                    type:'language',
                    code:'en',
                    title: 'English'
                },
                {
                    type:'language',
                    code:'vi',
                    title: 'Tiếng việt'
                },
            ]
        }
    }, 
    {
        icon:<FontAwesomeIcon icon ={faCircleQuestion} />,
        title: 'Feeback and help',
        to :'/feedback'
    },
    {
        icon:<FontAwesomeIcon icon ={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]
function Header() {
    //hien thi ket qua tim kiem
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    },[])

    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
                break;
            default:
        }
    }

    const currentUser = true;
    const userMenu = [
        {
            icon:<FontAwesomeIcon icon ={faUser} />,
            title: 'View profile',
            to :'/@khoa'
        },
        {
            icon:<FontAwesomeIcon icon ={faCoins} />,
            title: 'Get Coins',
            to :'/coin'
        },
        {
            icon:<FontAwesomeIcon icon ={faGear} />,
            title: 'Settings',
            to :'/settings'
        },
        ...MENU_ITEMS,
        {
            icon:<FontAwesomeIcon icon ={faSignOut} />,
            title: 'Log out',
            to :'/logout',
            separate: true
        }
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={image.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={ attrs =>(
                            <div className={cx('search-result')} tabIndex="-1"  {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Account
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                    )
                    }
                >
                    <div className={cx('search')}>
                        <input placeholder='Search account and videos' spellCheck={false}/>
                        <button type="button" className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark }/>
                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon= {faSpinner}/> 
                            <button type="button" className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass }/>
                        </button>
                    
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Upload Video" placement="bottom" >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp}/>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text> Upload</Button>
                            <Button primary >Log in</Button>
                        </>
                    )}

                    <Menu items={ currentUser ? userMenu : MENU_ITEMS } onChange ={handleMenuChange} >
                        {currentUser ?(
                            <img className={cx('user-avatar')}  alt='' src='https://img.pikbest.com/png-images/colorful-letter-k-logo-template--monogram-initial-letter-k-logo-design_2416163.png!f305cw' />
                        ) :(
                            <button className={cx('more-btn')} >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                
                </div>
            </div>
        </header>
    );
}

export default Header;
