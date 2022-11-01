/**
 * 플로팅 버튼 컴포넌트
 */

import Link from "next/link";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({
  children,
  href,
}: FloatingButtonProps) {
  return (
    <Link href={href}>
      <div
        className="fixed bottom-24 right-5 bg-orange-400 rounded-full shadow-xl p-4 text-white
                         hover:bg-orange-500 transition-colors border-transparent"
      >
        {children}
      </div>
    </Link>
  );
}
