import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-56 mt-10">
      <p className="text-2xl lg:text-5xl">
        Oops , Sorry this page is under construction.
      </p>
      <div className="w-40 h-14 rounded-full bg-text-color mt-20 flex items-center justify-center hover:bg-iconic-green hover:cursor-pointer">
        <Link href="/" className="text-section-background">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
