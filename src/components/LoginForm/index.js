

export const LoginForm = () => {

	const login = (e) => {
		e.preventDefault();
		console.log('Login Submitted!');
	}

	return (
		<form onSubmit={login} class="col-12 col-sm-6 col-md-4 mx-auto my-5">
			<div>
				<h1>Login</h1>
			</div>
			<div>
		    <label for="email" class="alkemy-form-label">Email</label>
		    <input type="email" class="alkemy-form-control" id="email" placeholder="your@email.com" />
	    </div>
	    <div>
		    <label for="password" class="alkemy-form-label">Password</label>
		    <input type="password" class="alkemy-form-control" id="password" />
	    </div>
	    <div>
	    	<button type="submit">Enviar</button>
	    </div>
		</form>
	)
};

export default LoginForm;