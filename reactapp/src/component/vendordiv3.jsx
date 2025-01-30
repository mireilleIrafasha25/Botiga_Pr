import "../styles/vendordiv3.css"
const Vendordiv3=()=>{
    return(
<div className="top-bar">
        <span>Total stores showing: {stores.length}</span>
        <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>Filter</button>
        {showFilter && (
          <div className="filter-options">
            <input type="text" placeholder="Search..." />
            <button>Apply</button>
          </div>
        )}
        <span>Sort by: <select><option>Most Recent</option></select></span>
      </div>
    )
}
export default Vendordiv3;