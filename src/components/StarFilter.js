function StarFilter({filter, setFilter}) {

  return (
    <>

      <label htmlFor="star-search">Lightyears away:</label>

      <input onChange={(e) => setFilter(e.target.value)} type="number" name="star-search" value={filter} />

    </>
  )

}

export default StarFilter
