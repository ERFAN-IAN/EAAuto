const ModalBackground = ({
  setIsModalBackgroundOpen,
  setBrandModal,
  setColorModal,
  isModalBackgroundOpen,
  setSortOpen,
  sortOpen,
  setFormBrandModal,
  setFormColorModal,
}) => {
  if (!isModalBackgroundOpen) {
    return null;
  }
  return (
    <div
      className={`fixed w-full h-[110%] inset-0  ${
        sortOpen ? `z-[51]` : `z-[40]`
      } bg-black opacity-20`}
      onClick={() => {
        setIsModalBackgroundOpen(false);
        setBrandModal(false);
        setColorModal(false);
        setSortOpen(false);
        setFormBrandModal(false);
        setFormColorModal(false);
      }}
    ></div>
  );
};

export default ModalBackground;
