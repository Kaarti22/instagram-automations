import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return <div className="min-h-screen flex items-center justify-center">
    <Button size={"lg"}>
      <Link href={"/dashboard"}>Login</Link>
    </Button>
  </div>
}
