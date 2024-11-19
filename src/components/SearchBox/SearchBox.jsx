import s from "./SearchBox.module.css";

const SearchBox = ({ contacts, handleOnSearch }) => {
  return (
    <dev className={s.wrapper}>
      <label className={s.title} name="find">
        Find contacts by name
      </label>
      <input type="text" name="find" onChange={handleOnSearch} />
    </dev>
  );
};

export default SearchBox;
