import axiosAuth from 'app/axiosAuth';
import { API_URL } from 'app/config';
import { UserModel } from 'app/models';
import { IFavoritesModel } from 'app/models/favorite/Favorites';

// auth
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/token`;
export const LOGIN_URL = `${API_URL}/auth`;
export const REGISTER_URL = `${API_URL}/auth/new`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`;

// edit
export const REQUEST_VERIFICATION_URL = `${API_URL}/user/verification`;
export const REQUEST_EDIT_URL = `${API_URL}/user/edit`;

// favorite
export const REQUEST_TO_FAVOR = `${API_URL}/user/addfavorites`;
export const GET_FAVOR = `${API_URL}/user/getfavorites`;

// count
export const GET_COMPANIES_COUNT = `${API_URL}/user/getcountfavoritescarpark`;
export const GET_CARS_COUNT = `${API_URL}/user/getcountfavoritescar`;
export const GET_ORDERS_COUNT = `${API_URL}/user/getcountorder`;
export const GET_REVIEWS_COUNT = `${API_URL}/user/getcountreviews`;

// Server should return AuthModel
export async function login(email: string, password: string) {
  return await axiosAuth.post(LOGIN_URL, { email, password });
}

// Server should return AuthModel
export function register(
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  phone: string,
  ref_code: string | string[] | undefined,
) {
  return axiosAuth.post<UserModel>(REGISTER_URL, {
    email,
    password,
    firstname,
    lastname,
    phone,
    ref_code,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axiosAuth.post<{ result: boolean }>(REQUEST_PASSWORD_URL, { email });
}

export async function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axiosAuth.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL);
}

export async function reset(email: string) {
  return { data: 'отправил' };
}

export async function requestVerification(options: any) {
  return axiosAuth.post<UserModel>(REQUEST_VERIFICATION_URL, options);
}

export async function requestEdit(options: any) {
  return axiosAuth.post<UserModel>(REQUEST_EDIT_URL, options);
}

export function requestAddToFavor(id: number) {
  return axiosAuth.get<IFavoritesModel>(REQUEST_TO_FAVOR, {
    params: {
      id_content: id,
    },
  });
}

export function getUserFavor() {
  return axiosAuth.get<IFavoritesModel>(GET_FAVOR);
}

export function getCompaniesCount() {
  return axiosAuth.get<number>(GET_COMPANIES_COUNT);
}

export function getCarsCount() {
  return axiosAuth.get<number>(GET_CARS_COUNT);
}

export function getOrdersCount() {
  return axiosAuth.get<number>(GET_ORDERS_COUNT);
}

export function getReviewsCount() {
  return axiosAuth.get<number>(GET_REVIEWS_COUNT);
}
