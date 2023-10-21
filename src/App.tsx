import Contents from "./components/Contents";
import NavBar from "./components/NavBar";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const App = () => {
  return (
    <>
      <div className="container">
        <ThemeContextProvider>
          <NavBar />
          <Contents />
        </ThemeContextProvider>
      </div>
    </>
  );
};

export default App;
