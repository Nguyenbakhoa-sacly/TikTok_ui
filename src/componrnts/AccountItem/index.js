import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
    <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rosa_chinensis_petals.jpg/1200px-Rosa_chinensis_petals.jpg' alt='Abc'/>
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
