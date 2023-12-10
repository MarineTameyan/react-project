import { useEffect, useState } from "react";
import "./category.scss";
import { deleteCategory, getCategoryList } from "../../../../../platform/api/category-api";
import { ManageCategoryDialog } from "./manage-category-dialog/managecategory";
import { DeleteDialog } from "../../../../../components/deleteDialog/delete";
import { Modal } from "../../../../../components/modals/modal";
import { PageHeader } from "../../../../../components/page-header/pageheader";

export const Category = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

useEffect(()=>{
  getCategoryListData()
},[])

  const getCategoryListData = async()=>{
    const result = await getCategoryList()
    if(result){
      setCategoryList(result.data)
    }
  }

  const toggleModal = (value) => {
    setIsOpenModal(value);
    if (!value) {
      setSelectedItem(null);
    }
  };


  const handleDelete = async () => {
    await deleteCategory(selectedItem._id);
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    getCategoryListData();
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };



  return <div className="categorySection">
    <PageHeader title={"Category"} />
  <div className="categoryHeader">
    <div className="addOption">
      <button onClick={() => toggleModal(true)}>Add Category</button>
    </div>
  </div>

  {categoryList.length ? (
    <div className="categoryList">
      {categoryList.map((item, index) => {
        return (
          <div key={index} className="categoryItem">
            <div className="show-img">
              <div className='image-test' style={{ backgroundImage: `url('${item.image}')` }}></div>
              <p>{item.categoryName}</p>
            </div>
            <div className="category-action">
              <button
                onClick={() => {
                  handleSelectItem(item);
                  setIsOpenModal(true);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleSelectItem(item);
                  setIsOpenDeleteModal(true);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : null}

  {isOpenModal ? (
    <Modal
      onClose={() => toggleModal(false)}
      title={selectedItem ? "Edit category" : "Add category"}
    >
      <ManageCategoryDialog
        updateCategoryList={getCategoryListData}
        onClose={() => toggleModal(false)}
        manageData={selectedItem}
      />
    </Modal>
  ) : null}
  {isOpenDeleteModal ? (
    <Modal
      onClose={() => {
        setIsOpenDeleteModal(false);
        setSelectedItem(null);
      }}
      title={"Delete Category"}
    >
      <DeleteDialog
        onClose={() => {
          setIsOpenDeleteModal(false);
          setSelectedItem(null);
        }}
        onDelete={() => handleDelete()}
        title={"Hastat uzum eq jnjel ays categorian"}
      />
    </Modal>
  ) : null}
</div>
};

