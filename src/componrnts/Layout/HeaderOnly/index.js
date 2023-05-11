import Header from '../component/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            {/* chi co 1 minh header thoi trang upload*/}
            <Header />
            <div className="Container">
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
