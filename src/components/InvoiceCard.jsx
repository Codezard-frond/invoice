import { useEffect, useState } from "react";
import { getInvoices } from "../request";
import CardSkleton from "./CardSkleton";
import Mycard from "../components/MyCard";
import { useAppStore } from "../lib/zustend";
import NotFound from "./NotFound";
function InvoiceCard() {
  const { fillter } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInvoices("/invoices", fillter.trim().replaceAll(" ", ""))
      .then((res) => {
        setInvoices(res);
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fillter]);
  if (loading) {
    return <CardSkleton />;
  }
  if (invoices.length === 0) {
    return <NotFound />;
  }
  if (error) {
    return (
      <h1 className="text-3xl text-center text-red-500">
        Qayerdadur hatolik ketdi tez orada yech topamz:)
      </h1>
    );
  }

  return (
    <div className="base_container flex flex-col gap-[16px]">
      {invoices.map((el, index) => {
        const { createdAt, clientAddress, clientName, total, status, id } = el;
        return (
          <Mycard
            createdAt={createdAt}
            postCode={clientAddress.postCode}
            clientName={clientName}
            total={total}
            status={status}
            key={el.id}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default InvoiceCard;
