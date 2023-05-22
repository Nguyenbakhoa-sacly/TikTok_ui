

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/componrnts/Popper'
import AccountItem from '~/componrnts/AccountItem';
import styles from './Header.module.scss';
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
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={image.logo} alt="Tiktok" />
                </div>
                <Tippy 
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button text> Upload</Button>
                    <Button primary >Log in</Button>
                    
                    <Menu items={MENU_ITEMS} onChange ={handleMenuChange} >
                        <button className={cx('more-btn')} >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
