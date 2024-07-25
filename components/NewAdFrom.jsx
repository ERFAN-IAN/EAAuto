"use client";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ChevronSelector from "@/components/ChevronSelector";
import { useGlobalContext } from "@/context/context";

import MultiSelectFormPage from "@/components/MultiSelectFormPage";
import RectSelector from "@/components/RectSelector";
import Category from "@/components/Category";
import { colors, brands, formTypes, formTransmissions } from "@/data";

const NewAdFrom = () => {
  const [submitting, isSubmitting] = useState(false);
  const [base64, setBase64] = useState([]);
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
    categoryForm,
    setcategoryForm,
  } = useGlobalContext();
  let toBase64 = (e) => {
    let t = [];
    for (let i of e) {
      const reader = new FileReader();
      reader.readAsDataURL(i);
      reader.onload = () => {
        t.push(reader.result);
      };
    }
    setBase64(t);
  };
  useEffect(() => {
    setFormType("");
    setFormBrand("");
    setFormColor("");
    setFormTransmission("");
  }, []);

  let b;
  return (
    <form
      className="w-full max-w-[42rem] px-4 py-8 mt-12 flex flex-col gap-y-8 card shadow-xl rounded-xl"
      // action="/api/properties/"
      // method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        isSubmitting(true);
        try {
          const formData = new FormData(e.currentTarget);
          const formObject = Object.fromEntries(formData);
          formObject.images = base64;
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_DOMAIN}/newad`,
            {
              method: "POST",
              body: JSON.stringify(formObject),
            }
          );
          isSubmitting(false);
          const toJson = await response.json();
          if (toJson.id) {
            router.push(`/cars/${toJson.id}`);
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
        name={"type"}
      />
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold">
          Listing title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
          placeholder="eg. E39 M5"
          // required
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
            // required
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
            // required
          ></input>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-x-2 ">
        <div className="flex flex-col w-full">
          <label htmlFor="price" className="font-semibold">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min={0}
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
            placeholder={`2000$`}
            // required
          ></input>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="city" className="font-semibold">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
            placeholder="Ny"
            // required
          ></input>
        </div>
      </div>
      <Category
        handleFunc={setcategoryForm}
        category={categoryForm}
        place={"form"}
      />
      <RectSelector
        data={formTransmissions}
        title={`Transmission`}
        handleState={setFormTransmission}
        state={formTransmission}
        name={"transmission"}
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
          // required
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
          // required
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
          Select up to 4 images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="mt-2 rounded-lg p-2 border-primary border-2 focus:border-primary outline-none"
          multiple
          accept="image/*"
          required
          onChange={(e) => {
            toBase64(e.target.files);
          }}
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
  );
};

export default NewAdFrom;
