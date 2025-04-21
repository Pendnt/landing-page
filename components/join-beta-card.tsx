import { Button } from "@/components/ui/button"

export default function JoinBetaForm() {
  return (
    <div className="max-w-md mx-auto">
      <form
        action="/join-the-beta"
        method="GET"
        className="flex flex-col items-center sm:flex-row gap-4"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-white border
                     border-gray-300 focus:outline-none focus:ring-2
                     focus:ring-[#FF7A5F] focus:border-transparent"
        />
        <Button
          type="submit"
          size="lg"
          className="bg-gradient-to-r from-[#FF7A5F] to-[#FFA05E]
                     text-white hover:opacity-90 transition-opacity"
        >
          Join the Beta
        </Button>
      </form>
    </div>
  );
}
