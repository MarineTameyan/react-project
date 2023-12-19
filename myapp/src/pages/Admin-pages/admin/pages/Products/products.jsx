import "./products.scss";
import { useState, useEffect } from "react";
import { Modal } from "../../../../../components/modals/modal";
import { ManageProductDialog } from "./manage-product-dialog/manageproduct";
import { deleteProduct, getProductList } from "../../../../../platform/api/product-api";
import { DeleteDialog } from "../../../../../components/deleteDialog/delete";
import { PageHeader } from "../../../../../components/page-header/pageheader";


export const Products = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [productList, setProductList] = useState([]);
  

  const closeModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    getProductsData();
    console.log(productList);
  }, []);

  const handleEdit = (data) => {
    setSelectedItem(data);
    setIsOpenModal(true);
  };

  const getProductsData = async () => {
    const result = await getProductList();
    if (result.data) {
      console.log(result.data);
      setProductList(result.data);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleDelete = async () => {
    await deleteProduct(selectedItem._id);
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    getProductsData();
  };

  

  return (
    <div className="productSection">
      <PageHeader title={"Products"}/>
      <div className="productHeader">
        <div className="addOption">
          <button onClick={() => setIsOpenModal(true)}>Add Product</button>
        </div>

          {productList.length ? (
            <div className="product_List">
              {productList.map((item, index) => {
                return (
                  <div key={index} className="productItem">
                    <div  className="show-img">
                    <div className='image-test' style={{ backgroundImage: `url('${item.image}')` }}></div>
                    </div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>{item.price} $</p>
                    <p>{item.count}</p>
                    <div className="product-action">
                    <button
                      onClick={() => {
                        handleEdit(item)
                        setIsOpenModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => {
                      handleSelectItem(item);
                      setIsOpenDeleteModal(true);
                    }}>Delete</button>
                  </div>
                  </div>
                );
              })}
            </div>
          ) : null}

        {isOpenModal ? (
          <Modal onClose={closeModal} title={"Add Product"}>
            <ManageProductDialog
              onClose={closeModal}
              updateList={getProductsData}
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
            title={"Are you sure you want to remove the product"}
          />
        </Modal>
      ) : null}
      </div>
    </div>
  );
};