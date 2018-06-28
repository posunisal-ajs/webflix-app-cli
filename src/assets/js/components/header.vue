<template>
<header class="h-menu-color">
	    <div class="container">
	      <nav class="navbar navbar-expand-md">
	        <!-- <a class="navbar-brand" href="index.html"></a> -->  
			<form action="filmes" method="post" class="w75">
				<button class="btn-clean-h1 dropdown-item" type="submit"><img class="img-logo-topo" src="static/img/webflix.png"/></button> 
			</form>
	        <a class="navbar-toggler">
	          <!-- <span class="navbar-toggler-icon"></span> -->
	          <input id="actMenu" type="checkbox" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
	          <label class="lbl-menu" for="actMenu" >
	            <span class="nav-btn-inner">
	              <span class="menu-icon menu-icon-first"></span> 
	              <span class="menu-icon menu-icon-second"></span> 
	              <span class="menu-icon menu-icon-third"></span></span>
	          </label>
	        </a>
	
	        <div class="collapse navbar-collapse" id="navbarNav1">
	           <!-- para esconder usar "d-none" -->
	          <ul class="navbar-nav justify-content-end d-lg-flex ml-md-auto navbar-mobile">
	          	<li>
								<a href="./" class="btn-clean-ico dropdown-item fa-icon--m"><i class="fa fa-film fa-icon-size"></i></a> 
	            </li>
	                
	            <li class="nav-item">
	              <div class="btn-group">
	                <a class="nav-link dropdown-toggle user-menu-tooltip nav-icon-mob" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                  <i class="fa fa-user-circle icon-header-size" aria-hidden="true"></i>
	                </a>
	                <div class="dropdown-menu">
	                    <!-- <div class="pl-4 pr-4 pb-1"><a href="login.html" class="btn btn-personalised-full">Entrar</a></div>-->
	                    <!-- <form action="listaFilmes" method="post">
													<input class="btn-clean-drop dropdown-item" type="submit" value="Lista de filmes" /> 
											</form>
											<form action="listaUsuarios" method="post">
													<input class="btn-clean-drop dropdown-item" type="submit" value="Lista de usuários" /> 
											</form>
													<form action="logout" method="post">
													<input class="btn-clean-drop dropdown-item" type="submit" value="Sair" /> 
											</form> -->
										</div>
	              </div>
	            </li>
	           
	            <li class="nav-item">
	              <a class="nav-link">
	              </a>
	            </li>
	
	          </ul>
	          
	        </div>
	      </nav>
	    </div>
	</header>	
</template>