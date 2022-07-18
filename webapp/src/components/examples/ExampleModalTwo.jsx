import { useModal } from "../../hooks/modalsHooks";
import ModalLayout from "../modals/ModalLayout";

export default function ExampleModalTwo({ title }) {
  const { hideModal } = useModal();

  const handleClose = () => {
    hideModal();
  };

  return (
    <ModalLayout>
      <ModalLayout.Header>
        <div className="w-100 d-flex justify-content-between">
          <div>Test Modal Two</div>
        </div>
      </ModalLayout.Header>
      <ModalLayout.Body>
        <p style={{ height: 100 }}>Modal Body</p>
        <p style={{ height: 100 }}>Modal Body</p>
        <p style={{ height: 100 }}>Modal Body</p>
      </ModalLayout.Body>
      <ModalLayout.Footer>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={handleClose}
        >
          Close
        </button>
      </ModalLayout.Footer>
    </ModalLayout>
  );
}
