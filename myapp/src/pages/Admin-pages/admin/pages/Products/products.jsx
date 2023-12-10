import { useEffect, useState } from "react";
import "./products.scss";
import { deleteProduct, getProductList } from "../../../../../platform/api/product-api";
import { ManageProductDialog } from "./manage-product-dialog/manageproduct";
import { DeleteDialog } from "../../../../../components/deleteDialog/delete";
import { Modal } from "../../../../../components/modals/modal";
import { PageHeader } from "../../../../../components/page-header/pageheader";

export const Products = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [productList, setProductList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

useEffect(()=>{
  getProductListData()
},[])

  const getProductListData = async()=>{
    const result = await getProductList()
    if(result){
      setProductList(result.data)
    }
  }

  const toggleModal = (value) => {
    setIsOpenModal(value);
    if (!value) {
      setSelectedItem(null);
    }
  };


  const handleDelete = async () => {
    await deleteProduct(selectedItem._id);
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    getProductListData();
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };



  return <div className="productSection">
    <PageHeader title={"Products"} />
  <div className="productHeader">
    <div className="addOption">
      <button onClick={() => toggleModal(true)}>Add Products</button>
    </div>
  </div>

  {productList.length ? (
    <div className="product_List">
      {productList.map((item, index) => {
        return (
          <div key={index} className="productItem">
            <div className="show-productimg">
              <div className='image-test' style={{ backgroundImage: `url('${item.image}')` }}></div>
              <p>{item.productName}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.count}</p>
              <p>{item.categoryID}</p>
              <p>{item.size}</p>
              <p>{item.color}</p>
            </div>
            <div className="product-action">
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
      title={selectedItem ? "Edit products" : "Add products"}
    >
      <ManageProductDialog
        updateProductList={getProductListData}
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
      title={"Delete Product"}
    >
      <DeleteDialog
        onClose={() => {
          setIsOpenDeleteModal(false);
          setSelectedItem(null);
        }}
        onDelete={() => handleDelete()}
        title={"Hastat uzum eq jnjel ays product@"}
      />
    </Modal>
  ) : null}
</div>
};