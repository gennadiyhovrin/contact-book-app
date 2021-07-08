import { useState, useEffect } from "react";

export default function useContactBook() {
  const [items, setItems] = useState([]);

  const [isForm, setForm] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then(setItems);
  }, []);

  function toggleForm() {
    setForm(!isForm);
  }

  function deleteContactItem(id) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "DELETE",
    });
    const newContacs = items.filter((item) => item.id !== id);

    setItems(newContacs);
  }

  function addContactItem(newContact) {
    newContact = { ...newContact };

    fetch("https://jsonplaceholder.typicode.com/users/", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setItems([...items, data]));
  }
  return {items,isForm,toggleForm,deleteContactItem,addContactItem};
}
