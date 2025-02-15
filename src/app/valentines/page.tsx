import AnimatedHeart from "@/components/AnimatedHeart";
import MessageReveal from "@/components/MessageReveal";
import ValentinesCard from "@/components/ValCard";


const Valentines = () => {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-100">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Happy Valentine&apos;s Day</h1>
      <AnimatedHeart />
      <MessageReveal />
      <ValentinesCard />
    </main>
    )
}

export default Valentines;