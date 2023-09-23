import ReactDOM from "react-dom";

function ChangeNameModal({
  handleChangeNameModal,
  name,
  nameDup,
  setNameDup,
  setName,
}: {
  nameDup: string;
  name: string;
  setNameDup: (arg: string) => void;
  setName: (arg: string) => void;
  handleChangeNameModal: any;
}) {
  function handleSubmit(event: any) {
    event.preventDefault();
    handleChangeNameModal(false);
    setName(nameDup);
  }

  function onCancel() {
    handleChangeNameModal(false);
  }

  function handleChange(event: any) {
    setNameDup(event.target.value);
  }

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-500 opacity-50"
        onClick={onCancel}
      ></div>
      <div className="fixed inset-80 px-10 py-4 bg-white rounded">
        <div
          className="flex flex-col gap-4 w-48"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>Set name:</label>
          <input
            type="text"
            className="outline outline-2 rounded"
            onChange={handleChange}
            value={nameDup}
            autoFocus
          ></input>
          <div className="flex justify-between gap-x-8">
            <button
              className="outline outline-2 rounded-lg px-6 py-2 bg-slate-100 outline-slate-700 text-slate-700"
              onClick={handleSubmit}
            >
              Confirm
            </button>
            <button
              className="outline outline-2 rounded-lg px-6 py-2 bg-red-100 outline-red-700 text-red-700"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container") as HTMLElement
  );
}

export default ChangeNameModal;
