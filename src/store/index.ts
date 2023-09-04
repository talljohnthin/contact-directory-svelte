import { writable } from "svelte/store";
import { type IContact } from "../types/contact";

const createStore = () => {
  const { set, update, subscribe } = writable<IContact[]>([
    {
      id: "1",
      name: "Juan Dela Cruz",
      occupation: "Svelte Developer",
      email: "test@gmail.com",
      phone: 9123456789,
    },
    {
      id: `2`,
      name: "Jana He",
      occupation: "Svelte Developer",
      email: "test@gmail.com",
      phone: 9123456789,
    },
    {
      id: `3`,
      name: "Mark Datu",
      occupation: "Svelte Developer",
      email: "test@gmail.com",
      phone: 9123456789,
    },
    {
      id: `4`,
      name: "John Doe",
      occupation: "Svelte Developer",
      email: "test@gmail.com",
      phone: 9123456789,
    },
  ]);

  return {
    set,
    subscribe,
    remove: (id: string) => {
      return update((prevState) =>
        prevState.filter((contact) => contact.id !== id)
      );
    },
    add: (contact: IContact) => {
      return update((prevState) => [...prevState, contact]);
    },
  };
};

export const contacts = createStore();
