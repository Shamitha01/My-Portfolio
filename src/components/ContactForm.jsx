import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section id="contact" className="scroll-mt-24 p-10">
      <h2 className="text-3xl font-semibold mb-4">Reach Out</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="w-full p-2 rounded bg-white text-black"
        />
        {errors.name && <span className="text-red-300">Name is required</span>}

        <input
          {...register("email", { required: true })}
          placeholder="Your Email"
          className="w-full p-2 rounded bg-white text-black"
        />
        {errors.email && <span className="text-red-300">Email is required</span>}

        <textarea
          {...register("message", { required: true })}
          placeholder="Your Message"
          className="w-full p-2 rounded bg-white text-black"
        />
        {errors.message && <span className="text-red-300">Message is required</span>}

        <button
          type="submit"
          className="bg-white text-indigo-800 px-4 py-2 rounded hover:bg-indigo-100"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}