import React, { useState, useRef } from "react"
import { observer } from "mobx-react"
import { authStore } from "../../../store"
import { useTranslation } from "react-i18next"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DeleteAddress from "../modal/delete-address"
import { isEmpty } from "lodash"
import statesData from "../../../const/statesData"
import { ToastMsgParams } from "../../../components/toast/toast-msg-params"
import Toast from "../../../components/toast/toast"
import { formatCountryName, formatAddress } from "../../../service/hepler"
import AddressBookForm from "./AddressBookForm"

const AddressBook = () => {
  const [t] = useTranslation()
  const formikRef = useRef<any>()

  const [addStatus, setAddStatus] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)
  const [deleteIndex, setDeleteIndex] = useState(-1)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteTitle, setDeleteTitle] = useState("")
  const [deleteInfo, setDeleteInfo] = useState<any>({} as any)
  const [toastParams, setToastParams] = useState<ToastMsgParams>({} as ToastMsgParams)
  const [states, setStates] = useState<any[]>(statesData["CA"])

  const resetStatuses = () => {
    setToastParams({
      msg: "",
      isError: false,
      isWarning: false,
      isInfo: false,
      isSuccess: false,
    })
  }

  return (
    <div className="account-details">
      <p className="details-title">{t(authStore.accountData.addressBook.title)}</p>
      {!addStatus && editIndex < 0 && (
        <button
          className="icon-button"
          onClick={() => {
            setEditIndex(-1)
            setAddStatus(true)
          }}
        >
          <span>
            <img src="/img/icons/plus.png" alt="plus" />
          </span>
        </button>
      )}
      <div className="account-details-viewer">
        {!addStatus ? (
          <>
            {authStore.accountData.addressBook.address.map((item, index) => {
              return (
                <div key={index} className="account-address">
                  <div className="account-address-header">
                    <p>{t(item.title)}</p>
                    {index !== editIndex && (
                      <div
                        onClick={() => {
                          setEditIndex(index)
                        }}
                      >
                        <EditOutlinedIcon style={{ color: "#CBBBFA" }} />
                      </div>
                    )}
                  </div>
                  {index !== editIndex && (
                    <div className="account-address-content">
                      <p>{item.info.name}</p>
                      <p>{formatAddress(item.info.address_1, item.info.address_2)}</p>
                      <p>{`${item.info.city}, ${item.info.state} ${item.info.postcode}`}</p>
                      <p>{formatCountryName(item.info.country)}</p>
                    </div>
                  )}
                  {index !== editIndex && (
                    <button
                      className="delete-address"
                      onClick={() => {
                        setDeleteTitle(item.title)
                        setDeleteInfo(item.info)
                        setDeleteIndex(index)
                        setDeleteModal(true)
                      }}
                    >
                      {t("Delete address")}
                    </button>
                  )}
                  {index === editIndex && (
                    <AddressBookForm
                      ref={formikRef}
                      states={states}
                      editIndex={editIndex}
                      addStatus={addStatus}
                      setStates={setStates}
                      setEditIndex={setEditIndex}
                      setAddStatus={setAddStatus}
                      setToastParams={setToastParams}
                    />
                  )}
                </div>
              )
            })}
          </>
        ) : (
          <div className="account-address">
            <div className="account-address-header">
              <p>{t("New Address")}</p>
            </div>
            <AddressBookForm
              ref={formikRef}
              states={states}
              editIndex={editIndex}
              addStatus={addStatus}
              setStates={setStates}
              setEditIndex={setEditIndex}
              setAddStatus={setAddStatus}
              setToastParams={setToastParams}
            />
          </div>
        )}
      </div>
      {deleteIndex >= 0 && !isEmpty(deleteInfo) && (
        <DeleteAddress
          open={deleteModal}
          setOpen={setDeleteModal}
          deleteIndex={deleteIndex}
          deleteTitle={deleteTitle}
          deleteInfo={deleteInfo}
        />
      )}
      <Toast params={toastParams} resetStatuses={resetStatuses} />
    </div>
  )
}

export default observer(AddressBook)
