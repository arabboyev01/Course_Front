import ReviewForm from '@/components/ReviewForm'
import Login from '@/components/Login'
import React from 'react'
import { useSelector } from 'react-redux'
import { Authorized } from '@/store/Selector'

export default function ReviewCreation() {
    const isAuth = useSelector(Authorized)
    if (!isAuth) return <Login/>

    return <ReviewForm/>
}