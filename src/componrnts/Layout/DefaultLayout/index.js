import Header from '../component/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">
                <Sidebar />
                <div className="Content">{children}</div>
                {/* Page la children - ben app.js
                    neu route o home thi content la homepage
                */}
                
            </div>
        </div>
    );
}

export default DefaultLayout;
