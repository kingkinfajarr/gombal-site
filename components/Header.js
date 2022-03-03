import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between pt-10">
        <h1 className="font-bold md:text-6xl text-4xl text-green-bg text-center dark:text-green-btn">
          Gombal Site
        </h1>
        <ToggleTheme />
      </div>
    </>
  );
};

export default Header;
