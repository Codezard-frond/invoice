import { buttonVariants } from "./button";

export function StatustBadge({ status = "draft" }) {
  const style = {
    draft: {
      dote: "bg-[rgba(55,59,83,1)]",
      text: "text-[#373B53]",
      bg: "rgba(55,59,83,0.05)",
    },
    paid: {
      dote: "bg-[rgba(51,214,159,1)]",
      text: "text-[#33D69F]",
      bg: "rgba(51,214,159,0.05)",
    },
    pending: {
      dote: "bg-[rgba(255,143,0,1)]",
      text: "text-[#FF8F00]",
      bg: "rgba(255,143,0,0.05)",
    },
  };

  return (
    <span
      className={`${buttonVariants({
        variant: "outline",
      })} inline-flex items-center gap-2 px-3 py-1 rounded-md min-w-[104px]`}
      style={{ backgroundColor: style[status]?.bg }}
    >
      <span className={`w-2 h-2 rounded-full ${style[status]?.dote}`} />
      <span className={`capitalize ${style[status]?.text}`}>{status}</span>
    </span>
  );
}
