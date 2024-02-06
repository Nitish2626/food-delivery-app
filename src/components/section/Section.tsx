type Props = {
    src: string;
    type: string;
    span: string;
    placeholder: string
};

const Section = ({ src, type, span, placeholder }: Props) => {
    return (
        <>
            <section className="w-11/12 flex items-center justify-evenly gap-2">
                <img
                    src={src}
                    className="w-6 h-6"
                    alt=""
                />
                <input
                    type={type}
                    className={`w-11/12 h-10 text-xl rounded-md px-2 shadow-md shadow-gray-300 outline-black`}
                    placeholder={placeholder}
                />
            </section>

            <span className="text-red-600 mb-4">{
                span}
            </span>
        </>
    );
};

export default Section;