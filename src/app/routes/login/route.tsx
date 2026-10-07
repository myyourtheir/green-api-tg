import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/pages/login-page";

const RouteComponent = () => {
  return <LoginPage />;
};

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});
