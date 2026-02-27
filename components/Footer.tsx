export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div className="w-full md:w-auto">Lanchester R&D</div>
        <div className="w-full md:w-auto mt-3 md:mt-0 flex gap-6 items-center">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="w-full md:w-auto mt-3 md:mt-0 text-xs text-gray-400">© {new Date().getFullYear()} Lanchester R&D</div>
      </div>
    </footer>
  )
}
