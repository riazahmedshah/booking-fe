import type { Category } from '../../apis/types'

interface CategoryFilterProps {
  categories: Category[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <section className="category-filter" aria-label="Property categories">
      <div className="category-filter-scroller">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`category-pill ${category.active ? 'category-pill-active' : ''}`}
            aria-pressed={Boolean(category.active)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {category.icon}
            </span>
            <span className="category-label">{category.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}