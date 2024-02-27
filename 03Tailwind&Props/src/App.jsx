import './App.css'
import Card from './components/Card.jsx'
function App() {

  return (
    <>
      <h1 className="text-xl bg-red-600 rounded-xl p-4 mb-5">Hello World</h1>
      <Card deviceName="Macbook Air m1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      <Card deviceName="Macbook Air m2"/>
    </>
  )
}

export default App
