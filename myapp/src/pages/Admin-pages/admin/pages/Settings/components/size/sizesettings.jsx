import { useEffect, useState } from "react";
import "./sizesettings.scss"
import { deleteSize, getSizeList } from "../../../../../../../platform/api/size-api";
import { ManageSizeDialog } from "../manage-size-dialog/managesize";
import { DeleteDialog } from "../../../../../../../components/deleteDialog/delete";
import { Modal } from "../../../../../../../components/modals/modal";

export const SizeContent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [sizeList, setSizeList] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  useEffect(() => {
    getSizeListData();
  }, []);

  const getSizeListData = async () => {
    const result = await getSizeList();
    if (result.data) {
      setSizeList(result.data);
    }
  };

  const toggleModal = (value) => {
    setIsOpenModal(value);
    if (!value) {
      setSelectedItem(null);
    }
  };

  const handleDelete = async () => {
    await deleteSize(selectedItem._id);
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    getSizeListData();
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="sizeSection">
      <div className="settingsHeader">
        <div className="addOption">
          <button onClick={() => toggleModal(true)}>Add Size</button>
        </div>
      </div>

      {sizeList.length ? (
        <div className="sizeSettingList">
          {sizeList.map((item, index) => {
            return (
              <div key={index} className="sizeItem">
                <p>{item.name}</p>
                <div className="size-action">
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
          title={selectedItem ? "Edit size" : "Add size"}
        >
          <ManageSizeDialog
            updateSizesList={getSizeListData}
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
          title={"Delete Size"}
        >
          <DeleteDialog
            onClose={() => {
              setIsOpenDeleteModal(false);
              setSelectedItem(null);
            }}
            onDelete={() => handleDelete()}
            title={"Hastat uzum eq jnjel ays chap@"}
          />
        </Modal>
      ) : null}
    </div>
  );
};