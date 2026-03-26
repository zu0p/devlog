import { cn } from "@/lib/utils"
import { SkeletonProps } from "./Skeleton.types"

const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={cn(
      "animate-pulse rounded bg-slate-100 dark:bg-slate-800",
      className
    )}
  />
)

export default Skeleton
