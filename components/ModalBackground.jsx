const ModalBackground = ({
  setIsModalBackgroundOpen,
  setBrandModal,
  setColorModal,
  isModalBackgroundOpen,
}) => {
  if (!isModalBackgroundOpen) {
    return null;
  }
  return (
    <div
      className="fixed w-full h-full inset-0 z-[40] bg-black opacity-20"
      onClick={() => {
        setIsModalBackgroundOpen(false);
        setBrandModal(false);
        setColorModal(false);
      }}
    ></div>
  );
};

export default ModalBackground;
