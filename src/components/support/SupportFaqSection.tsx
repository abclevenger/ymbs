// FAQ accordion section for the Support portal.
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { faqs } from "./supportData";

export function SupportFaqSection() {
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      faq.q.toLowerCase().includes(q) ||
      faq.a.toLowerCase().includes(q) ||
      faq.category?.toLowerCase().includes(q)
    );
  });

  return (
    <section
      id="faq-section"
      className="py-20 bg-light-section border-t border-border"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 mb-6">
            Quick answers to common support queries.
          </p>
          <div className="relative max-w-xl mx-auto md:hidden">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border-border text-zinc-900 pl-12 py-3 rounded-full focus-visible:ring-primary"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-border">
            <Search className="w-10 h-10 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-500 font-medium">
              No FAQs match "{search}".
            </p>
            <p className="text-zinc-400 text-sm mt-2">
              Try a different search or submit a ticket below.
            </p>
          </div>
        ) : (
          <Accordion
            type="single"
            collapsible
            className="w-full bg-white rounded-2xl border border-border p-4 shadow-sm"
          >
            {filtered.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors px-4">
                  <div className="flex items-center gap-3">
                    {faq.category && (
                      <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    )}
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 px-4 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}
