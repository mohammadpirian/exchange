import Image from "next/image";

export default function BannerSide() {
  return (
    <div className="w-full flex justify-end">
      <Image src="loginBanner.svg" alt="Logo" width={428} height={428} />
    </div>
  );
}
