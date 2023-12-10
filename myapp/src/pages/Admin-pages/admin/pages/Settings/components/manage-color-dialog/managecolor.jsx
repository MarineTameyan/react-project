import { useEffect, useState } from "react";
import { addColor, editColor } from "../../../../../../../platform/api/color-api";

export const ManageColorDialog = ({ manageData, updateColorList, onClose }) => {
  const [formData, setFormData] = useState({
    colorName: "",
    colorValue:"",
  });

  useEffect(() => {
    if (manageData) {
      setFormData({ ...formData, colorName: manageData.colorName });
      setFormData({ ...formData, colorValue: manageData.colorValue })
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    if (formData.colorName.length && formData.colorValue.length) {
      if (manageData) {
        await editColor(formData, manageData._id);
        updateColorList();
        onClose();
      } else {
        const result = await addColor(formData);
        if (result.data) {
          updateColorList();
          onClose();
        }
      }
    }
  };

  return (
    <div className="modal_body_categorie">
      <div className="content_box">
        <div className="add_name_box">
          <label>
            <input
              value={formData.colorName}
              type="text"
              placeholder="Create color"
              name="colorName"
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              value={formData.colorValue}
              type="color"
              name="colorValue"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="confirmButton">
        <button className="confirmBtn" onClick={handleClick}>
          {manageData ? "Save" : "ADD"}
        </button>
        <button className="confirmBtn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};