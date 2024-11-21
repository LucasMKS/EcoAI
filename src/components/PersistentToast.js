'use client'

import React, { useEffect } from 'react'
import { useToast } from "@/src/components/ui/use-toast"

export function PersistentToast() {
  const { toast } = useToast()

  useEffect(() => {
    toast({
      title: "Aviso",
      description: "Algumas imagens e textos são meramente ilustrativos",
      duration: Infinity,
    })
  }, [])

  return null
}