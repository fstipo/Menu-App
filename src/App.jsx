import { useState } from 'react';
import data from './data';
import Title from './Title';
import MenuItems from './MenuItems';
import Categories from './Categories';

// unique category
const tempCategories = data.map((item) => item.category);
const tempSet = new Set(tempCategories); // set is object
const tempItems = ['all', ...tempSet];

// one linear
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
    // setMenuItems(category === 'all' ? data : newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <MenuItems items={menuItems} />
      </section>
    </main>
  );
};
export default App;
