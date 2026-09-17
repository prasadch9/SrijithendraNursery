import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import PlantCard from "../components/PlantCard";
import SectionTitle from "../components/SectionTitle";
import { plants, plantCategories } from "../data/plants";
import useSEO from "../hooks/useSEO";
import "../styles/Plants.css";

export default function Plants() {
  useSEO(
    "Plants Collection | Sri Jithendra Nursery",
    "Browse our full collection of indoor, outdoor, flowering, fruit, ornamental and medicinal plants at Sri Jithendra Nursery."
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return plants.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__pattern" />
        <div className="page-hero__content">
          <h1>Our Plants Collection</h1>
          <p>Explore a wide variety of healthy plants for your home, garden and surroundings.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Search + Filter */}
          <div className="plants-controls">
            <div className="plants-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search plants by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search plants"
              />
            </div>
            <div className="plants-filters">
              <button
                className={`plants-chip ${category === "All" ? "plants-chip--active" : ""}`}
                onClick={() => setCategory("All")}
              >
                All
              </button>
              {plantCategories.map((cat) => (
                <button
                  key={cat}
                  className={`plants-chip ${category === cat ? "plants-chip--active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="plants-grid">
              {filtered.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="plants-empty">
              <p>No plants found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
