import { useState,useEffect } from 'react'
import PlanetFilter from "./PlanetFilter"
import PlanetCard from "./PlanetCard"

function PlanetsContainer() {
  const [planets, setPlanets] = useState([])
  const [filter, setFilter] = useState('all')

  const planetsURL = "http://localhost:3000/planets"

  useEffect(() => {
    fetch(planetsURL)
    .then(res => res.json())
    .then(data => setPlanets(data))
  },[])

const filteredArray = planets.filter(planet => {
  if (filter === 'all') return true
  return planet.is_planet
})

  

  return (
    <div className="white-border-top">

      <h2>Planets of the Solar System</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the planets, map through and display them. Use the PlanetFilter component to allow users to filter true planets from planetoids.</p>

      <PlanetFilter filter={filter} setFilter={setFilter}/>

      <div className="grid column-3">

      {filteredArray.map(planet => {
      return <PlanetCard key={planet.id} planet={planet}/>
     })}

      </div>



    </div>
  )

}

export default PlanetsContainer
