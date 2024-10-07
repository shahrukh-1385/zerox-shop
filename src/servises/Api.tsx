import axios from "axios";

const client = axios.create({
   baseURL: "http://localhost:3000/"
})

export async function getPruducts() {
   const Res = await client("/Product")
   return Res.data;
}

export async function getPruductByID(id: string | number) {
   const Res = await client(`/Product/${id}`);
   return Res.data;
}