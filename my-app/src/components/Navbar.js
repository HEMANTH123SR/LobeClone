const Navbar = () => {
  return (
    <div className="my-7 mx-28">
      <nav className="flex flex-row space-x-72">
        <div>
          <h1>Lobe</h1>
        </div>
        <div>
          <ul className="flex space-x-11">
            <li>Overview</li>
            <li>Examples</li>
            <li>Tour</li>
            <li>Blog</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
          <button>Download</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
