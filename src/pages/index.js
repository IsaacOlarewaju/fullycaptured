import DashboardComponent, { DashboardBody } from "@/components/dashboard";
import { ReduceBrowserSize } from "../components/dashboard/ReduceBrowserSize";

export default function Index() {
  return (
    <div>
      <ReduceBrowserSize />
      <DashboardComponent />
      <DashboardBody />
    </div>
  );
}
