"use client"

import { cn } from "@/lib/utils"
import { GeneratedPreviewProps } from "./GeneratedPreview.types"
import Skeleton from "../../atoms/skeleton/Skeleton"
import { Text } from "../../atoms/text/Text"
import Button from "../../atoms/button/Button"
import { Copy } from "lucide-react"

const GeneratedPreview = ({
  title,
  content,
  hashtags,
  metaDescription,
  isLoading = false,
  className,
}: GeneratedPreviewProps) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="mt-8 min-h-8">
        <Text
          variant="h1"
          className="flex h-8 flex-wrap items-center text-2xl font-bold break-all text-gray-900 dark:text-white"
        >
          {title}
        </Text>
      </div>

      <div className="min-h-12 w-full">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              SEO Meta Description
            </span>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              disabled={isLoading}
              onClick={metaDescription?.click}
            >
              <Copy className="h-3.75 w-3.75" />
            </Button>
          </div>
          {isLoading ? (
            <Skeleton className="h-16 w-full" />
          ) : (
            <div className="cursor-default rounded-md bg-gray-100 px-3 py-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-blue-200">
              {metaDescription?.text}
            </div>
          )}
        </div>
      </div>

      <div className="flex min-h-7 flex-wrap gap-2">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Hashtags
            </span>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              disabled={isLoading}
              onClick={hashtags?.click}
            >
              <Copy className="h-3.75 w-3.75" />
            </Button>
          </div>
          {isLoading ? (
            <Skeleton className="h-13 w-full" />
          ) : (
            <div className="flex w-full cursor-default gap-2 overflow-x-auto rounded-md bg-gray-100 px-3 py-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-blue-200">
              {hashtags?.array.map((hashtag, index) => (
                <span
                  key={index}
                  className="inline-flex cursor-default items-center gap-1 px-2 py-1 text-sm whitespace-nowrap"
                >
                  #{hashtag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="min-h-100 border-t border-slate-100 pt-6 dark:border-slate-800">
        {isLoading ? (
          <div className="rounded-lg border border-[#dadde6] dark:border-[#494c56]">
            <div className="h-11.25 rounded-t-lg border-b border-[#ebedf2] bg-[#f7f9fc] dark:border-[#303238] dark:bg-[#232428]"></div>
            <div className="space-y-4 p-2">
              <Skeleton className="h-7 w-10" />
              <Skeleton className="h-7 w-11/12" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-10/12" />
              <div className="h-2" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-9/12" />
            </div>
          </div>
        ) : (
          content
        )}
      </div>
    </div>
  )
}

export default GeneratedPreview
