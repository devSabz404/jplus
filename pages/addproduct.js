import excuteQuery from "../lib/db";
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import EntryForm from "../components/productEntry";

export default function Addproduct() {

  return(
    <>
    <Layout/>
    <EntryForm/>
    </>
  )


}