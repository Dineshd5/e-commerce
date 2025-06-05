const HeroLayout = ({ children }) => {
  return (
    <header className="md:max-w-[70%] lg:min-w-3/4 flex items-center mx-auto flex-col lg:flex-row lg:mt-6  justify-between">
      {children}
    </header>
  );
};

export default HeroLayout;
