import { startTransition } from "react"

function StarCard({star}) {

  return (
    <div className="white-border">

      <h3>{star.name}</h3>

      <p>Light years away: {star.distance_in_light_years}</p>

      <p>{star.fun_fact}</p>

    </div>
  )

}

export default StarCard

