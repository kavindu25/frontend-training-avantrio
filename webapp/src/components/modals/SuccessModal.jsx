import { useModal } from "../../hooks/modalsHooks";
import CreateIcon from "../CreateIcon";
import ModalLayout from "../modals/ModalLayout";

export default function SuccessModal({ isLink }) {
  const { hideModal } = useModal();

  const handleClose = () => {
    hideModal();
  };
  return (
    <div className="success-modal card px-5 py-5">
      <div className="pb-5">
        <CreateIcon
          customStyles={{
            width: "67px",
            height: "67px",
            borderRadius: "50%",
          }}
          bgColour={"#3FEA98"}
          innerIconBg={"/images/tick.png"}
          innerIconCustomStyles={{
            width: "30px",
            height: "20px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
      <div>
        <>
          {isLink ? (
            <h2>Successfully created the link</h2>
          ) : (
            <h2>Successfully created the collection</h2>
          )}
        </>
        <img src="/images/Emoji.png" alt="heart icon" />
      </div>
      <div className="py-5">
        <button
          type="button"
          className="btn btn-primary btn-lg px-5"
          data-bs-dismiss="modal"
          onClick={handleClose}
        >
          Awesome!
        </button>
      </div>
    </div>
  );
}
