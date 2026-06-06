"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 glass-nav shadow-sm">
      <nav
        className="container-site flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform active:scale-95"
        >
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} Logo`}
            width={48}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
          <span className="font-display text-headline-md tracking-tight text-primary">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-body-md transition-colors duration-300",
                  isActive
                    ? "border-b-2 border-primary pb-1 font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Contact Us</Link>
        </Button>

        <button
          type="button"
          className="text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-outline-variant/30 bg-surface/95 px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-lg font-medium",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-on-surface-variant"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
