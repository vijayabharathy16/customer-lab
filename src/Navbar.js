export function Navbar() {
    return <nav className="navbar navbar-light  nav-bar">
      <div className="container-fluid">
        <h4 style={{color:"pink"}}>Customer Labs<i class="fa-solid fa-book-blank"></i></h4>
        <div className="d-flex">
          {/* <form className="d-flex ">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success text-white" type="submit">Search</button>
          </form> */}
          <div className="mx-2 vr"></div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSASoMj4JHR6q4IRNbsmdfIQ1wAEE48NWrQ&usqp=CAU" width="35" height="35" class="rounded-circle" alt="profile picture" />
        </div>
  
  
      </div>
    </nav>;
  }