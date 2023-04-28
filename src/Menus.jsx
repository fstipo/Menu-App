import Menu from './Menu';

const Menus = ({ menus }) => {
  return (
    <section className="section-center">
      {menus.map((menu) => (
        <Menu key={menu.id} {...menu} />
      ))}
    </section>
  );
};
export default Menus;
