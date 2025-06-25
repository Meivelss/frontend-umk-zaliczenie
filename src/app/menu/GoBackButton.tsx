import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GoBackButton() {
  return (
    <Link href={`/`} className="mt-4 block group transition hover:scale-105">
      <button className="font-funnelSans text-secondary flex">
        <ArrowLeft/>
        <span>Powrót</span>
      </button>
    </Link>
  )
}