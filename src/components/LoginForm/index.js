export const LoginForm = () => {

	return (
		<form>
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