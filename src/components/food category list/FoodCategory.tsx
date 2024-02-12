type Props={
    src:string;
    name:string;
};

const FoodCategory = ({src,name}:Props) => {
  return (
    <div className="border-2 border-black rounded-xl px-4 py-1">
        <img src={src} className="w-10 h-10" alt={name} title={name}></img>
        {/* <h1>{name}</h1> */}
    </div>
  );
};

export default FoodCategory;