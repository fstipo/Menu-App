import { useState } from 'react';
import data from './data';
import Title from './Title';
import MenuList from './MenuList';

const App = () => {
  const [menuList, setMenuList] = useState(data);
  const [category, setCategory] = useState('');
  return (
    <main>
      <section className="menu">
        {/* <Title /> */}
        <Title text="our menu" />
        <section className="btn-container">
          <button type="button" className="btn" onClick={() => setCategory('')}>
            all
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setCategory('breakfast')}
          >
            breakfast
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setCategory('lunch')}
          >
            Lunch
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setCategory('shakes')}
          >
            shakes
          </button>
        </section>
        <MenuList menuList={menuList} category={category} />
      </section>
    </main>
  );
};
export default App;
