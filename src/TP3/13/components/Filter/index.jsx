import "./style.css";

export function Filter({ tasks, filter, onFilterChange }) {
  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <ul className="categories">
      {categories.map((category) => {
        const isActive = filter.includes(category);

        return (
          <li key={category}>
            <button
              className={isActive ? "category--selected" : ""}
              onClick={() => {
                onFilterChange(isActive, category);
              }}
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
