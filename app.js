var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var projects = {
	"bartenders" :{
		"title" : "Shiny R Application",
		"category" : "Projects",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum quam, elementum sit amet leo sed, interdum pharetra nulla. Fusce in mi porta, efficitur metus et, vehicula metus. Suspendisse vel scelerisque dui. Phasellus sodales odio at elit ornare auctor. Suspendisse ullamcorper felis diam, quis auctor enim finibus eu. Vivamus at dolor vitae eros sagittis mattis non non enim. Mauris urna sem, vestibulum id dui tempor, bibendum dignissim lacus. Duis molestie odio imperdiet tincidunt molestie. Phasellus semper eleifend fermentum. Nulla facilisi.",
		"links" : ["https://github.com/jahilliard/okCupidShinyApp"],
		"image" : "img/tiles/Bar_tile.png"
	},
	"bubble" :{
		"title" : "Bubble Chart",
		"category" : "Projects",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum quam, elementum sit amet leo sed, interdum pharetra nulla. Fusce in mi porta, efficitur metus et, vehicula metus. Suspendisse vel scelerisque dui. Phasellus sodales odio at elit ornare auctor. Suspendisse ullamcorper felis diam, quis auctor enim finibus eu. Vivamus at dolor vitae eros sagittis mattis non non enim. Mauris urna sem, vestibulum id dui tempor, bibendum dignissim lacus. Duis molestie odio imperdiet tincidunt molestie. Phasellus semper eleifend fermentum. Nulla facilisi.",
		"links" : ["https://github.com/jahilliard/2dGraphingChart"],
		"image" : "img/tiles/bubble_tile.png"
	},
	"cmu" :{
		"title" : "Carnegie Mellon University - Information Systems Graduate",
		"category" : "Work Expirence",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum quam, elementum sit amet leo sed, interdum pharetra nulla. Fusce in mi porta, efficitur metus et, vehicula metus. Suspendisse vel scelerisque dui. Phasellus sodales odio at elit ornare auctor. Suspendisse ullamcorper felis diam, quis auctor enim finibus eu. Vivamus at dolor vitae eros sagittis mattis non non enim. Mauris urna sem, vestibulum id dui tempor, bibendum dignissim lacus. Duis molestie odio imperdiet tincidunt molestie. Phasellus semper eleifend fermentum. Nulla facilisi.",
		"links" : ["http://www.cmu.edu/information-systems/"],
		"image" : "img/tiles/CMU_tile.png"
	},
	"ecovolt" :{
		"title" : "Ecovolt Financial - Financial Analyst",
		"category" : "Work Expirence",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum quam, elementum sit amet leo sed, interdum pharetra nulla. Fusce in mi porta, efficitur metus et, vehicula metus. Suspendisse vel scelerisque dui. Phasellus sodales odio at elit ornare auctor. Suspendisse ullamcorper felis diam, quis auctor enim finibus eu. Vivamus at dolor vitae eros sagittis mattis non non enim. Mauris urna sem, vestibulum id dui tempor, bibendum dignissim lacus. Duis molestie odio imperdiet tincidunt molestie. Phasellus semper eleifend fermentum. Nulla facilisi.",
		"links" : ["http://www.ecovoltsolar.com/"],
		"image" : "img/tiles/ecovolt_tile.png"
	},
	"healthstratica" :{
		"title" : "HealthStratica - Project Manager and Engineer",
		"category" : "Work Expirence",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum quam, elementum sit amet leo sed, interdum pharetra nulla. Fusce in mi porta, efficitur metus et, vehicula metus. Suspendisse vel scelerisque dui. Phasellus sodales odio at elit ornare auctor. Suspendisse ullamcorper felis diam, quis auctor enim finibus eu. Vivamus at dolor vitae eros sagittis mattis non non enim. Mauris urna sem, vestibulum id dui tempor, bibendum dignissim lacus. Duis molestie odio imperdiet tincidunt molestie. Phasellus semper eleifend fermentum. Nulla facilisi.",
		"links" : ["http://www.healthstratica.com/"],
		"image" : "img/tiles/health_tile.png"
	},
	"hopskotch" :{
		"title" : "Hopskotch - Founder and Engineer",
		"category" : "Ventures",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum quam, elementum sit amet leo sed, interdum pharetra nulla. Fusce in mi porta, efficitur metus et, vehicula metus. Suspendisse vel scelerisque dui. Phasellus sodales odio at elit ornare auctor. Suspendisse ullamcorper felis diam, quis auctor enim finibus eu. Vivamus at dolor vitae eros sagittis mattis non non enim. Mauris urna sem, vestibulum id dui tempor, bibendum dignissim lacus. Duis molestie odio imperdiet tincidunt molestie. Phasellus semper eleifend fermentum. Nulla facilisi.",
		"links" : ["https://github.com/jahilliard/barrServer","https://github.com/jahilliard/iOSBarr"],
		"image" : "img/tiles/hopskotch_tile.png"
	},
	"idealab" :{
		"title" : "Idealab - Software Engineer",
		"category" : "Work Expirence",
		"description" : "I participated in an internship at Idealab.  I built software that analyzed and measured patient data for therapists.",
		"links" : ["https://www.idealab.com/"],
		"image" : "img/tiles/idealab_tile.png"
	},
	"jpmc" :{
		"title" : "J.P. Morgan - Quantitative Analyst",
		"category" : "Work Expirence",
		"description" : "I participated in an internship at J.P. Morgan after my Junior year at Carnegie Mellon.  I was part of the Opportunity Research group.  I worked with financial product teams to produce preventitive algorithms and reports to improve external and internal products.  I was offered to return full-time to pursue a career at the company.",
		"links" : ["https://www.jpmorganchase.com/"],
		"image" : "img/tiles/jpmc_tile.png"
	},
	"shair" :{
		"title" : "Shair - Founder",
		"category" : "Ventures",
		"description" : "This was a Venture started in early 2015.  The software allowed to display location information data to uses through a GUI.  The application was built in Node.js with Mongo as the Database.  It was a great learning expirence, as well as fun project to test with friends and family.",
		"links" : ["https://github.com/jahilliard/fuzzyDangerZone2"],
		"image" : "img/tiles/shair_tile.png"
	},
	"walmart" :{
		"title" : "Walmart Weather Prediction Algorithm",
		"category" : "Projects",
		"description" : "The weather prediction algorithm that is used to predict goods sold in Walmart stores based on the weather.  The algorithm is built in an ipython notebook and it is a bottom up implementation of k-nearest-nieghbors.  It was built for a class at Carnegie Mellon University.  The project recieved an A.",
		"links" : ["http://google.com", "http://github.com", "justinHilliard.com"],
		"image" : "img/tiles/weather_tile.png"
	},
	"wells" :{
		"title" : "Well Fargo - Big Data Analyst",
		"category" : "Work Expirence",
		"description" : "I participated in an internship at Wells Fargo after my Sophomore year at Carnegie Mellon.  I was part of the Advanced Analytics group.  I worked with marketing data across 5 different databases with over 20 petabytes of data.  I produced a report outlining and explaining why customers complain and what steps are required to mitigate these complants.  I was offered to return next summer to pursue another internship.",
		"links" : ["https://www.wellsfargo.com/"],
		"image" : "img/tiles/wells_tile.png"
	},
	"postchair" :{
		"title" : "Postchair",
		"category" : "Ventures",
		"description" : "This is an internet of things desk chair that I built for my capstone at Carnegie Mellon University.",
		"links" : ["https://www.youtube.com/watch?v=SxiWZO92mUY", "https://github.com/jahilliard/PostChairPhotonServ", "https://github.com/CopperCat/Postchair_Chrome", "https://github.com/sanghal/67475_postchair"],
		"image" : "img/tiles/postchair_tile.png"
	},
	"resume" :{
		"title" : "My Resume",
		"category" : "Work Expirence",
		"description" : "Here is a link to my resume.  It is updated as of Summer 2016.",
		"links" : ["PlaceHolderlink.com"],
		"image" : "img/tiles/resume_tile.png"
	}
}

app.get('/', function(req, res){
  res.render('pages/index', {'projects' : projects});
});

app.get('/getSingleProject', function(req, res){
  res.render('partials/one_project', projects[req.query.id]);
});

app.get('/getCardContent', function(req, res){
  res.render('partials/cards', {'projects' : projects});
});

app.listen(8000);
console.log('App running on port http://138.68.14.96:8000');