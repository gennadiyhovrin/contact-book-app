import { useState } from "react";

export default function ContactForm({ onSave, onToggle }) {
  const [newContact, setNewTodo] = useState({ name: "", surname: "", phone: "" });
  const [isButtonSubmit, setButtonSubmit] = useState(true);

  function submitHandler(e) {
    e.preventDefault();
    onSave(newContact);
    onToggle();
  }

  function toggleButtonSubmit(contact) {
    if (contact.name && contact.surname && contact.phone) {
      setButtonSubmit(false);
    } else {
      setButtonSubmit(true);
    }
  }

  function changeHandler(e) {
    let contact = {
      ...newContact,
      [e.target.name]: e.target.value,
    };
    toggleButtonSubmit(contact);
    setNewTodo(contact);
  }

  return (
    <form onSubmit={submitHandler} className="row justify-content-sart">
      <div className="mb-3 col">
        <input
          value={newContact.name}
          type="text"
          name="name"
          className="form-control"
          placeholder="Имя"
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3 col">
        <input
          value={newContact.surname}
          type="text"
          name="surname"
          className="form-control"
          placeholder="Фамилия"
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3 col">
        <input
          value={newContact.phone}
          type="text"
          name="phone"
          className="form-control"
          placeholder="Телефон"
          onChange={changeHandler}
        />
      </div>
      <div className="row justify-content-evenly">
        <button type="submit" className="btn btn-primary col-2" disabled={isButtonSubmit}>
          Сохранить
        </button>
        <button type="button" className="btn btn-primary col-2" onClick={onToggle}>
          Отмена
        </button>
      </div>
    </form>
  );
}
