import Link from "next/link";
import { samples } from "@/lib/sampleData";
import Header from "../components/Header";

export default function SamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-5xl mx-auto">
      <Header />
      <main className="">
        <h1 className="text-3xl font-bold mb-6 mt-24">Samples</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {samples.map((sample) => (
            <Link
              key={sample.slug}
              href={`/samples/${sample.slug}`}
              className="block p-4 bg-white shadow-md hover:shadow-xl transition rounded-xl border"
            >
              <h2 className="text-lg font-semibold">{sample.title}</h2>
              <p className="text-sm text-gray-500 mt-1">View Document</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}