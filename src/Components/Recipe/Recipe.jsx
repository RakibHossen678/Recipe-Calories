import Cart from "../Cart/Cart";

const Recipe = () => {
    return (
        <div className=" pt-14 grid lg:grid-cols-2  gap-y-20 ">
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
        </div>
    );
};

export default Recipe;