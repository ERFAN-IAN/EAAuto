"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ChevronSelector from "@/components/ChevronSelector";
import { useGlobalContext } from "@/context/context";
import { useEffect } from "react";
import MultiSelectFormPage from "@/components/MultiSelectFormPage";
import RectSelector from "@/components/RectSelector";
// import { queryClient } from "@/components/ReactQuery";
import { colors, brands, formTypes, formTransmissions } from "@/data";
const page = () => {
  const [submitting, isSubmitting] = useState(false);
  const router = useRouter();
  const {
    setBrandModal,
    setColorModal,
    brand,
    color,
    formBrand,
    setFormBrand,
    setFormType,
    setFormColor,
    setFormTransmission,
    formColor,
    formTransmission,
    formType,
    formBrandModal,
    setFormBrandModal,
    formColorModal,
    setFormColorModal,
  } = useGlobalContext();
  useEffect(() => {
    setFormType("");
    setFormBrand("");
    setFormColor("");
    setFormTransmission("");
  }, []);
  console.log(formTypes);
  return (
    <main className="flex justify-center ">
      <form
        className="w-full max-w-[42rem] px-4 py-8 mt-20 flex flex-col gap-y-8 card shadow-xl rounded-xl"
        // action="/api/properties/"
        // method="POST"
        onSubmit={async (e) => {
          e.preventDefault();
          isSubmitting(true);
          try {
            const formData = new FormData(e.currentTarget);
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`,
              {
                method: "POST",
                body: formData,
              }
            );
            isSubmitting(false);
            const toJson = await response.json();
            if (toJson.id) {
              router.push(`/properties/${toJson.id}`);
            }
            // queryClient.invalidateQueries({ queryKey: ["userproperty"] });
            if (toJson.error.message) {
              //   toast.error(toJson.error.message);
            }
          } catch (error) {
            // toast.error(error);
          }
        }}
        encType="multipart/form-data"
      >
        <h1 className=" text-center font-bold text-3xl">Add Advert</h1>
        <RectSelector
          data={formTypes}
          title={`Advert Type`}
          handleState={setFormType}
          state={formType}
        />
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Listing title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
            placeholder="eg. E39 M5"
            required
          ></input>
        </div>

        <div className="relative" onClick={() => setFormColorModal(false)}>
          <ChevronSelector
            setModal={setFormBrandModal}
            data={formBrand}
            title={"Brand"}
            place={"form"}
          />
          <MultiSelectFormPage
            name={"brand"}
            data={brands}
            setModal={setFormBrandModal}
            modalState={formBrandModal}
            handleFunction={setFormBrand}
            arrayResult={formBrand}
          />
        </div>
        <div className="relative">
          <ChevronSelector
            setModal={setFormColorModal}
            data={formColor}
            title={"Color"}
            place={"form"}
          />
          <MultiSelectFormPage
            name={"color"}
            data={colors}
            setModal={setFormColorModal}
            modalState={formColorModal}
            handleFunction={setFormColor}
            arrayResult={formColor}
          />
        </div>
        <div className="flex w-full gap-x-2 ">
          <div className="flex flex-col w-full">
            <label htmlFor="year" className="font-semibold">
              Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              max={new Date().getFullYear()}
              min={1920}
              className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
              placeholder={`${new Date().getFullYear()}`}
              required
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="milage" className="font-semibold">
              Km
            </label>
            <input
              id="milage"
              name="milage"
              type="number"
              min={0}
              max={1000000}
              className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
              placeholder="22000"
              required
            ></input>
          </div>
        </div>

        <RectSelector
          data={formTransmissions}
          title={`Transmission`}
          handleState={setFormTransmission}
          state={formTransmission}
        />

        <div className="flex flex-col">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
            placeholder="Add an optional description of car"
            rows={4}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="seller_name" className="font-semibold">
            Seller Name
          </label>
          <input
            id="seller_name"
            name="seller_info.name"
            type="text"
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="seller_email" className="font-semibold">
            Seller Email
          </label>
          <input
            id="seller_email"
            name="seller_info.email"
            type="email"
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="seller_phone" className="font-semibold">
            Seller Phone
          </label>
          <input
            id="seller_phone"
            name="seller_info.phone"
            type="tel"
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="images" className="font-semibold">
            Select up to 3 images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
            multiple
            accept="image/*"
            required
          ></input>
        </div>
        <button
          type="submit"
          disabled={submitting ? true : false}
          className=" bg-secondary rounded-lg py-2 text-black font-semibold"
        >
          {submitting ? "submitting..." : "Submit Property"}
        </button>
      </form>
    </main>
  );
};

export default page;
