import CardHoverImg from "../card/CardHoverImg.jsx";

const Home = () => {
  return (
    <div className="dark:text-darktext-midnight-900 group relative m-32 mx-auto flex w-4/5 flex-col text-center text-midnight-900">
      <h1 className="stext-center dark:text-darkPrimary text-midnight-900">
        Home
      </h1>
      <CardHoverImg />
    </div>
  );
};
export default Home;
