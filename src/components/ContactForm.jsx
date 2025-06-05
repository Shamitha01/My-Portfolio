import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent successfully!");
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Reach Out</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-md mx-auto"
      >
        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="w-full p-3 rounded-full bg-black text-white focus:ring-3"
        />
        {errors.name && <span className="text-red-600">Name is required</span>}

        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-full bg-black text-white focus:ring-3"
        />
        {errors.email && <span className="text-red-600">Email is required</span>}

        <textarea
          {...register("message", { required: true })}
          placeholder="Your Message"
          className="w-full p-3 rounded-xl bg-black text-white focus:ring-3"
        />
        {errors.message && <span className="text-red-600">Message is required</span>}

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:text-amber-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
