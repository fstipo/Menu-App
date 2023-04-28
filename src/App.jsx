import { useState } from 'react';
import Menus from './Menus';
import Title from './Title';
import data from './data';

const App = () => {
  const [menus, setMenus] = useState(data);
  return (
    <main className="menu">
      <Title />
      <section className="btn-container">
        <button type="button" className="btn">
          all
        </button>
        <button type="button" className="btn">
          breakfast
        </button>
        <button type="button" className="btn">
          Lunch
        </button>
        <button type="button" className="btn">
          shakes
        </button>
      </section>
      <Menus menus={menus} />
    </main>
  );
};
export default App;
