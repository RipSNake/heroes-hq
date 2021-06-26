import { Formik, Form } from 'formik';
import { validateForm } from './validation';
import * as Yup from 'yup';

export const LoginForm = () => {
	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('Invalid Email').required(),
		password: Yup.string().required()
	}) 

	return (
		<Formik 
			initialValues={{email: '', password:''}}
			validationSchema={LoginSchema}
			onSubmit={validateForm} >

			{({ errors, touched }) => (
				<Form  className="col-12 col-sm-6 col-md-4 mx-auto my-5">
					<div>
						<h1>Login</h1>
					</div>
					<div className="my-4">
				    <label htmlFor="email" className="alkemy-form-label">Email</label>
				    <input type="email" className="alkemy-form-control" id="email" placeholder="your@email.com" />
            <div style={{'height': '1rem', 'maxHeight': '1rem', 'fontSize':'small'}}>
					    {errors.email && touched.email ? 
	           		`${errors.email}`
					    	: null 
					  	}            
            </div>
			    </div>
			    <div className="my-4">
				    <label htmlFor="password" className="alkemy-form-label">Password</label>
				    <input type="password" className="alkemy-form-control" id="password" />
				    <div style={{'height': '1rem', 'maxHeight': '1rem', 'fontSize':'small'}}>
					    {errors.password && touched.password ? 
	           		`${errors.password}`
					    	: null 
					  	}            
            </div>
			    </div>
			    <div className="my-5">
			    	<button type="submit" className="alkemy-btn-primary">Enviar</button>
			    </div>
				</Form>
			)}
		</Formik>
	)
};

export default LoginForm;