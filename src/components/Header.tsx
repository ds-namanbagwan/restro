const Header = () =>{
return(
<div className="centered-container" >
      <nav className="flex items-center justify-between">
        <div className="pl-40">
          <img
          style={{width:"100px"}}
            src="https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png"
            width="full"
            height="50"></img> </div>
        <ul className="submenu flex  justify-center gap-x-10 text-2xl font-normal">
           
            <li><a href="#">Book</a></li>
            <li><a href="#">Calls</a></li>
            <li><a href="#">Deals</a></li>

        </ul>
       
        <div className="mr-80">
          <a href="#" >Get Started</a>
        </div>
      </nav>
    </div>
    );
}

export default Header;