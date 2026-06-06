import Image from "next/image";
import Link from "next/link";
import { Globe, Send, Share2 } from "lucide-react";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="w-full bg-tertiary py-[var(--spacing-section)] text-on-tertiary">
      <div className="container-site grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-display text-headline-md text-on-tertiary">
              {siteConfig.name}
            </span>
          </div>
          <p className="mb-8 text-sm leading-relaxed text-on-tertiary/70">
            Rooted in Nature, Crafted for Wellness. Bringing indigenous West
            African wisdom to the global stage.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.instagram}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white/20"
              aria-label="Share"
            >
              <Share2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-lg font-bold">Quick Links</h4>
          {footerNavigation.quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-tertiary/70 transition-colors hover:text-on-tertiary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-lg font-bold">Support</h4>
          {footerNavigation.support.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-tertiary/70 transition-colors hover:text-on-tertiary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="mb-2 text-lg font-bold">Newsletter</h4>
          <p className="mb-4 text-sm text-on-tertiary/70">
            Stay updated with our latest organic finds and wellness tips.
          </p>
          <form className="flex" aria-label="Newsletter signup">
            <input
              type="email"
              placeholder="Email"
              aria-label="Email address"
              className="w-full rounded-l-lg border-none bg-white/10 p-3 text-white placeholder:text-white/40 focus:ring-1 focus:ring-primary-fixed focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-lg bg-primary-fixed px-4 text-primary transition-transform active:scale-95"
              aria-label="Subscribe"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="container-site mt-16 border-t border-white/5 pt-8 text-center text-xs text-on-tertiary/50">
        © {new Date().getFullYear()} {siteConfig.name}. Rooted in Nature,
        Crafted for Wellness.
      </div>
    </footer>
  );
}
