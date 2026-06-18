import useContactForm from "../Form/formBehavior";
import Input from "./Input/input";

export default function Form() {
  const {
    handleSubmit,
    register,
    isSubmitting,
    onSubmit,
    sent,
    sentFailed,
    errors,
  } = useContactForm();

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
        <label
          className="text-xs uppercase tracking-wider text-gray-500  font-semibold block mb-3"
          htmlFor="message"
        >
          Wiadomości
        </label>
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

        <label className="pt-10" htmlFor="consent">
          <input type="checkbox" id="consent" {...register("consent")} />
          <span> Zapoznałem(-am) się z </span>
          <a
            className="text-[#d6b86b]"
            href="/https://sensualbeauty.pl/img/polityka-prywatnosci.pdf"
            target="_blank"
          >
            Polityką Prywatności
          </a>
          .
        </label>

        {errors.consent && (
          <p className="text-red-600 text-[13px] -mt-0">
            {errors.consent.message}
          </p>
        )}

        {isSubmitting || sent || sentFailed ? (
          ""
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="block  mx-auto  m-5  w-[70%] min-[519px]:w-60 md:w-60 px-8 py-3  border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded mb-4"
            id="submit"
          >
            Wyślij
          </button>
        )}

        {isSubmitting && (
          <p className="block  mx-auto m-5 w-[90%] min-[519px]:w-90md:w-90 px-8 py-2.5  border-2 border-amber-600 bg-amber-200 text-amber-600 transition-colors duration-300 rounded mb-4 text-center">
            Wysyłanie...
          </p>
        )}
        {sent && (
          <p className="block  mx-auto m-5 w-[90%] min-[519px]:w-90md:w-90 px-8 py-2.5  border-2 border-green-600 bg-green-200 text-green-600 transition-colors duration-300 rounded mb-4 text-center">
            Wysłano
          </p>
        )}

        {sentFailed && (
          <p className="block  mx-auto m-5 w-[90%] min-[519px]:w-90md:w-90 px-8 py-2.5  border-2 border-red-600 bg-red-200 text-red-600 transition-colors duration-300 rounded mb-4 text-center">
            Błąd wysyłania formularza
          </p>
        )}
      </form>
    </>
  );
}
