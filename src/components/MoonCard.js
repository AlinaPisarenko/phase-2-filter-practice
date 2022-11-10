function MoonCard({moon}) {

  return (
    <div className="white-border">

      <h3>{moon.name}</h3>

      <p>{moon.fun_fact}</p>

    </div>
  )

}

export default MoonCard
