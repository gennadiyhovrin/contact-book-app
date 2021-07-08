import ContactTable from "../ContactTable/ContactTable";
import ContactForm from "../ContactForm/ContactForm";
import useContactBook from "../../hooks/useContactBook";
export default function ContactBook() {
  const { items, isForm, toggleForm, deleteContactItem, addContactItem } =
    useContactBook();
  return (
    <div className="row  justify-content-center">
      <div className="col-8">
        <ContactTable items={items} onDelete={deleteContactItem} />
        {isForm ? (
          <ContactForm onSave={addContactItem} onToggle={toggleForm} />
        ) : (
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={toggleForm}
          >
            Новый контакт
          </button>
        )}
      </div>
    </div>
  );
}
