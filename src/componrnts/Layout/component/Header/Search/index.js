import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SearchIcon } from '~/componrnts/Icons';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/componrnts/Popper';
import AccountItem from '~/componrnts/AccountItem';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Search() {
  //hien thi ket qua tim kiem
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);
    }, []);

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input placeholder="Search account and videos" spellCheck={false} />
                <button type="button" className={cx('clear-btn')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button type="button" className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
