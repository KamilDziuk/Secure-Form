type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

type InputProps = {
  items: {
    name: keyof FormData;
    label: string;
    errorName: string;
    type: React.HTMLInputTypeAttribute;
  }[];

  register: any;
  errors: any;
};

export default function Input({ items, register, errors }: InputProps) {
  return (
    <>
      {items.map((item) => (
        <div key={item.name}>
          <label
            className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-3"
            htmlFor={item.name}
          >
            {item.label}
          </label>

          <input
            type={item.type}
            id={item.name}
            {...register(item.name)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 placeholder:text-gray-400 transition focus:border-[#e9d093] focus:ring-1 focus:ring-[#e9d093] focus:outline-none"
          />

          {errors[item.errorName] && (
            <p className="text-red-600 text-[13px] mt-1">
              {errors[item.errorName].message}
            </p>
          )}
        </div>
      ))}
    </>
  );
}
