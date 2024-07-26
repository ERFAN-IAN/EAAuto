const ModalBackground = ({
  setIsModalBackgroundOpen,
  setBrandModal,
  setColorModal,
  isModalBackgroundOpen,
  setSortOpen,
  sortOpen,
}) => {
  if (!isModalBackgroundOpen) {
    return null;
  }
  return (
    <div
      className={`fixed w-full h-full inset-0  ${
        sortOpen ? `z-[51]` : `z-[40]`
      } bg-black opacity-20`}
      onClick={() => {
        setIsModalBackgroundOpen(false);
        setBrandModal(false);
        setColorModal(false);
        setSortOpen(false);
      }}
    ></div>
  );
};

export default ModalBackground;
