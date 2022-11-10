function PlanetFilter({filter, setFilter}) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="only_planets">True Planets</option>
    </select>
  )
}

export default PlanetFilter
