import { memo } from "react";
import PropTypes from "prop-types";
import Button from "../../../../shared/components/Button";

import s from "./ContactItem.module.css";

const ContactItem = (props) => {

  const { name, number, onClick, id } = props;

  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        {name} : {number}
      </div>

      <Button
        className={s.button}
        text="Detele"
        type="button"
        onClick={() => {onClick(id);}}
      />
    </li>
  );
}
ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ContactItem);
