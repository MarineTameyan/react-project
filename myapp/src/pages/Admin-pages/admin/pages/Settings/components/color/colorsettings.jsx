import { useEffect, useState } from "react";
import "./colorsettings.scss"
import { deleteColor, getColorList } from "../../../../../../../platform/api/color-api";
import { ManageColorDialog } from "../manage-color-dialog/managecolor";
import { DeleteDialog } from "../../../../../../../components/deleteDialog/delete";
import { Modal } from "../../../../../../../components/modals/modal";

export const ColorContent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [colorList, setColorList] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  useEffect(() => {
    getColorListData();
  }, []);

  const getColorListData = async () => {
    const result = await getColorList();
    if (result.data) {
      setColorList(result.data);
    }
  };

  const toggleModal = (value) => {
    setIsOpenModal(value);
    if (!value) {
      setSelectedItem(null);
    }
  };

  const handleDelete = async () => {
    await deleteColor(selectedItem._id);
    setIsOpenDeleteModal(false);
    setSelectedItem(null);
    getColorListData();
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="colorSection">
      <div className="settingsHeader">
        <div className="addOption">
          <button onClick={() => toggleModal(true)}>Add Color</button>
        </div>
      </div>

      {colorList.length ? (
        <div className="colorSettingList">
          {colorList.map((item, index) => {
            return (
              <div key={index} className="colorItem">
                <p>{item.colorName}</p>
                <p>{item.colorValue}</p>
                <div className="color-action">
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
          title={selectedItem ? "Edit Color" : "Add Color"}
        >
          <ManageColorDialog
            updateColorList={getColorListData}
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
          title={"Delete Color"}
        >
          <DeleteDialog
            onClose={() => {
              setIsOpenDeleteModal(false);
              setSelectedItem(null);
            }}
            onDelete={() => handleDelete()}
            title={"Hastat uzum eq jnjel ays guyn@"}
          />
        </Modal>
      ) : null}
    </div>
  );
};