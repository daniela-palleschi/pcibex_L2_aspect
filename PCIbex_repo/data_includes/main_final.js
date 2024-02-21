// Remove command prefix
PennController.ResetPrefix(null)

// Turn off debugger
DebugOff()
;
PreloadZip("https://amor.cms.hu-berlin.de/~oezsoyon/stimuliL2Aspect.zip")
;
Sequence("welcome", "information", "generalinfo", "consent", "instructions", "preload", "soundon", randomize("trial"), "meta", SendResults(), "final")
;
// Instructions
newTrial("welcome",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Welcome!")
    ,
    newText("instructions-2", "<p>Dear participant,</p>")
    ,
    newText("instructions-3", "<b>You have been invited to participate in the research planned by Onur Özsoy, a research assistant from the Leibniz-Center General Linguistics, Berlin, Germany.</p><In this study, we examine the grammatical proficiency of people who speak Czech / German / Turkish / Ukrainian as a native and English as a second language. Thank you for your interest and participation.</b>")
    ,
    newText("instructions-4", "<p>On the next page you will see data protection information, a consent form to inform your decision to participate and experiment instructions.</p>")
    ,
    
    newButton("wait", "Click to continue to the next page")
        .center()
        .print()
        .wait()
)
;
newTrial("information",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Eligibility Requirements")
    ,
    newText("instructions-2", "<p>In order to participate, you have to be 18 years or older, and have been born and raised in Czechia / Germany / Türkiye / Ukraine.</p>")
    ,
    newText("instructions-3", "<p>If you have any questions about the experiment, you can contact Onur Özsoy, the person responsible for the research, at +49 163 49 82 930 or by e-mail at oezsoy@leibniz-zas.de.</p>")
    ,
  newButton("continue-start", "Click to continue.")
        .center()
        .print()
        .wait()
)
;
// information
newTrial("generalinfo",
    newText(`<p><b>Information page</b></p>
            <p>This research project is carried out at the Leibniz-Center General Linguistics (Berlin, Germany). It aims to examine the grammatical proficiency of Turkish speakers living in Germany and Turkey..</p>
            <p>The experiment includes a listening-matching exercise and a digital survey. The survey includes some questions about your educational and professional status. The results of this research will be used entirely for scientific purposes. All information obtained from you will be kept confidential and you will not be contacted again after the investigation.</p>
            <p>Throughout the experiment, you have to look at pictures on the computer screen, listen to the sentences spoken in the background, and give an answer as to which of the sentence-picture matches is correct.</p>
            <p>The entire session will last approximately 15 minutes. None of the images or text contain content that will make you feel emotionally uncomfortable. You will not be exposed to any stress or pressure.</p>
            <p>You can refuse to take part in the research or quit once you have started. In order for you to receive the participation fee, only your name, address and signature will be forwarded to our administrative department. Your data will be processed and recorded in accordance with legal regulations.</p>
            <p>All data to be recorded will be matched with a randomly assigned participant number and stored anonymously. Thus, your identity cannot be traced back through your personal data. Immediately after the experiment, you can request the deletion of your data.</p>
            <p>The data will be part of the research project carried out at the Leibniz-Center General Linguistics. The results of this study will be presented at academic conferences and published in academic journals. You can find more information about data protection in the section below.</p>
		<p><b>Data Protection</b></p>
            <p>We will collect personal data from you during this experiment. All information collected for this study will be kept confidential and accessible only to members of our research team. For future research, data will be distributed, recorded and processed anonymously and in accordance with legal regulations (GDPR).</p>
		<p>Participants' anonymity will be ensured using randomly assigned participant numbers. The researcher responsible for the analysis, storage and processing of your data is Onur Özsoy from the Leibniz-Center General Linguistics.</p>
        	<p>Commissioner for data protection: <br>pico engineering GmbH<br>Jens Neumann<br>Oldenburger Allee 25a<br>30659 Hannover<br>+49 (0)511 – 165 911-51<br>jens.neumann(at)pico-engineering.de<br><br>Berliner Beauftragte für Datenschutz und Informationsfreiheit<br>Friedrichstr. 219<br>10969 Berlin</p>`)
                    .center()
        .print()
            ,
    newButton("continue-start", "Click to continue.")
        .center()
        .print()
        .wait()
        )
  ;      
// consent
newTrial("consent",
    defaultText
        .center()
        .print()
         ,
    newText("concent-1", "Informed Consent Form")
    ,
    newText("concent-2", "<p>I agree to participate in this language study within the scope of the project carried out by the Leibniz-Center General Linguistics. I participate of my own free will and have been informed about the scientific background and method of the research. I am aware that I can terminate the experiment at any time, including data collection, without having to give a reason and without any penalties or negative consequences. The data collected from me will be anonymized and used solely for scientific purposes, online and offline, in scientific/educational presentations, exhibitions and publications. I consent to the publication of my data in anonymized form. Members of the research team need to assure confidentiality regarding my personal data. I was assured that this informed consent form and the participation fee (not applicable to all) receipt were the only written documents containing my personal information. These will be stored in accordance with data protection regulations and will not be accessible by third parties. Access to project leaders would only be allowed for billing purposes or if work was in progress.</<p>")
    ,
     newTextInput("name", "Your name:")
    .log()
    .lines(0)
    .size(300, 50)
    .print()
    ,
     newText(`<br>`)
    .print()
    ,
newTextInput("birthday", "Your birthday:")
    .log()
    .lines(0)
    .size(300, 50)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newTextInput("address", "Where do you live? (state, district):")
    .log()
    .lines(0)
    .size(300, 50)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
	newDropDown("languageL1" , "Select your first language(s)")
    .add("Czech", "German" , "Turkish" , "Ukrainian", "Ukrainian and Russian", "Russian", "other")
    .print()
    .log()
	,
    newText(`<br>`)
    .print()
	,
	newScale("bilingualismVar",   "Yes", "No")
    .before( newText("left", "Did you learn another language before the age of 5?     ") )
    //.radio()
    .labelsPosition("top")
    .print()
    .wait()
	,
	newText(`<br>`)
    .print()
    ,
    newButton("continue-cosent", "By clicking here I agree to the above.")
        .center()
        .print()
        .wait()
        )
        
// instructions        
newTrial("instructions",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "<b>Instructions</b>")
	,
	newText("instructions-2", "<p>You will hear different sentences and see two pictures that are related to the sentence. After listening to the sentence, you will be asked to choose the picture that correspondes to the sentence by pressing F (left side) or J (right side).</p>")
	)
 /*    newText("instructions-2", "<p>During this experiment, your eye movements on the screen will be recorded while you listen to the sentences. The experiment will take approximately 10-15 minutes.</p>")
    ,
    newText("instructions-3", "<p>:<ul><li>You will see a green dot in the middle of the screen. Please look at this green dot for a few seconds and move the mouse pointer over the green dot.</li><li>Afterwards, you will see two images on the screen. At the same time, you will hear a sentence. Please look at the picture corresponding to the sentence you hear.</li><li>Select the picture that correspondes with the sentence .<br>If you want to select <b>LEFT</b>, click <b>F</b>.<br>If you want to select  <b>LEFT</b>, click <b>J</b>.<br><li> After you click F or J, similar attempts will continue to appear.</li></ul></p>")
    ,
    newText("instructions-4", "<p>What you are required to do:<ul><li></li><li> It is important that your head remains straight and only your eyes move. It is important that your head remains straight and only your eyes move.</li><li>The experiment works best in Edge, Firefox or Chrome. If you are using another web broswer, please open the experiment in one of these three browsers and complete the experiment in one of these.</li><li>Set the screen brightness to 100%.</li><li>If it's dark, turn on the lights in the room.</li><li>Close your door to prevent distraction.</li><li>Please make sure to conduct the experiment in a calm and quiet environment.</li><li>Use headphones if possible.<li>Close all open applications on your computer and browser. Applications that remain open may cause distraction or cause your computer to run slower.</li><li>If you wear glasses, calibration may fail. If the images you see on the screen are large enough, you can do this experiment without glasses.</li></ul></p>")
    ,
    newText("instructions-5", "<b>Calibration</b>:<ul><li>This step is very crucial.In the next page of the experiment, calibration will begin.</li><li> A green dot/point will appear in 9 different places of the screen for 3 seconds.</li><li> Follow the green dot with your eyes and mouse pointer.</li><li> This step is required for experiment to be conducted properly. </li><li> Please try to keep your head steady during calibration and experiment. </li><li> After a few attempts, calibration may be required again.</li><li> There will be a short survey after the attempts for calibration.</li><li> Then, you will be forwarded to the payment tab.</li><li>At this stage, if you have any questions, you can call Onur Özsoy (+49 163 49 82 930) or send him an e-mail (oezsoy@leibniz-zas.de).</li><li>If you have any questions, do not continue to the experiment before your questions are answered.</li></ul></b>")
    ,
    EyeTrackerURL("https://amor.cms.hu-berlin.de/~oezsoyon/caseaspfiles.zip")
    ,
    newText("instructions-6", "<p> Follow the green dot/point with your eyes.!</p>")
    ,
    newText("instructions-7", "<p>After a few attempts, calibration may be required again.</p>")
    ,
  newButton("continue-start", "Start to do the exercise.")
        .center()
        .print()
        .wait( newEyeTracker("tracker").test.ready() )
        .remove()
    ,
    clear()
    ,
    fullscreen()
    ,
    // Start calibrating the eye-tracker, allow for up to 2 attempts
    // 50 means that calibration succeeds when 50% of the estimates match the click coordinates
    // Increase the threshold for better accuracy, but more risks of losing participants
    getEyeTracker("tracker").calibrate(50,2)
    
) */
;
newTrial("preload", 
CheckPreloaded("Image1", "Image2", "Audio")) 
;
newTrial("soundon",
    defaultText
        .center()
        .print()
    ,
    newText("checkSoundOn", "Please turn your SOUND ON. You can test the sound here:")
    ,
	newAudio("clickcontinue.wav")
	.center()
	  .print()
	  .wait()
	  .test.hasPlayed()
	  .log()
	,
  newButton("continue-start", "Click to continue.")
        .center()
        .print()
        .wait()
)
;
// Wait if the resources have not finished preloading by the time the tracker is calibrated
Template( "StimuliAspectFinal.csv" , row =>
    newTrial("trial",
	CheckPreloaded(),
        // Check/recalibrate the tracker before every trial
        // 250ms delay
      //  newTimer(250).start().wait()
      //  ,
        defaultImage.size("40vh", "40vh")
        ,
        newCanvas("Left", "40vw", "40vh")
            .add( "center at 50%" , "middle at 50%" , newImage("Image1", row.Image1).log() )
            .print( "center at 25vw" , "middle at 50vh" )		
        ,
        newCanvas("Right", "40vw", "40vh")
            .add( "center at 50%" , "middle at 50%" , newImage("Image2", row.Image2).log() ) 
            .print( "center at 75vw" , "middle at 50vh" )
        ,
        newTimer(1000)
            .start()
            .wait()
        ,
        newAudio("Audio",row.Audio)
        .log()
        .play()
        .wait()            
        ,
        // 
/*         getCanvas("object").remove(),getCanvas("subject").remove(),getCanvas("topic").remove()
        , */
        // Stop now to prevent collecting unnecessary data
		// Make sure playback is over before moving on
        newTimer(250).start().wait()
		,
        // Show the face-up cards
/*         newImage("final", row.final_image)
            .size(500,500)
            .center()
            .log()
            .print()
        , */
        newText("question", "Select the picture that correspondes with the sentence.<br>If you want to select  <b>LEFT</b>, click <b>F</b>.<br>If you want to select <b>RIGHT</b>, click <b>J</b>.")
            .cssContainer({"margin-bottom":"1em"})
			.print("center at 50vw", "middle at 50vh")
        ,
        newKey("keyPressed", "FJ")
            .log()
            .wait()
)
		.log("AudioPlayed", row.Audio)
		.log("ItemType", row.Category)
		.log("ImageLeft", row.Image1)
		.log("ImageRight", row.Image2)
		.log("MatchedKey", row.Matching)
		)

// meta data
newTrial("meta",
    defaultText
        .center()
        .print()
         ,
    newText("meta-1", "Lastly, we request you to give the following information :")
    ,
     newText(`<br>`)
    .print()
    ,
	newDropDown("EnglishLevel" , "Please choose your English level:")
    .add( "A1" , "A2" , "B1", "B2", "C1", "C2" )
    .print()
    .log()
	,
	newImage("imgLevels", "CEFR-framework.PNG")
	 .size(700,)
	.print()
	.log()
    ,
    newText(`<br>`)
    .print()
    ,
    newButton("continue-end", "Click to end the experiment.")
        .center()
        .print()
        .wait()
        )
     ;   
newTrial("final",
    defaultText
        .center()
        .print()
    ,
    newText("final-1", "Thank you for your participation<br><p>The experiment is over. You can close the tab.<br>For your comments and questions you can contact Onur Özsoy : oezsoy@leibniz-zas.de!")
    ,
    newButton("waitforever").wait() // Not printed: wait on this page forever
)
