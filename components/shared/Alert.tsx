"use client"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

export function InfoAlert() {
  return (
    <Alert>
      <Info className="h-4 w-4 text-blue-500" />
      <AlertTitle>معلومة</AlertTitle>
      <AlertDescription>
        هذا تنبيه معلوماتي بسيط يدعم الوضع الداكن والفاتح.
      </AlertDescription>
    </Alert>
  )
}

export function SuccessAlert() {
  return (
    <Alert className="border-green-500/50">
      <CheckCircle className="h-4 w-4 text-green-500" />
      <AlertTitle>تم بنجاح</AlertTitle>
      <AlertDescription>
        العملية تمت بنجاح بدون أي مشاكل.
      </AlertDescription>
    </Alert>
  )
}

export function WarningAlert() {
  return (
    <Alert className="border-amber-500/50">
      <AlertTriangle className="h-4 w-4 text-amber-500" />
      <AlertTitle>تحذير</AlertTitle>
      <AlertDescription>
        يرجى مراجعة البيانات المدخلة.
      </AlertDescription>
    </Alert>
  )
}

export function ErrorAlert() {
  return (
    <Alert className="border-red-500/50">
      <XCircle className="h-4 w-4 text-red-500" />
      <AlertTitle>خطأ</AlertTitle>
      <AlertDescription>
        حدث خطأ غير متوقع، حاول مرة أخرى.
      </AlertDescription>
    </Alert>
  )
}
