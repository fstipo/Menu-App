const Title = ({ text }) => {
  return (
    <div>
      <h2 className="title">{text || 'default title'}</h2>; 
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;
