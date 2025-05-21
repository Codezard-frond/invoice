import { ArrowRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { StatustBadge } from "./ui/StatustBadge"; 
import { useNavigate } from "react-router-dom";

function MyCard({
  postCode = "RT3080",
  createdAt = "Due 01 Oct 2021",
  clientName = "John Morrison",
  total = "14,002.33",
  status = "draft",
}) {
  const navigate = useNavigate()
  return (
    <Card onClick={() => navigate("/details")} className={"border-2 border-transparent transition-colors hover:border-amber-300"}>
      <CardHeader>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <CardTitle>#{postCode}</CardTitle>
          <CardDescription>{createdAt}</CardDescription>
          <span>{clientName}</span>
          <span>${total}</span>
          <StatustBadge status={status} />
          <ArrowRight className="text-[#7C5DFA]" />
        </div>
      </CardHeader>
    </Card>
  );
}

export default MyCard;
