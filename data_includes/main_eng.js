// Remove command prefix
PennController.ResetPrefix(null)

// Turn off debugger
DebugOff()
;
PreloadZip("https://amor.cms.hu-berlin.de/~oezsoyon/sound.zip")
PreloadZip("https://amor.cms.hu-berlin.de/~oezsoyon/pics.zip")
;
Sequence("welcome", "information", "generalinfo", "consent", "instructions", "preload", randomize("trial"), "meta", SendResults(), "final")
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
    newText("instructions-3", "<b>You have been invited to participate in a study planned by Onur Özsoy, a research assistant at the Leibniz Centre General Linguistics, Berlin, Germany.</p><p>Thank you for your interest and participation in this study in which we examine the grammatical competence of native and second language speakers of Turkish.</b>")
    ,
    newText("instructions-4", "<p>On the next page you will find information about data protection, a consent form to inform your decision to participate and the experiment instructions.</p>")
    ,
    
    newButton("wait", "Click to continue")
        .center()
        .print()
        .wait()
)
newTrial("information",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Eligibility requirements")
    ,
    newText("instructions-2", "<p>You must be 18 years of age or older and born and raised in Turkey.</p>")
    ,
    newText("instructions-3", "<p>If you have any questions about the experiment, you can contact Onur Özsoy, the person responsible for the research, at +49 163 49 82 930 or by e-mail at oezsoy@leibniz-zas.de.</p>")
    ,
  newButton("continue-start", "Devam etmek için tıklayınız.")
        .center()
        .print()
        .wait()
)

// information
newTrial("generalinfo",
    newText(`<p><b>Information Page</b></p>
            <p>This research project is being conducted at the Leibniz-Centre for General Linguistics (Berlin, Germany). It aims to investigate the grammatical competence of Turkish speakers living in Germany and Turkey.</p>
            <p>The experiment includes a listening-matching exercise and a digital questionnaire. The questionnaire includes some questions about your educational and professional status. The results of this research will be used for purely scientific purposes. All information obtained from you will be kept confidential and you will not be contacted again after the research.</p>
            <p>During the experiment you will have to look at the pictures on the computer screen, listen to the sentences spoken in the background and give a response as to whether the sentence-picture match is correct. During the experiment, your eye movements will be tracked using your webcam and recorded as coordinates. </p>
            <p>The whole session will last approximately 20 minutes and there will be no video recording during the experiment. No pictures or texts will make you feel emotionally uncomfortable. You will not be subjected to any stress or pressure.</p>
            <p>You can refuse to take part in the research or stop after you have started. Only your name, address and signature will be forwarded to our administrative department in order to receive the participation fee. Your data will be processed and stored according to legal and budget law regulations.</p>
            <p>All data to be recorded will be matched to a randomly assigned participant number and stored anonymously. Thus, you will not be identified through your personal data. Deneyden hemen sonra, verilerinizin silinmesini talep edebilirsiniz.</p>
            <p>The data will be part of a research project at the Leibniz-Centre for General Linguistics. The results of this work will be presented at academic conferences and published in academic journals. You can find more information about data protection in the following section.</p>
		<p><b>Veri Koruması</b></p>
            <p>We will collect personal data from you during this experiment. All information collected for this study will be kept confidential and will only be accessible to members of our research team. For future research, the data will be distributed, stored and processed anonymously and according to legal regulations (GDPR).</p>
		<p>Participant anonymity will be ensured by using randomly assigned participant numbers. Verilerinizin analizinden, saklanmasından ve işlenmesinden sorumlu araştırmacı, Leibniz Genel Dilbilim Merkezinden/Leibniz-Centre General Linguistics Berlin'den Onur Özsoy'dur.</p>
        	<p>Commissioner responsible for data protection: <br>pico engineering GmbH<br>Jens Neumann<br>Oldenburger Allee 25a<br>30659 Hannover<br>+49 (0)511 – 165 911-51<br>jens.neumann(at)pico-engineering.de<br><br>Berliner Beauftragte für Datenschutz und Informationsfreiheit<br>Friedrichstr. 219<br>10969 Berlin</p>`)
                    .center()
        .print()
            ,
    newButton("continue-start", "Devam etmek için tıklayınız.")
        .center()
        .print()
        .wait()
        )
        
// consent
newTrial("consent",
    defaultText
        .center()
        .print()
         ,
    newText("concent-1", "Bilgilendirilmiş Onay Formu")
    ,
    newText("concent-2", "<p>I agree to participate in this language study as part of the project conducted by the Leibniz Center for General Linguistics. I participate of my own free will and have been informed about the scientific background and methodology of the research. I am aware that I can terminate the experiment at any time, including data collection, without having to give any reason and without any penalty or negative consequences. The data collected from me (eye movements) will be anonymized and used for purely scientific purposes in scientific/educational presentations, exhibitions and publications online and offline. I consent to the publication of my data in anonymized form. Members of the research team have a duty of confidentiality regarding my personal data. I have been assured that this signed informed consent form and the receipt for the participation fee (100 Turkish Liras) are the only written documents containing information about me. These will be stored according to data protection regulations and will not be accessible to third parties. Access to the project leaders will only be allowed for billing purposes or if the study is ongoing.</<p>")
    ,
     newTextInput("name", "Your Name:")
    .log()
    .lines(0)
    .size(100, 50)
    .print()
    ,
     newText(`<br>`)
    .print()
    ,
newTextInput("birthday", "Date of birth:")
    .log()
    .lines(0)
    .size(100, 50)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newTextInput("address", "Your address:")
    .log()
    .lines(0)
    .size(300, 150)
    .print()
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
    newText("instructions-2", "<p>During this experiment, your eye movements on the screen will be recorded as you listen to the sentences. The experiment will last about 10-15 minutes.</p>")
    ,
    newText("instructions-3", "<p>With each attempt:<ul><li>Ekranın ortasında yeşil bir nokta göreceksiniz. Please look at this green dot for a few seconds and move the mouse cursor over the green dot.</li><li>Then you will see two pictures on the screen. You will also hear a sentence. Please look at the picture that corresponds to the sentence you hear.</li><li>Choose the picture that goes with the sentence.<br>Press the F-key to indicate <b>LEFT</b>.<br>Press the J-key to indicate <b>RIGHT</b>. <br><li>After you press F or J, similar attempts will continue to appear on the screen.</li></ul></p>")
    ,
    newText("instructions-4", "<p>What you need to do:<ul><li>The green dot you see on the screen at the beginning of each trial is to make sure that your eye tracking has been measured correctly. If this measurement is not good enough, you need to measure it again.</li><li>Try not to move your head too much during the experiment. It is important that your head stays straight and only your eyes move.</li><li>The experiment works best in Edge, Firefox and Chrome. If you are using a different browser, please reopen the experiment in one of these three and complete the experiment in one of these browsers.</li><li>Turn the screen brightness to 100%.</li><li>If it is dark, turn on the lights in the room.</li><li>Close your door to minimize distractions.</li><li>Please make sure to perform the experiment in a calm and quiet environment.</li><li>If possible, use headphones.<li>Close all open applications on your computer and browser. Applications that remain open can cause distractions or make your computer run slower.</li><li>If you wear glasses, the calibration may not be successful. You can do this experiment without glasses if the images you see on the screen are large enough.</li></ul></p>")
    ,
    newText("instructions-5", "<b>Calibration / Measurement</b>:<ul><li>Bu aşama çok önemli. On the next page of the experiment, the measurement will begin.</li><li>The green dot will appear in 9 different places on the screen for 3 seconds.</li><li>Follow the green dot with your eyes and mouse pointer.</li><li>This step is necessary for the experiment to work properly.</li><li>Please move your head as little as possible during the measurement and experiment.</li><li>After a few attempts, metering may be necessary again.</li><li>After the trials there will be a short survey.</li><li>Afterwards you will be redirected to the payment page.</li><li>If you have any questions at this point, you can call Onur Özsoy (+49 163 49 82 930) or send him an e-mail (oezsoy@leibniz-zas.de).</li><li>If you have questions, do not continue the experiment until you have received answers.</li></ul></b>")
    ,
    EyeTrackerURL("https://amor.cms.hu-berlin.de/~oezsoyon/caseaspfiles.zip")
    ,
    newText("instructions-6", "<p>Follow the green dot with your eyes.</p>")
    ,
    newText("instructions-7", "<p>After a few attempts, metering may be necessary again.</p>")
    ,
  newButton("continue-start", "Start practicing.")
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
    
)

newTrial("preload", 
CheckPreloaded("Image1", "Image2", "Audio")) 

// Wait if the resources have not finished preloading by the time the tracker is calibrated
Template( "StimuliAspectCase.csv" , row =>
    newTrial("trial",
	CheckPreloaded(),
        // Check/recalibrate the tracker before every trial
        newEyeTracker("tracker").calibrate(50,2)
        ,
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
        getEyeTracker("tracker")
            .add(    
                getCanvas("Left"),
                getCanvas("Right")
            )
            .start()
        ,
        newTimer(1000)
            .start()
            .wait()
        ,
        newAudio("Audio",row.Audio)
        .log()
        .log("AudioPlayed", row.Audio)
        .play()
        .wait()            
        ,
        // 
/*         getCanvas("object").remove(),getCanvas("subject").remove(),getCanvas("topic").remove()
        , */
        // Stop now to prevent collecting unnecessary data
        getEyeTracker("tracker")
            .stop()
		,
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
        newText("question", "Chohose the picture that matches the sentence.<br>Press the F-key to indicate <b>LEFT</b> diyorsanız..<br>Press the J-key to indicate <b>RIGHT</b>.")
            .cssContainer({"margin-bottom":"1em"})
			.print("center at 50vw", "middle at 50vh")
        ,
        newKey("keyPressed", "FJ")
            .log()
            .wait()
))

// meta data
newTrial("meta",
    defaultText
        .center()
        .print()
         ,
    newText("meta-1", "Finally, we will ask for the following information:")
    ,
    newText("meta-2", "<p>I agree to participate in this language study as part of the project conducted by the Leibniz Center for General Linguistics. I participate of my own free will and have been informed about the scientific background and methodology of the research. I am aware that I can terminate the experiment at any time, including data collection, without having to give any reason and without any penalty or negative consequences. The data collected from me (eye movements) will be anonymized and used for purely scientific purposes in scientific/educational presentations, exhibitions and publications online and offline. I consent to the publication of my data in anonymized form. Members of the research team have a duty of confidentiality regarding my personal data. I have been assured that this signed informed consent form and the receipt for the participation fee (100 Turkish Liras) are the only written documents containing information about me. These will be stored according to data protection regulations and will not be accessible to third parties. Access to the project leaders will only be allowed for billing purposes or if the study is ongoing.</<p>")
    ,
     newTextInput("gender", "Cinsiyetiniz nedir?")
    .log()
    .lines(0)
    .size(100, 50)
    .print()
    ,
     newText(`<br>`)
    .print()
    ,
newTextInput("birthplace", "Where were you born (nearest province or district)?")
    .log()
    .lines(0)
    .size(100, 50)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newTextInput("place", "Where do you live (nearest province or district)?")
    .log()
    .lines(0)
    .size(300, 150)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newButton("continue-end", "Click here to finish the study.")
        .center()
        .print()
        .wait()
        )
        
newTrial("final",
    defaultText
        .center()
        .print()
    ,
    newText("final-1", "Thank you for your hands and your eyes. This experiment is over. You can close the window.<br>ou can direct your comments and questions to Onur Özsoy at oezsoy@leibniz-zas.de!")
    ,
    newButton("waitforever").wait() // Not printed: wait on this page forever
)
