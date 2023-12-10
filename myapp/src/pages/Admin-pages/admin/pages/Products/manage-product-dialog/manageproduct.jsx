import { useEffect, useState } from "react";
import { addProduct, editProduct } from "../../../../../../platform/api/product-api";
import "./manageproduct.scss"

export const ManageProductDialog = ({ manageData, updateProductList, onClose }) => {
  const [formData, setFormData] = useState({
    productName : '',
    image: '',
    description: '',
    price: '',
    count: '',
    categoryId: '',
    size:'',
    color:'',
    });
    
    useEffect(() => {
        if (manageData) {
          setFormData(prevState => ({
            ...prevState,
            productName: manageData.productName,
            description: manageData.description,
            price: manageData.price,
            count: manageData.count,
            categoryId: manageData.categoryId,
            size: manageData.size,
            color: manageData.color,
          }));
        }
      }, [manageData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    if (formData.productName.length && formData.image.length && formData.description.length 
        && formData.price.length && formData.count.length && formData.categoryId.length 
        && formData.size.length && formData.color.length) {
      if (manageData) {
        await editProduct(formData, manageData._id);
        updateProductList();
        onClose();
      } else {
        const result = await addProduct(formData);
        if (result.data) {
            updateProductList();
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
        <div className="admin-productlist">
          <div className='image-test' style={{ backgroundImage: `url('${formData.image}')` }}></div>
        </div>
        <label>
          <input type="text" value={formData.productName} placeholder="Product Name" 
          onChange={handleChange} name={"productName"} />
        </label>
        <label>
          <input type="text" value={formData.description} placeholder="Description" 
          onChange={handleChange} name={"description"} />
        </label>
        <label>
          <input type="number" value={formData.price} placeholder="Price" 
          onChange={handleChange} name={"price"} />
        </label>
        <label>
          <input type="number" value={formData.count} placeholder="Count" 
          onChange={handleChange} name={"count"} />
        </label>
        <label>
          <input type="text" value={formData.categoryId} placeholder="Category ID" 
          onChange={handleChange} name={"categoryId"} />
        </label>
        <div>
            <label>
                <input type="checkbox" />
                <p>XS</p>
            </label>
            <label>
                <input type="checkbox" />
                <p>S</p>
            </label>
            <label>
                <input type="checkbox" />
                <p>M</p>
            </label>
            <label>
                <input type="checkbox" />
                <p>L</p>
            </label>
        </div>
        <select value={formData.color} onChange={handleChange} name="color">
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
        </select>
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