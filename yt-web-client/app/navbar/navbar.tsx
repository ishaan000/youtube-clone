"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import SignIn from "./sign-in";
import { onAuthStateChangeHelper } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";

export default function Navbar() {
  // Init user state
  const [user, setUser] = useState<User | null>(null);

  // This hook will render some JS just a single time once this function actually loads
  useEffect(() => {
    const unsubscribe = onAuthStateChangeHelper((user) => {
      setUser(user);
    });

    // Cleanup
    return () => unsubscribe();
  });

  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          width={90}
          height={20}
          src={"/youtube-logo.svg"}
          alt="YouTube Logo"
        />
      </Link>
      <SignIn user={user} />
    </nav>
  );
}
