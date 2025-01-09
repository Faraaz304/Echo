import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Echo Voice Assistant Landing page</p>
      
      {/* Link to Login Page */}
      <Link href="/login">
        <p>Login</p>
      </Link>

      {/* Link to Signup Page */}
      <Link href="/signup">
        <p>Signup</p>
      </Link>
    </>
  );
}
