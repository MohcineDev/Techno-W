import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { loginContext } from '../../Contexts/Login'
import './login.css'


const validate = values => {
  const errors = {}

  //email validation
  if (!values.email) {
    errors.email = 'Required'
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  // password validation
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Must be at least 8 characters'
  }

  return errors
}

function Login() {

  const { setlogged } = useContext(loginContext)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      localStorage.setItem('credentials', JSON.stringify(values))
      setlogged(true)
    }
  })
  return (
    <div className='login-container'>
      <div className="login-wrapper">

        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" placeholder='email@example.com' name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ?
              <span>{formik.errors.email}</span> : null}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='password' name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ?
              <span>{formik.errors.password}</span> : null}
          </div>

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login