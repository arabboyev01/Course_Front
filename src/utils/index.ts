import jwt_decode from "jwt-decode";


export const VerifyToken = (token: any) => {
    return jwt_decode(token)
}

export const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
}
