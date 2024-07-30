"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/login"}>login</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
