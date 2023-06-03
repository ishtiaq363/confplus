'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
//import { signIn, signOut,useSession, getSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [mysession, setMySession] = useState({});
  const [email, setEmail] = useState('');
  // const { data: session } = useSession()
  const [userType, setUserType] = useState({})
  const [role, setRole] = useState('visitor');
  const router = useRouter();
  console.log('hellothis')
  // { id: '', firstName: '', lastName: '', email: '', password: '', role: '' }
  useEffect(() => {
    function setNavbar() {
      console.log('i am here')
      const user = JSON.parse(window.localStorage.getItem('myuser'))

      setUserType(user);
      console.log(userType)
    }
    setNavbar();
  }, [])

  useEffect(() => {

    import("../../node_modules/bootstrap/dist/js/bootstrap.js");
  }, [])
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              CONFPLUS

            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/schedule" className="nav-link" > Schedule</Link>
                </li>
                <li className="nav-item">
                  {userType?.role === "author" && <Link href="/author" className="nav-link" > Submit Paper</Link>}
                </li>
                <li className="nav-item">
                  {userType?.role === "reviewer" && <Link href="/reviewer" className="nav-link" > Review</Link>}
                </li>
                <li className="nav-item">
                  {userType?.role === "organizer" && <Link href="/organizer" className="nav-link" > Manage conferences</Link>}
                </li>


              </ul>

              <ul className="navbar-nav">

                <li className="nav-item " >

               {userType?.role &&   <Link className="nav-link " style={{
                    color: 'green',
                    fontSize: '18px'
                  }} aria-current="page" href={'/'}>Hi, {userType?.firstName}</Link>
                  }
                </li>
                <li className="nav-item">

                  {userType?.role && <Link style={{
                    color: 'red',
                    fontSize: '18px'
                  }} onClick={(e) => {
                    e.preventDefault()
                    window.localStorage.removeItem('myuser');
                    router.push('/');
                    setUserType({})
                  }} className="nav-link active" aria-current="page" href="#">
                    Logout
                  </Link>
                  }
                </li>

                <li className="nav-item">
                  {!userType?.role && <Link onClick={(e) => {
                    e.preventDefault();
                    router.push('/auth/login')
                    // signIn();
                  }} className="nav-link active" aria-current="page" href="#">
                    Login
                  </Link>}
                </li>


              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
