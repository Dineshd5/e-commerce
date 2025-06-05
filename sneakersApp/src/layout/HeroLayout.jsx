const HeroLayout = ({ children }) => {
  return (
    <header className="lg:max-w-[70%]  lg:mt-2 lg:border-t border-t-gray-300 mx-auto ">
      {children}
    </header>
  );
};

export default HeroLayout;
