import { usersType } from '@/globalTypes'

export const handleUserName = (userId: number, users: usersType | null | any) => {
    if (!users?.length && users == null) {
        console.log('there is no data in the users');
        return;
    }

    const foundUser: any = users?.find((user: any) => user.id === userId);
    if (foundUser) {
        return foundUser.username;
    } else {
        console.log('There is no user with the specified ID');
        return null;
    }
}
