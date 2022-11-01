interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="bg-orange-400 hover:bg-orange-500 text-white py-2 w-full
                   border-transparent rounded-md shadow-md font-semibold mt-2
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      {text}
    </button>
  );
}
