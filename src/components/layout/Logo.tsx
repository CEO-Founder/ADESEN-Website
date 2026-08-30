import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/adesen-logo.png";

// ADESEN's own emblem already carries the wordmark, so it's rendered
// alone rather than paired with a separate text label.
export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="flex items-center shrink-0" aria-label="ADESEN — home">
      <Image src={logo} alt="ADESEN" className="h-12 w-auto sm:h-14" priority={priority} />
    </Link>
  );
}
