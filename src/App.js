import { GameBoard } from "./components/GameBoard/GameBoard";
import { Container } from "./layout/Container";
import { Header } from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <GameBoard />
      </Container>
    </div>
  );
}

export default App;
