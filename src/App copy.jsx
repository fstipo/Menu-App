import { useState } from 'react';
import data from './data';
import Menus from './Menus';
import Title from './Title';

const App = () => {
  const [menus, setMenus] = useState(data);
  const [category, setCategory] = useState('all');

  return (
    <main>
      <section className="menu">
        <Title class={'title'} title={'our menu'} />

        <button
          type="button"
          className="btn"
          onClick={() => setCategory('all')}
        >
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
      <Menus menus={menus} category={category} />
    </main>
  );
};
export default App;
