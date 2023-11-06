import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-56 mt-10">
      <p className="text-2xl lg:text-5xl">
        Oops , Sorry this page is under construction.
      </p>
      <Link
        href="/"
        className="w-40 h-14 rounded-full bg-text-color mt-20 flex items-center justify-center hover:bg-iconic-green hover:cursor-pointer"
      >
        <p className="text-section-background">Back to Home</p>
      </Link>
    </div>
  );
}
