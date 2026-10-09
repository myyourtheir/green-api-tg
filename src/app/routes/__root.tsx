import { createRootRoute, Outlet } from "@tanstack/react-router";
import { getIsAuth } from "@/entities/auth";
import { router } from "@/shared/router";
import { Providers } from "../Providers";

const RootLayout = () => (
  <>
    <Providers>
      <Outlet />
    </Providers>
  </>
);

export const Route = createRootRoute({
  component: RootLayout,
  loader: () =>
    getIsAuth()
      .then(() => {
        router.navigate({ to: "/chats" });
      })
      .catch(() => {
        router.navigate({ to: "/login" });
      }),
});
