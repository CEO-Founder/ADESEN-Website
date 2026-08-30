import Script from "next/script";

/**
 * Analytics placeholder.
 *
 * Nothing loads until NEXT_PUBLIC_GA_ID (Google Analytics 4) is set in
 * your environment variables (e.g. Vercel Project Settings → Environment
 * Variables). To use Plausible instead, replace this component's body
 * with Plausible's script tag and drop the gtag calls.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
