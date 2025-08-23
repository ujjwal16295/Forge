import { LoginHeader } from "@/components/LoginHeader";

export default function ApikeyLayout({ children }) {
  return (
    <>
      <LoginHeader/>
      {children}
    </>
  );
}
