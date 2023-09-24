import React from 'react'
import { TableContainer, TableHeader, TableRow, TableCell, UpdateButton, Images, Select, Option, } from './style.user'
import { usersType } from '@/globalTypes'

const DumbTable: React.FC<any> =
    ({data, editableIndex, setEditedValue, handleUpdate, setEditableIndex}) => (
        <TableContainer>
            <thead>
            <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Image</TableHeader>
                <TableHeader>Firstname</TableHeader>
                <TableHeader>Lastname</TableHeader>
                <TableHeader>Username</TableHeader>
                <TableHeader>Usertype</TableHeader>
                <TableHeader>User status</TableHeader>
            </tr>
            </thead>
            <tbody>
            {data.map((item: usersType) => (
                <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                        <Images src={item.imageUrl} alt={item.imageUrl}/>
                    </TableCell>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.userType}</TableCell>
                    <TableCell>
                        {editableIndex === item.id ? (
                            <Select onChange={(e) => setEditedValue(e.target.value)}>
                                <Option value='active'>Active</Option>
                                <Option value='block'>Block</Option>
                            </Select>
                        ) : (item.status)}
                    </TableCell>
                    <TableCell>
                        {editableIndex === item.id ? (
                            <UpdateButton onClick={() => handleUpdate(item.id)}>Update</UpdateButton>
                        ) : (
                            <UpdateButton onClick={() => setEditableIndex(item.id)}>Edit</UpdateButton>
                        )}
                    </TableCell>
                </TableRow>
            ))}
            </tbody>
        </TableContainer>
    )

export default DumbTable