

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/componrnts/Popper'
import AccountItem from '~/componrnts/AccountItem';
import styles from './Header.module.scss';
import image from '~/acssets/img';
import Button from '~/componrnts/Button' 
const cx = classNames.bind(styles);

function Header() {
    //hien thi ket qua tim kiem
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    },[])

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
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
