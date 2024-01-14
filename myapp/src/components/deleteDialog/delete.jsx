import "./delete.scss";


export const DeleteDialog = ({ onDelete, title, onClose, disableDeleteText, }) => {

  return (
    <div className="delete-dialog-content G-flex-column">
      {!disableDeleteText ? <h3>{title}</h3> : null}
      {disableDeleteText ? <h3>{disableDeleteText}</h3> : null}

      <div className="delete-dialog-actions G-flex">
        <button onClick={onClose}>Cancel</button>
        {!disableDeleteText ? (
          <button className="accept" onClick={onDelete}>
            Accept
          </button>
        ) : null}
      </div>
    </div>
  );
};