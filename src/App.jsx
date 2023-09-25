import Card from '../Comp / Card/card'
import './App.css'

function App() {
  return (
    <>
      <Card />
      <div className='card'>
        <h2>Rei Ayanami</h2>

          <div className="tags">
            <span className="tag">Status: ?</span>
            <span className="tag">Espécie: Semi-deus</span>
            <span className="tag">Origem: Proveta</span>
          </div>

          <img src="https://i.pinimg.com/236x/7a/cf/0c/7acf0c26ae8284f23ca608b904dd1eb2.jpg" />
      </div>
    </>
    )
  }
export default App
