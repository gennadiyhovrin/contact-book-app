import ContactTable from "../ContactTable/ContactTable";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
export default function ContactBook() {
  const [items, setItems] = useState([{ id: 1, name: "Ivan", surname: "Ivanov", phone: "+380504569874" }]);

  const [isForm, setForm] = useState(false);

  function toggleForm() {
    setForm(!isForm);
    
  }

  function deleteContactItem(id) {
    const newContacs = items.filter((item) => item.id !== id);

    setItems(newContacs);
  }

  function addContactItem(newContact) {
    newContact = { id: Date.now(), ...newContact };
    setItems([...items, newContact]);
  }
  return (
    <div className="row  justify-content-center">
      <div className="col-8">
        <ContactTable items={items} onDelete={deleteContactItem} />
        {isForm ? (
          <ContactForm onSave={addContactItem} onToggle={toggleForm}/>
        ) : (
          <button type="button" className="btn btn-outline-info" onClick={toggleForm}>
            Новый контакт
          </button>
        )}
      </div>
    </div>
  );
}
