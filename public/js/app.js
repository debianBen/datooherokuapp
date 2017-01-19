	"use strict";

	class App{
		constructor(){
			this.progs = [
				{
					"image": "img/progie/java.jpg",
					"title": "JAVA",
					"content": "is a general-purpose computer programming language that is concurrent, class-based, object-oriented,[14] and specifically designed to have as few implementation dependencies as possible. ",
					"published":"May 23, 1995",
					"design":"James Gosling",
					"filename":".java"			
				},
	            {
					"image": "img/progie/python.jpg",
					"title": "PYTHON",
					"content": "is a widely used high-level programming language used for general-purpose programming, created by Guido van Rossum and first released in 1991. ",
					"published":"February 20, 1991",
					"design":"Guido van Rossum",
					"filename":".py, .pyc .pyd"	
				},
	            {
					"image": "img/progie/csharp.jpg",
					"title": "C sharp",
					"content": "is a multi-paradigm programming language encompassing strong typing, imperative, declarative, object-oriented (class-based), and component-oriented programming disciplines.",
					"published":"2000",
					"design":"Microsoft",
					"filename":".cs"			
				},
				{
					"image": "img/progie/c++.jpg",
					"title": "C++",
					"content": "is an object oriented programming (OOP) language, developed by Bjarne Stroustrup, and is an extension of C language.",
					"published":"1983",
					"design":"Bjarne Stroustrup",
					"filename":".cc, .cpp, .cxx"			
				},
	            {
					"image": "img/progie/html_5.jpg",
					"title": "HTML",
					"content": "is a style sheet language used for describing the presentation of a document written in a markup language.",
					"published":"1993",
					"design":"Tim Berners-Lee",
					"filename":".html, .htm"			
				},
	            {"image": "img/progie/php.jpg",
					"title": "PHP",
					"content": " is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language.",
					"published":"June 8, 1995",
					"design":"Rasmus Lerdorf",
					"filename":".php, .phtml"			
				}
	            
			];
	        
		}
	    
		render(html, component){

			component.innerHTML += html;
		}

		reRender(html, component){

			component.innerHTML = html;
		}
	    
	    progList(){
			let html = "";
			let m = this.progs;
			for(let i=(m.length-1);i>=0;i--){
				html += `
					<tr>
						<td>${m[i].title}</td>
						<td>${m[i].design}</td>
						<td>${m[i].filename}</td>
						<td><button class="btn btn-primary"  onclick="component.progSettingsHTML(${i})">Show Details</button></td>
					</tr>
				`;
			}
			this.reRender(`${html}`,document.getElementById('progListTableDiv'));
		}
	    
	    progSettingsHTML(key){
			this.reRender(
				`
	                    <div id="container">
	                        <div id="row">
	                            <div id="progInfoDiv">
	                                <div class="col-lg-4 col-xs-12" id="adjustDetails">
	                                    <div class="thumbnail"><img src="${this.progs[key].image}"></div>
	                                </div>
	                                <div class="col-lg-8 col-xs-12" id="adjustDetails1">
	                                    <h1 id="slimfont">${this.progs[key].title}</h1>
	                                    <button class="btn btn-primary btn-lg outline" onclick="component.progUpdateHTML(${key})">Update</button>
	                                    <button class="btn btn-primary btn-lg outline" onclick="component.deleteProg(${key})">Delete</button>
	                                    <button class="btn btn-primary btn-lg outline" onclick="component.showProgPage()">Back</button>
	                                </div>
	                                <div class="col-lg-12 col-xs-12" id="adjust100">
	                                    <ul class="list-group">
	                                      <li class="list-group-item"><span class="headername">Content:</span> ${this.progs[key].content}</li>
	                                      <li class="list-group-item"><span class="headername">Published:</span> ${this.progs[key].published}</li>
	                                      <li class="list-group-item"><span class="headername">Design:</span> ${this.progs[key].design}</li>
	                                      <li class="list-group-item"><span class="headername">Filename:</span> ${this.progs[key].filename}</li>
	                                        
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
					    	
				`,document.getElementById('progUpdateDeletePageDiv'));
				this.showUpdateDelete();
		}

	    progCreateHTML(){
			this.render(
				`
					<h1 class="text-center" id="slimfont">Add Some Languages</h1>
					Language: <input class="form-control" id="newTitle" type="text"  /><br/>
					Content: <input class="form-control" id="newContent" maxlength="200"  type="text"/><br/>
					Published: <input class="form-control" id="newPublished"  /><br/>
					Design: <input class="form-control" id="newDesign"  /><br/>
	                Filename: <input class="form-control" id="newFilename"  /><br/>
	                Image: <input class="form-control" id="newImage" type="text"  /><br/>
	               
					<button class="btn btn-success" id="myWish" href="javascript:;" onclick="component.createProg()">Create</button>

	                <button class="btn btn-primary" onclick="component.showProgPage()">Go Back to Your Programming Language List</button>
	               
				`,document.getElementById('progCreateDiv'));
		}
	    
	    createProg(){
			let i = document.getElementById('newImage');
			let t = document.getElementById('newTitle');
			let c = document.getElementById('newContent');
			let d = document.getElementById('newPublished');
			let a = document.getElementById('newDesign');
	        let g = document.getElementById('newFilename');

			let prog = {"image":i.value,"title":t.value,"content":c.value,"published":d.value,"design":a.value,"filename":g.value};
			this.progs.push(prog);

			i.value = t.value = c.value = d.value = a.value = g.value = ''; //Clear Fields
			this.progList();
		}
	    
	    updateProg(key){
			let i = document.getElementById('updateImage');
			let t = document.getElementById('updateTitle');
			let c = document.getElementById('updateContent');
			let d = document.getElementById('updatePublished');
			let a = document.getElementById('updateDesign');
	        let g = document.getElementById('updateFilename');

			let m = this.progs[key];
			let prog = {"image":i.value,"title":t.value,"content":c.value,"published":d.value,"design":a.value,"filename":g.value};

			this.progs[key] = prog;
			let details = document.getElementById('progUpdateDeletePageDiv');
			details.innerHTML = "";
			
			this.progList();
			this.showProgPage();
		}
	    
	    progUpdateHTML(key){
			this.reRender(
				`
	                <div class="container" id="adjustDetails200">
	                        <h2 class="text-center" id="slimfont">${this.progs[key].title}</h2>
	                        Image: <input class="form-control" id="updateImage" type="text" value="${this.progs[key].image}" /><br/>
	                        Language: <input class="form-control" id="updateLanguage" type="text" value="${this.progs[key].title}" /><br/>
	                        Content: <input class="form-control" id="updateContent" type="text" maxlength="200" value="${this.progs[key].content}" /><br/>
	                        Published: <input class="form-control" id="updatePublished" type="text" value="${this.progs[key].date}" /><br/>
	                        Design: <input class="form-control" id="updateDesign" type="text" value="${this.progs[key].design}" /><br/>
	                        Image: <input class="form-control" id="updateImage" type="text" value="${this.progs[key].image}" /><br/>
	                        Filename: <input class="form-control" id="updateImage" type="text" value="${this.progs[key].image}" /><br/>
	                         
	               
	                        <button class="btn btn-success" onclick="component.updateProg(${key})">Save</button>
	                </div>
				`,document.getElementById('progInfoDiv'));
		}
	    
	    deleteProg(key){		
			let table = document.getElementById('progListTableDiv');
			table.deleteRow(key);
			this.progs.splice(key,1);

			let details = document.getElementById('progUpdateDeletePageDiv');
			details.innerHTML = "";
			
			this.progList();	
			this.showProgsPage();	
		}
	    
		searchProgList(){
			let txtSearchProgsList = document.getElementById('searchOnprogPage')
			let progList = document.getElementById('progListTableDiv');
			let html = ``;
			    for(let i=0;i<this.progs.length;i++){
			      if(this.progs[i].title.toLowerCase().includes(txtSearchProgList.value)||this.progs[i].design.toLowerCase().includes(txtSearchProgList.value)||this.progs[i].filename.toLowerCase().includes(txtSearchProgList.value)||this.progs[i].title.toUpperCase().includes(txtSearchProgList.value)||this.progs[i].design.toUpperCase().includes(txtSearchProgList.value)||this.progs[i].filename.toUpperCase().includes(txtSearchProgsList.value)||this.progs[i].title.includes(txtSearchProgList.value)||this.progs[i].title.includes(txtSearchProgList.value)||this.progs[i].author.includes(txtSearchProgList.value)||this.progs[i].filename.includes(txtSearchProgsList.value)){
			      	html +=`
			          <td>${this.progs[i].title}</td>
			          <td>${this.progs[i].design}</td>
			          <td>${this.progs[i].filename}</td>
			          <td><button class="btn btn-primary"  onclick="component.progSettingsHTML(${i})">Show Details</button></td>
			        </tr>`; 
			      }
	            }
	    progList.innerHTML = html;
		}

		
	}

	class Component extends App{
		constructor(){

			super();
		}

		landingPage(){
			let html = `
			<!-- START NAVIGATION -->
			<nav class="nav navbar-default navbar-fixed-top role="navigation">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-fixed">
					<a class="navbar-brand topnav navbar-font" href="#" onclick="component.showLandingPage()" "><b>CODA</b>&nbspPL</a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#" onclick="component.showLandingPage()">HOME</a>
						</li>
						<li>
							<a href="#" onclick="component.showBookPage()">LANGUAGE</a>
						</li>
						<li>
							<a href="#" onclick="component.showBookCreate()">ADD</a>
						</li>

					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container -->
		</nav>
			<!-- END NAVIGATION -->


			<!-- START HEADER -->
			<div id="landingpage">
			<a name="about"></a>
			<div class="intro-header">
				<div class="container">

					<div class="row">
						<div class="col-lg-12">
							<div class="intro-message">
								<h1>We Help You to Learn</h1>				
							</div>
						</div>
					</div>
			</div>

				<!-- /.container -->
			</div>
			<!-- /.intro-header -->	
			<!-- END HEADER -->

			<!-- START PROG LIST -->
			<div class="container" id="adjust">
			<div class="row text-center" id="slimfont">
				<h1>TOP PROGRAMMING LANGUAGES</h1>
			</div>
			`;
	        
			for(let index=0;index<6;index++){
			    html+=`
			      <div class="col-xs-12 col-md-4"> <!-- column 1 -->
			        <div class="thumbnail"> <!--  thumbnail 1  -->
			          <img src="${this.progs[index].image}"> <!-- image 1 -->
			          <div class="caption"> <!-- caption -->
	                    <div class="col-lg-6 col-xs-6" id="adjustButtons">
	                    </div>
			            <h3>${this.progs[index].title}</h3>
			            <p>${this.progs[index].content}</p>
			          </div>
			        </div>
			      </div>
			`;
			}

			
			html+=`
			</div>
			</div>
			</div>
			<!-- END PROGLIST -->
	        <!-- START PROG PAGE -->
			<div id="progpage" class="display">
				<div class="container" id="adjust1">
					<div class="row">
							<div class="col-xs-12 col-md-12">
								<h1 class="text-center" id="slimfont">PROGRAMMING LANGUAGE LIST'S</h1>
								<table class="table table-responsive table-hover" id="adjust2">
									<thead>
										<tr>
											<th>Language</th>
											<th>Design</th>
											<th>Filename</th>
											<th>Details</th>
										</tr>
									</thead>

									<div class="input-group stylish-input-group" id="adjustsearch">
										<input oninput="component.searchProgList()" 
										type="text" class="form-control"  placeholder="Search" id="searchOnProgPage">
										<span class="input-group-addon">
											<button type="submit">
												<span class="glyphicon glyphicon-search"></span>
											</button>  
										</span>
									</div>

									<tbody id="progListTableDiv"></tbody>
								</table>
							</div>
					</div>
				</div>
	    	</div>
	        <!-- END PROG PAGE -->


	        <!-- START UPDATE-DELETE PAGE -->
	        <div id="updatedeletepage" class="display">

	            <!-- START FULL WIDTH IMAGE - FOLD#1 -->
	            <aside id="callout1">
	                <div class="text-vertical-center">
	                    <h1 id="slimfont">Prog Details</h1>
	                </div>
	            </aside>
	            <!-- END FULL WIDTH IMAGE - FOLD#1 -->

	            <div class="container" id="adjust5">
	                <div class="row">
	                    <div id="progUpdateDeletePageDiv"></div>
	                </div>
	            </div>

	        </div>
	        <!-- END UPDATE-DELETE PAGE -->

			<!-- START CREATE PAGE -->
	        <div id="createpage" class="display">
	        <div class="container" id="adjust5">
	        <div class="row">
	            <div class="col col-sm-12">
	                <div id="progCreateDiv"></div>
	                <div class="alert alert-success" id="success-alert">
	                    <button type="button" class="close" data-dismiss="alert">x</button>
	                    <strong>You're Done Succesfully</strong>
	                </div>
	            </div>
	        </div>
	        </div>
	        </div>
	        <!-- END CREATE PAGE -->

			<footer class="footer-distributed">
				<div class="footer-center absolute">
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
				</div>
				</div>
				<div class="footer-left">
					<p>CODA &copy; 2017</p>
				</div>
			</footer>


			`;
			this.reRender(`${html}`,document.getElementById("app"));	
			this.progList();
		}


		showLandingPage(){
			$('#landingpage').show();
			$('#progpage').hide();
	        $('#updatedeletepage').hide();
	        $('#createpage').hide();
		}

		showProgPage(){
			$('#landingpage').hide();
			$('#progpage').show();
	        $('#updatedeletepage').hide();
	        $('#createpage').hide();
		}
	    
	    showUpdateDelete(){
			$('#landingpage').hide();
			$('#progpage').hide();
	        $('#updatedeletepage').show();
	        $('#createpage').hide();
		}
	    
	    showProgCreate(){
	        $('#landingpage').hide();
			$('#progpage').hide();
	        $('#updatedeletepage').hide();
	        $('#createpage').show();
	        
	    }

	}

	let component = new Component();
	component.landingPage();
	component.progCreateHTML();