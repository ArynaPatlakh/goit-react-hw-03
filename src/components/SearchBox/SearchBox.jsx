import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearchChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.title} name="find">
        Find contacts by name
      </label>
      <input type="text" name="find" value={value} onChange={onSearchChange} />
    </div>
  );
};

export default SearchBox;
