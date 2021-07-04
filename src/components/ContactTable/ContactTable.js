import ContactItem from "../ContactItem/ContactItem";

export default function ContactTable({items, onDelete}) {
    return (
        
        <table className="table">
  <thead>
  {items.map((item) => (
                <ContactItem
                    key={item.id}
                    item={item}
                    onDelete={onDelete}
                />
            ))}
  </thead>
  <tbody>
    
    
  </tbody>
</table>
    )
}

