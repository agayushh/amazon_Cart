import { atom } from "recoil";
import { selector } from "recoil";

export const cartItem = atom({
  key: "cartItems",
  default: 0,
});

export const items = atom({
  default: [],
  key: "items",
});

export const searchAtom = atom({
  key: "search",
  default: localStorage.getItem("Prevsearched")
});

export const searchSpecifcItem = selector({
  key: "searchSpecificItem",
  get: ({ get }) => {
    const searchText = get(searchAtom);
    const allItems = get(items);
    return allItems.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  },
});
