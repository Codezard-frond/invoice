import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInvoice } from "../request";
import CardSkleton from "../components/CardSkleton";
import DetailsSkleton from "../components/ui/DetailsSketon";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Details() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invoice, setInvoice] = useState([]);
  console.log(invoice);
  useEffect(() => {
    setLoading(true);
    getInvoice("/invoices", id)
      .then((res) => {
        setInvoice(res);
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (error) {
    return (
      <h1 className="text-3xl text-center text-red-500">
        Qayerdadur hatolik ketdi tez orada yech topamz:)
      </h1>
    );
  }
  if (loading) {
    return <DetailsSkleton />;
  }

  return <div className="base_container">
   <Button className={"mt-[64px]"} variant="ghost" onClick={() => navigate("/")}><ArrowLeft/> Go back</Button>
  </div>;
}
