import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import images from '~/acssets/img';
import Button from '~/componrnts/Button';
import Menu from '~/componrnts/Popper/Menu';
import { UploadIcon, InboxIcon, MessageIcon } from '~/componrnts/Icons/Icons';
import Image from '~/componrnts/Image';
import Search from '../Header';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
        title: 'Language',
        data: [
            {
            type: 'language',
            code: 'en',
            title: 'English',
            },
            {
            type: 'language',
            code: 'vi',
            title: 'Tiếng việt',
            },
        ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feeback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    ];
    function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
        case 'language':
            break;
        default:
        }
    };

    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@khoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
            ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo} alt="Tiktok" />
                    </div>
                    {/* search */}

                    <Search />
                    <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <>
                                <Tippy delay={200} content="Upload Video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                            </>
                            <>
                                <Tippy delay={200} content="Message" placement="bottom">
                                    {/* <div className={cx('in-box')}> */}
                                        <button className={cx('action-btn')}>
                                            <MessageIcon />
                                        </button>
                                        {/* <sup className={cx('supBadge')}>6</sup> */}
                                    {/* </div> */}
                                </Tippy>
                            </>
                            <>
                                <Tippy delay={200} content="Inbox" placement="bottom">
                                    <div className={cx('in-box')}>
                                        <button className={cx('action-btn')}>
                                            <InboxIcon />
                                        </button>
                                            <sup className={cx('supBadge')}>6</sup>
                                    </div>
                                </Tippy>
                            </>
                        </>
                    ) : (
                        <>
                            <Button text> Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt=""
                                src="https://flowershop.com.vn/wp-content/uploads/2020/09/y-nghia-hoa-cuc-hoa-mi-6-min.jpg"
                                // fallBack='https://flowershop.com.vn/wp-content/uploads/2020/09/y-nghia-hoa-cuc-hoa-mi-6-min.jpg'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
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
