import { LoginForm } from "@/entities/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <Card className="w-[min(24.5rem,100%)]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            <h1>Sign in</h1>
          </CardTitle>
          <CardDescription>
            Please enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
};
