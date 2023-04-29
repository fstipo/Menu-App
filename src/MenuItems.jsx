import Menu from './MenuItem';

const MenuItems = ({ items, category }) => {
  const filteredList = category
    ? items.filter((menu) => category === menu.category)
    : items;

  return (
    <div className="section-center">
      {filteredList.map((menuItem) => (
        <Menu key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
};
export default MenuItems;
