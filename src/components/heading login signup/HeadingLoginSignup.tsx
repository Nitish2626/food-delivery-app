type Props={
    text:String;
};

const HeadingLoginSignup = ({text}:Props) => {
    return (
        <h1 className="text-center font-semibold text-2xl text-blue-600 mt-10">
            {text}
        </h1>
    );
};

export default HeadingLoginSignup;