import Link from "next/link";

export const DashboardWriteNewMessage = () => {
  return (
    <button className="write-new-message">
      <Link href={"/writeNew"}>
        <img src="/images/fn-write2.png"></img>
      </Link>
    </button>
  );
};
