import "./delete.scss";

export const DeleteDialog = ({ onDelete, title, onClose }) => {
  return (
    <div className="delete-dialog-content G-flex-column">
      <h3>{title}</h3>
      <div className="delete-dialog-actions G-flex">
        <button onClick={onClose}> Cancel</button>
        <button onClick={onDelete}> Accept</button>
      </div>
    </div>
  );
};