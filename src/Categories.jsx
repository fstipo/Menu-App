const Categories = ({ categories, filterItems }) => {
  return (
    <section className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="btn"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </section>
  );
};
export default Categories;
