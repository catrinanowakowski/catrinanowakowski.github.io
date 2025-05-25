<!DOCTYPE html>
<html>

		<style>
			.button {
			  border: black;
			  color: white;
			  padding: 15px 32px;
			  text-align: center;
			  text-decoration: none;
			  display: inline-block;
			  font-size: 16px;
			  margin: 4px 2px;
			  transition-duration: 0.4s;
			  cursor: pointer;
			}

			.button1 {background-color: #04AA6D;} /* Green */
			.button2 {background-color: #008CBA;} /* Blue */

			.all-browsers {
			  margin: 0;
			  padding: 5px;
			  background-color: lightgray;
			}

			.all-browsers > h1, .browser {
			  margin: 10px;
			  padding: 5px;
			}

			.browser {
			  background: white;
			}

			.browser > h2, p {
			  margin: 4px;
			  font-size: 90%;
			}
		</style>

	<head>
		<!meta charset="utf-8">
		<title> Project: Build a webpage</title>
		<h1>Catrinas Webpage</h1>

	</head>		

		<nav>
		<a href="https://catrinanowakowski.github.io">Home</a> | 
		<a href="https://catrinanowakowski.github.io/pages/home_page">pages</a>
	</nav>


	<body>
		<p>I'm working on this page still, these are the links I am currenlty learning from.<br>
		https://www.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/hosting-your-website-on-github <br> https://beautifuljekyll.com/ <br>
		https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf <br>
		http://rmarkdown.rstudio.com <br>
		https://www.w3schools.com/tags/tag_button.asp</p>
		<img src = "c_fin_col.png" alt = "calanus" width = "200"/>
		<img src = "ctyp_col.png" alt = "centropages" width = "200"/>
		<p>These are the copepods I studied during my PhD </p>

		<article class="all-browsers">
		  <h1>My testing pages</h1>
		  <article class="browser">
		    <h2>HTML page</h2>
		    <p>This one is prett basic</p>
		    <a href="https://catrinanowakowski.github.io/PAGE-TEST">
				<button class="button button1">View</button>
			</a>
		  </article>
		  <article class="browser">
		    <h2>In R</h2>
		    <p>Check out the second test page, R-Markdown!.</p>
		    <a href="https://catrinanowakowski.github.io/pages/test">
				<button class="button button1">R-TEST</button>
			</a>
		  </article>
		</article>

	</body>
</html>