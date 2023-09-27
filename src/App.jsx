import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    nome: 'Rick Sanchez',
    imagemUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvq1zPN95dBDQfKoqbFlN0GoneO_6spmHfLQOm0_fEIxVMSL7h'
    tags: ['Status: Vivo', 'Espécie: Humana']
  }

  const item2 = {
    nome: 'Morty Smith',
    imagemUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQo6Cf5eg53CLVRki3nZOs2QcCByOCLFCrHPGef1P2eok9v7uJT'
    tags: ['Origem: Terra C-137']
  }

  const item3 = {
    nome: 'Summer Smith',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgmx2TBsmYNlKj2_fqRsGCjBS8F8VbQ2Q-A&usqp=CAU'
  }

  const itens = [item1, item2, item3]

  return (
    <>
      {itens.map(function (item) {
        return <Card item={item}/>
      })}
    </>
  )
}

export default App