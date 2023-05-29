


import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/componrnts/Image'
const cx = classNames.bind(styles);
function AccountItem() {
    return (
    <div className={cx('wrapper')}>
        <Image
            className={cx('avatar')} 
            src='https://flowershop.com.vn/wp-content/uploads/2020/09/y-nghia-hoa-cuc-hoa-mi-6-min.jpg' alt='Abc'/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span className={cx('')}>
                    Nguyen ba khoa
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </span>
            </h4>
            <span className={cx('username')}>Nguyenbakhoa</span>
        </div>
    </div>
    )
}

export default AccountItem;
