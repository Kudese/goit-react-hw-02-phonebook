import s from "../Contacts/Contacts.module.css"
export default function Contacts({contacts}) {
  return (
    <div className={s.conteiner}>
    <h2>Contacts</h2>
    <ul>
    {contacts.map((el)=>{
      return <li key={el.id}>{el.name}</li>
    })}
    </ul>
    </div>
  );
}
