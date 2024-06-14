import "./App.css";
import Card from "./components/Card";
export default function App() {
  return (
    <>
      <h1 className="bg-white p-4 text-black ">Talwind CSS</h1>
      <Card username="vikesh" btnText="Click me"/>
      <Card username="Raut" />
    </>
  );
}
