const Meals = ({ items }) => {
  return (
    <>
      <select className="form-select">
        <option value='0'>Select Meals</option>
        {items.map((item) => (
          <option key={item}value='1'>{item}</option>
        ))}
      </select>
    </>
  );
};
export default Meals;
