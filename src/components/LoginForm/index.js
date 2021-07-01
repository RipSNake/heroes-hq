import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { loginHandler } from './validation';
import * as Yup from 'yup';

	const LoginSchema = Yup.object().shape({
		email: Yup.string().email('Invalid Email').required(),
		password: Yup.string().required()
	}) 

export const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<Formik 
			initialValues={{email: '', password:''}}
			validationSchema={LoginSchema}
			onSubmit={(values) => loginHandler(values, history, dispatch)} >

			{({ errors, touched }) => (
				<Form  className="col-12 col-sm-6 col-md-4 mx-auto my-5">
					<div>
						<h1>Login</h1>
					</div>
					<div className="my-4">
				    <label htmlFor="email" className="alkemy-form-label">Email</label>
				    <Field type="email" className="alkemy-form-control" name="email" id="email" placeholder="your@email.com" />
            <div style={{'height': '1rem', 'maxHeight': '1rem', 'fontSize':'small'}}>
					    {errors.email && touched.email ? 
	           		`${errors.email}`
					    	: null 
					  	}            
            </div>
			    </div>
			    <div className="my-4">
				    <label htmlFor="password" className="alkemy-form-label">Password</label>
				    <Field type="password" className="alkemy-form-control" id="password" name="password"/>
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