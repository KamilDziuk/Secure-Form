import useContactForm from "../Form/formBehavior";
import Input from "./Input/input";

export default function Form() {
  const { handleSubmit, register, isSubmitting, onSubmit, errors } =
    useContactForm();

  return (
    <>
      <form
        className="
relative md:absolute
w-full pb-2 min-[519px]:max-w-lg  md:max-w-lg  md:h-auto
 bg-white
    rounded-b-2xl
    shadow-lg
    px-5 md:px-8
    py-6
    space-y-6

mb-0 md:-mb-185
"
        onSubmit={handleSubmit(onSubmit)}
      >

        <Input
          errors={errors}
          register={register}
          items={[
            {
              name: "firstName",
              label: "Imie",
              errorName: "firstName",
              type: "text",
            },
            {
              name: "lastName",
              label: "Nazwisko",
              errorName: "lastName",
              type: "text",
            },
            {
              name: "email",
              label: "Email",
              errorName: "email",
              type: "email",
            },
            {
              name: "phone",
              label: "Telefon",
              errorName: "phone",
              type: "tel",
            },
          ]}
        />

        <textarea
          rows={4}
          className="w-full
        px-4
        py-3
        rounded-lg
        border
        border-gray-300
       text-gray-700
        placeholder:text-gray-400
        transition
        focus:border-[#e9d093]
        focus:ring-1
        focus:ring-[#e9d093]
        focus:outline-none"
          {...register("message")}
          id="message"
        />

        {errors.message && (
          <p className="text-red-600 text-[13px] -mt-5">
            {errors.message.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="block  mx-auto  w-[70%] min-[519px]:w-60 md:w-60 px-8 py-3  border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded mb-4"
          id="submit"
        >
          {isSubmitting ? "Wysyłanie..." : "Wyslij"}
        </button>
      </form>
    </>
  );
}
