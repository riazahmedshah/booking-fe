import { useEffect, useState } from 'react'
import { fetchCategories } from '../../apis/categories'
import { fetchProperties } from '../../apis/properties'
import type { Category, Property } from '../../apis/types'
import { CategoryFilter } from '../../components/CategoryFilter/CategoryFilter'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { PropertyGrid } from '../../components/PropertyGrid/PropertyGrid'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export function Home() {
  const [properties, setProperties] = useState<Property[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadHomeContent() {
      try {
        const [nextProperties, nextCategories] = await Promise.all([
          fetchProperties(),
          fetchCategories(),
        ])

        if (!isMounted) {
          return
        }

        setProperties(nextProperties)
        setCategories(nextCategories)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadHomeContent()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <SearchBar />
        {!isLoading && <CategoryFilter categories={categories} />}
        {isLoading ? (
          <div className="home-loading">Loading serene stays...</div>
        ) : (
          <PropertyGrid properties={properties} />
        )}
      </main>
      <Footer />
    </div>
  )
}