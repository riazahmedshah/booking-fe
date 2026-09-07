import { createPortal } from 'react-dom'

interface ConfirmModalProps {
  title: string
  message: string
  confirmLabel?: string
  isSubmitting?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmModal({
  title,
  message,
  confirmLabel = 'Confirm',
  isSubmitting = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-surface p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="m-0 mb-2 font-heading text-xl font-bold text-text">{title}</h2>
        <p className="m-0 mb-6 text-sm text-text-variant">{message}</p>

        <div className="grid gap-2">
          <button
            type="button"
            className="auth-button-primary"
            onClick={onConfirm}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Please wait...' : confirmLabel}
          </button>
          <button
            type="button"
            className="auth-button-secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}