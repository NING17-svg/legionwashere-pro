import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <PageShell locale={site.primaryLocale}>
      <section className="not-found-page">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>
          That address is not one of the Legion Was Here guides. The walkthrough is the
          usual place to start.
        </p>
        <Link className="btn" href="/">
          Back to Home
        </Link>
        <Link className="btn btn-secondary" href="/guides/walkthrough">
          Read the walkthrough
        </Link>
      </section>
    </PageShell>
  );
}
