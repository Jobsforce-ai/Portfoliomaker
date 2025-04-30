import Sun from "../icons/Sun"

function Navbar() {
  return (
    <nav className="flex justify-between items-center pb-20">
        <div className="text-2xl">Home</div>
        <Sun/>
    </nav>
  )
}

export default Navbar