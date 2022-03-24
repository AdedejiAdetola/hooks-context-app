import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import ToggleButton from "./components/ToggleButton";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleButton />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
