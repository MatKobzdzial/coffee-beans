import ReactDOM from "react-dom";

function Modal({
  handleReset,
  handleModal,
}: {
  handleReset: any;
  handleModal: any;
}) {
  function onCancel() {
    handleModal(false);
  }

  function onReset() {
    handleModal(false);
    handleReset();
  }

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="fixed inset-80 p-10 bg-slate-100 rounded">
        <div className="flex flex-col justify-between h-full">
          Do You want to reset Your progress?
          <div className="flex justify-between ">
            <button
              onClick={onCancel}
              className="outline outline-2 rounded-lg px-6 py-2 bg-slate-100 outline-slate-700 text-slate-700"
            >
              Cancel
            </button>
            <button
              onClick={onReset}
              className="outline outline-2 rounded-lg px-6 py-2 bg-red-100 outline-red-700 text-red-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container") as HTMLElement
  );
}

export default Modal;
