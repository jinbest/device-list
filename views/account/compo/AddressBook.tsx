import React, { useState, useEffect } from "react"
import { observer } from "mobx-react"
import { authStore } from "../../../store"
import { useTranslation } from "react-i18next"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import DeleteAddress from "../modal/delete-address"

const AddressBook = () => {
  const [t] = useTranslation()
  const delayTime = 2000

  const [addStatus, setAddStatus] = useState(false)
  const [editStatus, setEditStatus] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [address, setAddress] = useState(authStore.accountData.addressBook.address)
  const [edits, setEdits] = useState<boolean[]>(new Array(address.length).fill(false))
  const [deleteIndex, setDeleteIndex] = useState(-1)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteTitle, setDeleteTitle] = useState("")

  const handleButton = () => {
    if (!editStatus && !addStatus) {
      setAddStatus(true)
    } else if (!isSubmitting) {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setEditStatus(false)
        setAddStatus(false)
        setEdits(new Array(authStore.accountData.addressBook.address.length).fill(false))
      }, delayTime)
    } else {
      return
    }
  }

  useEffect(() => {
    setAddress(authStore.accountData.addressBook.address)
    setEdits(new Array(authStore.accountData.addressBook.address.length).fill(false))
  }, [authStore.accountData])

  return (
    <div className="account-details">
      <p className="details-title">{t(authStore.accountData.addressBook.title)}</p>
      <button className="icon-button" onClick={handleButton} disabled={isSubmitting}>
        <span>
          {!addStatus && !editStatus ? (
            <img src="/img/icons/plus.png" alt="plus" />
          ) : !isSubmitting ? (
            <img src="/img/icons/save-blue.png" alt="save-blue" />
          ) : (
            <img src="/img/icons/save-grey.png" alt="save-grey" />
          )}
        </span>
      </button>
      {!addStatus && (
        <>
          {address.map((item, index) => {
            return (
              <div key={index} className="account-address">
                <div className="account-address-header">
                  <p>{t(item.title)}</p>
                  {!edits[index] && (
                    <div
                      onClick={() => {
                        edits[index] = true
                        setEdits([...edits])
                        setEditStatus(true)
                      }}
                    >
                      <EditOutlinedIcon style={{ color: "#CBBBFA" }} />
                    </div>
                  )}
                </div>
                <div className="account-address-content">
                  <p>{item.info.name}</p>
                  <p>{item.info.address_1}</p>
                  <p>{`${item.info.city}, ${item.info.state} ${item.info.postcode}`}</p>
                  <p>{item.info.country}</p>
                </div>
                <button
                  className="delete-address"
                  onClick={() => {
                    setDeleteTitle(item.title)
                    setDeleteIndex(index)
                    setDeleteModal(true)
                  }}
                >
                  {t("Delete address")}
                </button>
              </div>
            )
          })}
        </>
      )}
      {deleteIndex >= 0 && (
        <DeleteAddress
          open={deleteModal}
          setOpen={setDeleteModal}
          deleteIndex={deleteIndex}
          deleteTitle={deleteTitle}
        />
      )}
    </div>
  )
}

export default observer(AddressBook)
