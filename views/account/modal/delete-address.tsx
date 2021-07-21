import React, { useState } from "react"
import Modal from "@material-ui/core/Modal"
import { useTranslation } from "react-i18next"
import CloseIcon from "@material-ui/icons/Close"
import { IconButton } from "@material-ui/core"
import { observer } from "mobx-react"
import { authStore } from "../../../store"
import Loading from "../../../components/Loading"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import _ from "lodash"

type Props = {
  open: boolean
  setOpen: (val: boolean) => void
  deleteIndex: number
  deleteTitle: string
}

const DeleteAddress = ({ open, setOpen, deleteIndex, deleteTitle }: Props) => {
  const [t] = useTranslation()
  const delayTime = 2000

  const [deleted, setDeleted] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleClose = () => {
    setOpen(false)
    setDeleted(false)
  }

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      setDeleted(true)
      const accountData = _.cloneDeep(authStore.accountData),
        address = accountData.addressBook.address
      address.splice(deleteIndex, 1)
      accountData.addressBook.address = address
      authStore.setAccountData(accountData)
      setIsDeleting(false)
    }, delayTime)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="my-account-modal"
    >
      <div className="my-account-modal-container">
        <IconButton className="icon-button" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        {deleted && <CheckCircleIcon style={{ color: "#A0E744", width: "90px", height: "90px" }} />}
        {!deleted ? (
          <h1>{`${t("Delete")} ${t(deleteTitle)}`}</h1>
        ) : (
          <h1 style={{ margin: "15px 0 20px" }}>{t("Success!")}</h1>
        )}
        {!deleted ? (
          <>
            <p className="account-modal-content" style={{ margin: "20px 0" }}>
              {`${t("Are you sure you want to delete the following")} ${t(deleteTitle)}?`}
            </p>
          </>
        ) : (
          <>
            <p className="account-modal-content" style={{ margin: "5px" }}>
              {`${t("The following")} ${t(deleteTitle)} ${t("has been deleted from your account")}`}
              :
            </p>
          </>
        )}
        {!deleted && (
          <div className="flex flex-wrap">
            <button className="filled-modal-button" onClick={handleDelete}>
              {isDeleting ? (
                <span>
                  <Loading />
                </span>
              ) : (
                t("Yes, Delete")
              )}
            </button>
            <button className="outline-modal-button" onClick={handleClose}>
              {t("No, Don't Delete")}
            </button>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default observer(DeleteAddress)