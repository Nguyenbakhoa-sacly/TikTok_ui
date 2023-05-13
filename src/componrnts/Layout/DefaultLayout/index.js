
import classNames from 'classnames/bind';
import Header from '../component/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
                {/* Page la children - ben app.js
                    neu route o home thi content la homepage
                */}
                
            </div>
        </div>
    );
}

export default DefaultLayout;
