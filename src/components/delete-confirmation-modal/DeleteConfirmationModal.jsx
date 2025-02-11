export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  contact,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 opacity-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-300 ease-out animate-enter">
        <h2 className="text-lg font-bold text-gray-900">Delete Confirmation</h2>
        <p className="text-gray-700 mt-2">
          Are you Sure you want to delete
          <strong className="text-red-600">{` ${contact?.firstName} ${contact?.lastName} `}</strong>
          ?
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
