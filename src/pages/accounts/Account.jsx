import React, { useEffect, useState } from 'react'
import { adminService } from '../../../services/Vlearning'
import { useDispatch } from 'react-redux'
import { turnOffLoading } from '../../redux/loadingSlice'

export default function Account() {
  const [users, setUsers] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("DATA_USER"));
    if (dataUser) {
      setUsers(dataUser.taiKhoan);
    }
    adminService.getUserDetailByAccount(dataUser.taiKhoan).then((result) => {
      setUsers(result.data)
      dispatch(turnOffLoading())
    }).catch((err) => {
      dispatch(turnOffLoading())
    })
  }, [])
  return (
    <div>
       <p> Đây là account </p>
    </div>
  )
}
