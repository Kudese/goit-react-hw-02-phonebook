import s from "../PhoneBook/PhoneBook.module.css"
export default function PhoneBook ({onCreateContact}) {
    return( <div className={s.conteiner}>
    <h2>PhoneBook</h2>
    <form onSubmit={onCreateContact}>
        <label>Name
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    </label>
    <label>Number
        <input
        type="tel"
        name="number"
        ></input>
    </label>
    <button type="submit">Add contact</button>
    </form>
    </div>)
}