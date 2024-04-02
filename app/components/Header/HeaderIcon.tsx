import { cn } from "@/app/utils";

export default function HeaderIcon({ icon: Icon, className }: { icon: React.ReactNode, className?: string }) {
  return (
    <div className={cn("bg-black/50 p-2 rounded-full", className)}>
        { Icon }
    </div>
  )
}
