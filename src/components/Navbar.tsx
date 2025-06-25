"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-16 bg-white shadow-md px-12 lg:px-40 py-4 flex justify-between items-center fixed z-100">
      <div className="text-2xl font-bold text-burlyWood">Catering</div>
      <ul className="hidden md:flex gap-6 text-dark font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/kontakt">Kontakt</Link></li>
      </ul>

      <button className="md:hidden text-dark" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-50">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/menu" onClick={() => setOpen(false)}>Menu</Link></li>
          <li><Link href="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link></li>
        </ul>
      )}
    </nav>
  );
}
