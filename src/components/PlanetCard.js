function PlanetCard({planet}) {

const {name, orbital_period_in_earth_days, fun_fact, is_planet} = planet

  return (
    <div className="white-border">

      <h3>{name}</h3>

      <p>Planet Orbital Period: {orbital_period_in_earth_days} days</p>

      <p>{fun_fact}</p>

      <p>{is_planet ? "Planet" : "Not a planet"}</p>

    </div>
  )

}

export default PlanetCard
