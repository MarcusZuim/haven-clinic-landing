import { assetUrl } from "../../lib/assets";

type BrandLogoProps = {
  variant: "isotipo" | "isologo";
  className?: string;
  decorative?: boolean;
};

const ASSETS = {
  isotipo: {
    src: assetUrl("images/brand/isotipo01-web.png"),
    width: 256,
    height: 256,
  },
  isologo: {
    src: assetUrl("images/brand/isologo01-web.png"),
    width: 1024,
    height: 1280,
  },
} as const;

export function BrandLogo({
  variant,
  className = "",
  decorative = false,
}: BrandLogoProps) {
  const asset = ASSETS[variant];

  return (
    <img
      className={["brand-mark", `brand-mark--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      src={asset.src}
      alt={decorative ? "" : "Haven Clinic"}
      width={asset.width}
      height={asset.height}
      decoding="async"
    />
  );
}
