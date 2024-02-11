import logo from "../../images/logo.png";

const Logo = () => {
    return (
        <section className="w-18 flex items-center justify-center">
            <img
                src={logo}
                className='w-10 h-10'
                alt='Logo'
                title="Logo"
            />
        </section >
    );
};

export default Logo;