import Header from '../header/header';
import Footer from '../footer/footer';

const layout = ({ children }) => {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <main>{ children }</main>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </>
    )
}

export default layout;