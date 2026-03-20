"use client"

import Button from "@/ds/components/atoms/button/Button"
import { clipboardCopy } from "@/lib/exportDocuments"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { Copy } from "lucide-react"

const MetaData = () => {
  const { metaDescription, hashtags } = useGeneratedArticle()

  const handleCopyMetaDescription = () => {
    if (!metaDescription) return

    clipboardCopy(metaDescription, "SEO Meta Description 복사 완료!")
  }

  const handleCopyHashTags = () => {
    if (!hashtags) return

    const joinedHashtags = hashtags.map((hashtag) => `#${hashtag}`).join(" ")
    clipboardCopy(joinedHashtags, "해시태그 복사 완료!")
  }

  return (
    <>
      {metaDescription && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              SEO Meta Description
            </span>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              onClick={handleCopyMetaDescription}
            >
              <Copy className="h-3.75 w-3.75" />
            </Button>
          </div>

          <div className="w-full cursor-default rounded-md bg-gray-100 px-3 py-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-blue-200">
            {metaDescription}
          </div>
        </div>
      )}

      {hashtags && hashtags.length > 0 && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Hashtags
            </span>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              onClick={handleCopyHashTags}
            >
              <Copy className="h-3.75 w-3.75" />
            </Button>
          </div>
          <div className="flex w-full cursor-default gap-2 overflow-x-auto rounded-md bg-gray-100 px-3 py-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-blue-200">
            {hashtags.map((hashtag, index) => (
              <span
                key={index}
                className="inline-flex cursor-default items-center gap-1 px-2 py-1 text-sm whitespace-nowrap"
              >
                #{hashtag}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default MetaData
