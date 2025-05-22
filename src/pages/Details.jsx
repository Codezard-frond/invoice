import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../request'
import CardSkleton from '../components/CardSkleton';

export default function Details() {
  const {id} = useParams()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInvoice("/invoices",id)
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
    return <CardSkleton />;
  }
  return (
    <div>{id}</div>
  )
}

 