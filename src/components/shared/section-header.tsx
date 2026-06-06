import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-label-caps mb-2 block uppercase tracking-widest",
            dark ? "text-primary-fixed/80" : "text-secondary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-display-lg",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-body-lg",
            align === "center" && "mx-auto",
            dark ? "text-white/60" : "text-on-surface-variant"
          )}
        >
          {description}
        </p>
      )}
      {align === "center" && !dark && (
        <div className="mx-auto mt-6 h-1 w-20 bg-primary" />
      )}
    </div>
  );
}
