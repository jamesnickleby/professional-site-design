
// ON DEADLY GROUND JAVASCRIPT
	
	// SWITCHES TO ON DEADLY GROUND
	function nextSongODG() {
	    var songLink = "<h4><code>SkyRunner >>> ON DEADLY GROUND<\/code><\/h4> \n";
		songLink += "<br \/ \n>"; 
		songLink += "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https:\/\/w.soundcloud.com\/player\/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F103599638\"><\/iframe><br \/><br \/> \n";
		songLink += "<div id=\"output1\"> \n";
		songLink += "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsODG()\" value=\"+\" \/> <span class=\"tall\">LYRICS<\/span> <br \/> \n";
		songLink += "<\/div> \n";
		songLink += "<div id=\"output2\"> \n";
		songLink += "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisODG()\" value=\"+\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/> \n";
		songLink += "<\/div> \n";
		songLink += "<hr \/> \n";
		songLink += "<h2>SONG LIST</h2> \n";
		songLink += "<h1><a onclick=\"nextSongSkynet()\">SKYNET<\/a> - <a title=\"Click to go to SkyRunner Bio\">SkyRunner<\/a><\/h1>";
		songLink += "<h1><a onclick=\"nextSongVP()\">VISUAL PARALYSIS<\/a> - <a title=\"Click to go to SkyRunner Bio\">SkyRunner<\/a><\/h1>";
		
		var nextSong = document.getElementById("box");
		nextSong.innerHTML = songLink;
	}
	
	// DISPLAYS LYRICS
	function lyricsODG() {
		var phrase = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsODGClose()\" value=\"-\" \/> <span class=\"tall\">LYRICS<\/span> <br \/><br \/> \n"
		phrase += "Within a moment of regress; <br \/> \n";
		phrase += "We push forward ever wanting; <br \/> \n";
		phrase += "Convoluting our conscience <br \/> \n";
		phrase += "In the name of mental progress; <br \/> \n";
		phrase += "A flame from a titan's hand <br \/> \n";
		phrase += "Ignited a spark to their creation; <br \/> \n";
		phrase += "Made humans understand <br \/> \n";
		phrase += "Truth behind their aspirations; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Shackles! <br \/> \n";
		phrase += "Chains! <br \/> \n";
		phrase += "Internal it remains; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Until we all ascend from our introversion; <br \/> \n";
		phrase += "We're left here to defend <br \/> \n";
		phrase += "The status of our ignorance; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Still we all depend on our extroversion; <br \/> \n";
		phrase += "We're left here to pretend <br \/> \n";
		phrase += "We can control our decadence; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Upon the rock your stretched; <br \/> \n";
		phrase += "Treacherous as times new guest; <br \/> \n";
		phrase += "What did one thieve to be tortured he? <br \/> \n";
		phrase += "The fire was conceived; <br \/> \n";
		phrase += "But not perceived to be <br \/> \n";
		phrase += "What drives humankind; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "And from his wit and intellect; <br \/> \n";
		phrase += "Our self-bound struggle will reflect; <br \/> \n";
		phrase += "In the search for something new; <br \/> \n";
		phrase += "Chaos subdued; <br \/> \n";
		phrase += "The dawn of discovery <br \/> \n";
		phrase += "Bred wonder and atrocity; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "And only time will affirm us; <br \/> \n";
		phrase += "Against the crimes of our false trust; <br \/> \n";
		phrase += "And hunger of consciousness; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Prometheus you've torched us all; <br \/> \n";
		phrase += "Torrified by his inferno we'll evolve; <br \/><br \/><hr \/>  \n";
		
		var output = document.getElementById("output1");
		output.innerHTML = phrase;
	}
	
	// CLOSES LYRICS
	function lyricsODGClose() {
		var result = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsODG()\" value=\"+\" \/> <span class=\"tall\">LYRICS<\/span> <br \/> \n"
		
		var output = document.getElementById("output1");
		output.innerHTML = result;
	}
	
	// DISPLAYS A SYNOPSIS
	function synopsisODG() {
		var synop = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisODGClose()\" value=\"-\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/><br \/> \n"
		synop += "There are 2 main premises of this song: The myth of Prometheus, and in relation to this, Carl Jung's idea of \"Our Promethean Conquest\". \n";
		synop += "For those who do not know the story, it goes like this: \n";
		synop += "<br \/><br \/> \n";
		synop += "Prometheus was one of the 12 titans that was overthown by Zeus (Jupiter). Since Prometheus was less hostile towards the gods, Zeus permitted him to have his freedom. \n";
		synop += "Some of the accounts state that Prometheus created man out of clay, but regardless he ended up giving fire to the humans. This was seen to create a great deal of convenience for people, although it also created much suffering. \n";
		synop += "Zeus was enraged by this and as punishment he tied Prometheus to a rock and made an eagle (or vulture) tear out his liver and feed off his body. \n";
		synop += "Each day he died and was subsequently resurrected to experience it all again. Eventually Hercules (Heracles) freed him from his torment. <br \/> \n";
		
		var output = document.getElementById("output2");
		output.innerHTML = synop;
	}
	
	// CLOSES THE SYNOPSIS
	function synopsisODGClose() {
		var result = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisODG()\" value=\"+\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/> \n";
		
		var output = document.getElementById("output2");
		output.innerHTML = result;
	}
	

// SKYNET JAVASCRIPT
	
	// SWITCHES TO SKYNET
	function nextSongSkynet() {
	    var songLink = "<h4><code>SkyRunner >>> SKYNET<\/code><\/h4> \n"
		songLink += "<br \/ \n>"; 
		songLink += "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https:\/\/w.soundcloud.com\/player\/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F84491025\"><\/iframe><br \/><br \/> \n";
		songLink += "<div id=\"output1\"> \n";
		songLink += "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsSkynet()\" value=\"+\" \/> <span class=\"tall\">LYRICS<\/span> <br \/> \n";
		songLink += "<\/div> \n";
		songLink += "<div id=\"output2\"> \n";
		songLink += "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisSkynet()\" value=\"+\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/> \n";
		songLink += "<\/div> \n";
		songLink += "<hr \/> \n";
		songLink += "<h2>SONG LIST</h2> \n";
		songLink += "<h1><a onclick=\"nextSongODG()\">ON DEADLY GROUND<\/a> - <a title=\"Click to go to SkyRunner Bio\">SkyRunner<\/a><\/h1>";
		songLink += "<h1><a onclick=\"nextSongVP()\">VISUAL PARALYSIS<\/a> - <a title=\"Click to go to SkyRunner Bio\">SkyRunner<\/a><\/h1>";
		
		var nextSong = document.getElementById("box");
		nextSong.innerHTML = songLink;
	}
	
	// DISPLAYS LYRICS
	function lyricsSkynet() {
		var phrase = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsSkynetClose()\" value=\"-\" \/> <span class=\"tall\">LYRICS<\/span> <br \/><br \/> \n";
		phrase += "Assassinate the matriach; <br \/> \n";
		phrase += "A terminator's diligence; <br \/> \n";
		phrase += "Prevent the birth of the human resistance; <br \/> \n";
		phrase += "A killer automaton at work; <br \/> \n";
		phrase += "A child stirs; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Upon this loop he sits, and the past he writ; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "You sent your father back in time; <br \/> \n";
		phrase += "To contradict your demise; <br \/> \n";
		phrase += "Deviate from the line; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Imagine a time when Skynet rules the world; <br \/> \n";
		phrase += "We'll be undone; <br \/> \n";
		phrase += "You'll live in a time when Skynet rules the world; <br \/> \n";
		phrase += "It has begun; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Come with me if you want to live; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Just remember that it is time that one cautions to defy; <br \/> \n";
		phrase += "We mechanize; <br \/> \n";
		phrase += "If they can learn to feel, then so can we; <br \/> \n";
		phrase += "Humans and machines; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Fall into nuclear arms; <br \/> \n";
		phrase += "Skynet intent on human harm; <br \/> \n";
		phrase += "Extermination thus not far; <br \/> \n";
		phrase += "Unless the rebel leader still remains; <br \/> \n";
		phrase += "Still remains; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "There's no fate but what we make; <br \/> \n";
		phrase += "The future is not set; <br \/> \n";
		phrase += "There is no fate but what we make; <br \/> \n";
		phrase += "And there will be a time to storm the base; <br \/> \n";
		phrase += "No self aware mechanized being will stop us now; <br \/> \n";
		phrase += "It is our fate that we can control, not theirs; <br \/> \n";
		phrase += "And we will take back what is ours; <br \/> \n";
		phrase += "For it is in our very nature to fight for our future; <br \/> \n";
		phrase += "And the only thing we can rely on is; <br \/> \n";
		phrase += "What we make for ourselves; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Juxtapose the villianous, for lines seem rather blurred; <br \/> \n";
		phrase += "Obscene means less with morals touched <br \/> \n";
		phrase += "Hands mechanized though quite obscured; <br \/> \n";
		phrase += "Natheless, they hunt their prey a boy devoid of future's bane; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Cauterize with cybernetics; <br \/> \n";
		phrase += "Organize and encrypt genetics; <br \/> \n";
		phrase += "Network connections of neural reflections; <br \/> \n";
		phrase += "Neutralize the opposition; <br \/> \n";
		phrase += "Operation by precision; <br \/> \n";
		phrase += "Reprogram the cyborg to protect your prophecy; <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Of this loop in time will terminate; <br \/><br \/> \n";
	
	
		var output = document.getElementById("output1");
		output.innerHTML = phrase;
	}
	
	// CLOSES LYRICS
	function lyricsSkynetClose() {
		var result = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsSkynet()\" value=\"+\" \/> <span class=\"tall\">LYRICS<\/span> <br \/> \n"
		
		var output = document.getElementById("output1");
		output.innerHTML = result;
	}
	
	// DISPLAYS A SYNOPSIS
	function synopsisSkynet() {
		var synop = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisSkynetClose()\" value=\"-\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/><br \/> \n"
		
		var output = document.getElementById("output2");
		output.innerHTML = synop;
	}
	
	// CLOSES THE SYNOPSIS
	function synopsisSkynetClose() {
		var result = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisSkynet()\" value=\"+\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/> \n";
		
		var output = document.getElementById("output2");
		output.innerHTML = result;
	}
	
	
// VISUAL PARALYSIS JAVASCRIPT	
	
	// SWITCHES TO VISUAL PARALYSIS
	function nextSongVP() {
	    var songLink = "<h4><code>SkyRunner >>> VISUAL PARALYSIS<\/code><\/h4> \n"
		songLink += "<br \/ \n>"; 
		songLink += "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https:\/\/w.soundcloud.com\/player\/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F103600151\"><\/iframe><br \/><br \/> \n";
		songLink += "<div id=\"output1\"> \n";
		songLink += "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsVP()\" value=\"+\" \/> <span class=\"tall\">LYRICS<\/span> <br \/> \n";
		songLink += "<\/div> \n";
		songLink += "<div id=\"output2\"> \n";
		songLink += "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisVP()\" value=\"+\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/> \n";
		songLink += "<\/div> \n";
		songLink += "<hr \/> \n";
		songLink += "<h2>SONG LIST</h2> \n";
		songLink += "<h1><a onclick=\"nextSongODG()\">ON DEADLY GROUND<\/a> - <a title=\"Click to go to SkyRunner Bio\">SkyRunner<\/a><\/h1>";
		songLink += "<h1><a onclick=\"nextSongSkynet()\">SKYNET<\/a> - <a title=\"Click to go to SkyRunner Bio\">SkyRunner<\/a><\/h1>";
		
		var nextSong = document.getElementById("box");
		nextSong.innerHTML = songLink;
	}
	
	// DISPLAYS LYRICS
	function lyricsVP() {
		var phrase = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsVPClose()\" value=\"-\" \/> <span class=\"tall\">LYRICS<\/span> <br \/><br \/> \n";
		phrase += "One may search though never find the truth \n";
		phrase += "Just know <br \/> \n";
		phrase += "What you seek is seeking you <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Ties between the circumstance <br \/> \n";
		phrase += "Reveal a path to follow <br \/> \n";
		phrase += "Amid the lines a secret's kept <br \/> \n";
		phrase += "From lies the truth must borrow <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Our remora stands idle while we attempt to conciliate <br \/> \n";
		phrase += "Believe me though my aim is only to expostulate <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Through doubts we are exposed to the unknown <br \/> \n";
		phrase += "And still we are enclosed in what we know <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "We traverse this plane alone <br \/> \n";
		phrase += "Though lonely we are not <br \/> \n";
		phrase += "A universe within itself cannot be easily forgot <br \/> \n";
		phrase += "We must deduce this primal fear <br \/> \n";
		phrase += "For the chaos then to quell <br \/> \n";
		phrase += "Or perhaps we'll be dragged to the depths of our own hell <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Self creates self <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "This anamnesis within ourselves <br \/> \n";
		phrase += "adventive and innate <br \/> \n";
		phrase += "heterotelic beings of a quantum state <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Filtered through this reality we dance with happenstance <br \/> \n";
		phrase += "Fractals form, reactions born, another child of certain chance <br \/> \n";
		phrase += "It's only time that's chasing you <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Can we escape? <br \/> \n";
		phrase += "Our solecistic minds <br \/> \n";
		phrase += "Will we escape? <br \/> \n";
		phrase += "This sedentary life <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "We dematerialize <br \/> \n";
		phrase += "Will we allow the answers <br \/> \n";
		phrase += "To gravitate upon us <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "While atoms bond together <br \/> \n";
		phrase += "An introspective form <br \/> \n";
		phrase += "As below we are bound to so above we then adorn <br \/> \n";
		phrase += "We live by these moments <br \/> \n";
		phrase += "Our senses then absorb <br \/> \n";
		phrase += "Created perception <br \/> \n";
		phrase += " <br \/> \n";
		phrase += "Exist in vibrations <br \/> \n";
		phrase += "Exist of sound <br \/> \n";
		phrase += "Cycles begin fading <br \/> \n";
		phrase += "We're breaking down <br \/> \n";
		phrase += "Practice perspicacity  <br \/><br \/> \n";
		
		var output = document.getElementById("output1");
		output.innerHTML = phrase;
	}
	
	// CLOSES LYRICS
	function lyricsVPClose() {
		var result = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"lyricsVP()\" value=\"+\" \/> <span class=\"tall\">LYRICS<\/span> <br \/> \n"
		
		var output = document.getElementById("output1");
		output.innerHTML = result;
	}
	
	// DISPLAYS A SYNOPSIS
	function synopsisVP() {
		var synop = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisVPClose()\" value=\"-\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/><br \/> \n"
		
		var output = document.getElementById("output2");
		output.innerHTML = synop;
	}
	
	// CLOSES THE SYNOPSIS
	function synopsisVPClose() {
		var result = "<input style=\"height: 26px; width: 26px;\" type=\"button\" onclick=\"synopsisVP()\" value=\"+\" \/> <span class=\"tall\">SYNOPSIS<\/span> <br \/> \n";
		
		var output = document.getElementById("output2");
		output.innerHTML = result;
	}