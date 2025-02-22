import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchAtom } from "../states/atoms";

export default function Searchbar() {
  const [search, setSearch] = useRecoilState(searchAtom);

  // useEffect(()=>{
  //   localStorage.setItem("Prevsearched", search);
  // },[search])
  // unlimited renders

  return (
    <input
      type="text"
      placeholder="enter item"
      name=""
      id=""
      value={search}
      className="mr-5 p-1 rounded-md border-2"
      onChange={(e) => {
        setSearch(e.target.value);
        // localStorage.setItem("Prevsearched", search);
        localStorage.setItem("Prevsearched", e.target.value);
      }}
    />
  );
}
