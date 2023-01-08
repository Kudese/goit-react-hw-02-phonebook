import PropTypes from 'prop-types';
import { number } from 'prop-types';
export default function ContactIteam({list}) {
   return(<>
    {list.map(el => {
        return (
          <li key={el.id}>
            {el.name}:{el.number}
          </li>
        );
      }
      )}
      </>)
}
ContactIteam.propTypes={
list: PropTypes.arrayOf(
    id: PropTypes.string.isRequired,
    number : PropTypes.number.isRequired
)
}