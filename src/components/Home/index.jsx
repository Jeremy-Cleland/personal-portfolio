import CardHoverImg from "../Card/CardHoverImg";
2;

const Home = () => {
  return (
    <div className="group relative m-32 mx-auto flex w-4/5 flex-col text-center text-textPrimary dark:text-darkTextPrimary">
      <h1 className="stext-center text-textPrimary dark:text-darkPrimary">
        Home
      </h1>
      <div
        className="flex flex-col gap-20
      "
      >
        <CardHoverImg />
        <CardHoverImg />
      </div>
    </div>
  );
};
export default Home;
