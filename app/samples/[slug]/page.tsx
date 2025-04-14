"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { samples } from "@/lib/sampleData";
import mammoth from "mammoth";

export default function SampleViewerPage() {
  const { slug } = useParams();
  const sample = samples.find((s) => s.slug === slug);

  const [htmlContent, setHtmlContent] = useState<string>("Loading...");

  useEffect(() => {
    if (!sample) return;

    fetch(sample.file)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => {
        return mammoth.convertToHtml({ arrayBuffer });
      })
      .then((result) => {
        setHtmlContent(result.value); // result.value is HTML string
      })
      .catch((err) => {
        setHtmlContent("Failed to load document.");
        console.error(err);
      });
  }, [sample]);

  if (!sample) return notFound();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{sample.title}</h1>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}
