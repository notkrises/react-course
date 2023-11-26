import Like from "./components/Like/Like";

function App() {
  return (
    <div>
      <Like
        onLike={() => console.log("Liked! :D")}
        onDislike={() => console.log("Disliked :(")}
      />
    </div>
  );
}

export default App;
