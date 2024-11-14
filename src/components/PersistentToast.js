'use client'

import React, { useEffect } from 'react'
import { useToast } from "@/src/components/ui/use-toast"

export function PersistentToast() {
  const { toast } = useToast()

  useEffect(() => {
    toast({
      title: "Aviso",
      description: "Imagens e textos meramente ilustrativos",
      duration: Infinity,
    })
  }, [])

  return null
}