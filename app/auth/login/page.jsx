'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
  const [myemail, setEmail] = useState('')
  const [mypassword, setPassword] = useState('')
  const router = useRouter()

  useEffect(() => {
    function removeStorage() {
      console.log(' i am here for delete ')
      window.localStorage.removeItem('myuser');
    }
    removeStorage();
  }, [])

  async function submitHandler(e) {
    e.preventDefault();
    console.log(myemail, mypassword)

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: myemail,
          password: mypassword
        }),
      })
      const user = await res.json()


      console.log(user)
      window.localStorage.setItem('myuser', JSON.stringify(user));
      router.refresh();
      router.push(window.location.hostname);
      router.push('/')


    } catch (error) {
      console.log(error)
    }

  }
  // async function submitHandler(e){
  // e.preventDefault();
  // console.log('hello from login')
  //   const result = await signIn("credentials",{
  //     email:myemail,
  //     password: mypassword,
  //     redirect:true,
  //     callbackUrl:"/"
  //   })
  //   console.log(result)
  // }
  return <section className="container">

    <div className="row content d-flex justify-content-center align-items-center">
      <div className="col-md-5">
        <div className="box-sahdow bg-light p-4 rounded-1">
          <h3 className="mb-4 text-center fs-1">Login Form</h3>
          <form className="mb-3" >
            <div className="form-floating mb-3">
              <input
                type="email"

                className="form-control rounded-0 id=floatingInput"
                placeholder="user@example.com"
                onChange={(e) => { setEmail(e.target.value) }}
                onBlur={(e) => { setEmail(e.target.value) }}
              />
              <label htmlFor="floatingInput">E-mail</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"

                className="form-control rounded-0 id=floatingPassword"
                placeholder="password"
                onChange={(e) => { setPassword(e.target.value) }}
                onBlur={(e) => { setPassword(e.target.value) }}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-grid gap-2 mb-3">
              <button
                onClick={submitHandler}
                type="button"
                className="btn btn-dark btn-lg border-0 rounded-0"
              >
                Login
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>

  </section>

}