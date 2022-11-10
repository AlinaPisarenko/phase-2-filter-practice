function MoonFilter({filter,setFilter}) {

  return (
    <>

      <label htmlFor="moon-search">Search for a moon:</label>

      <input onChange={(e) => setFilter(e.target.value)} value={filter} type="text" name="moon-search" />

    </>
  )

}

export default MoonFilter
