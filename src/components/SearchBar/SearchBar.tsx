import { FiSearch } from "react-icons/fi";

export function SearchBar() {
  return (
    <section className="page-search" aria-label="Search stays">
      <div className="search-card">
        <div className="search-fields">
          <label className="search-field">
            <span className="search-field-label">Destination</span>
            <input className="search-field-input" type="text" placeholder="Where are you going?" />
          </label>

          <button type="button" className="search-field-button">
            <span className="search-field-label">Check in / out</span>
            <span className="search-field-value">Add dates</span>
          </button>

          <button type="button" className="search-field-button">
            <span className="search-field-label">Guests</span>
            <span className="search-field-value">Add guests</span>
          </button>
        </div>

        <button type="button" className="search-submit" aria-label="Search">
          <FiSearch size={24}/>
        </button>
      </div>
    </section>
  )
}