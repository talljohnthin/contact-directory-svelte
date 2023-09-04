import { writable } from "svelte/store";

const createStore = () => {
  const { set, subscribe } = writable<boolean>(false);

  return {
    set,
    subscribe,
    open: () => set(true),
    close: () => set(false),
  };
};

export const sidebar = createStore();
