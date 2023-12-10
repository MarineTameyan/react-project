import { useEffect, useState } from "react";
import { addCategory, editCategory } from "../../../../../../platform/api/category-api";
import "./managecategory.scss"

export const ManageCategoryDialog = ({ manageData, updateCategoryList, onClose }) => {
  const [formData, setFormData] = useState({
    categoryName: '',
    image: ''
  });
  useEffect(() => {
    if (manageData) {
      setFormData({ ...formData, categoryName: manageData.categoryName });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, categoryName: e.target.value });
  };

  const handleClick = async () => {
    if (formData.categoryName.length && formData.image.length) {
      if (manageData) {
        await editCategory(formData, manageData._id);
        updateCategoryList();
        onClose();
      } else {
        const result = await addCategory(formData);
        if (result.data) {
          updateCategoryList();
          onClose();
        }
      }
    }
  };

  function encodeImageFileAsURL(element) {
    var file = element.target.files[0];
    console.log(file) 
    if (file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setFormData({ ...formData, image: reader.result })
      }
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="modal_body_categorie">
      <div className="content_box">
        <div className="add_name_box">
        <label>
          <input type="file" hidden onChange={encodeImageFileAsURL}/>
        </label>
        <div className="admin-categorylist">
          <div className='image-test' style={{ backgroundImage: `url('${formData.image}')` }}></div>
        </div>
        <label>
          <input type="text" value={formData.categoryName} placeholder="Category Name" onChange={handleChange} 
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