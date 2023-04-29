import Menu from './Menu';

const MenuList = ({ menuList, category }) => {
  console.log({ category });

  const filteredList = category
    ? menuList.filter((menu) => category === menu.category)
    : menuList;

  return (
    <section className="section-center">
      {filteredList.map((menu) => (
        <Menu key={menu.id} {...menu} />
      ))}
    </section>
  );
};
export default MenuList;
