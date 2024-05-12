// import ErrorMessage from "../ErrorMessage/ErrorMessage";
import React, { FC } from "react";
// import * as Yup from "yup";
import toast from "react-hot-toast";

interface FormSearchProps {
  onSetSearchQuery: (q: string) => void;
  toast: (message: string) => void;
}
const FormSearch: FC<FormSearchProps> = ({ onSetSearchQuery, toast }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.target as HTMLFormElement).searchTitle.value;
    if (value.trim() === "") {
      toast("Please enter a search query");
    } else {
      onSetSearchQuery(value.trim());
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='searchTitle'
            placeholder='Enter search query...'
          />
          {/* <ErrorMessage /> */}
        </label>
        <button type='submit' aria-label='Search'>
          🔍
        </button>
      </form>
    </>
  );
};

export default FormSearch;
