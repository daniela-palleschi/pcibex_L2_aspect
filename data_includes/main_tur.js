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
    newText("instructions-1", "Hoş geldiniz!")
    ,
    newText("instructions-2", "<p>Sayın katılımcı,</p>")
    ,
    newText("instructions-3", "<b>Leibniz Genel Dilbilim Merkezinden (Leibniz Centre General Linguistics, Berlin, Almanya) araştırma görevlisi Onur Özsoy tarafından planlanmış olan araştırmaya katılmak üzere davet edilmiş bulunuyorsunuz.</p><p>Ana dil ve ikinci dil olarak Türkçe konuşan kişilerin dil bilgisi yeterliliklerini incelediğimiz bu çalışmaya gösterdiğiniz ilgi ve katılımınız için teşekkür ederiz.</b>")
    ,
    newText("instructions-4", "<p>Bir sonraki sayfada veri korunumuyla ilgili bilgileri, katılım kararınızı bildirmeniz için bir onay formu ve deney yönergelerini göreceksiniz.</p>")
    ,
    
    newButton("wait", "Bir sonraki sayfaya geçmek için tıklayınız")
        .center()
        .print()
        .wait()
)
newTrial("information",
    defaultText
        .center()
        .print()
    ,
    newText("instructions-1", "Uygunluk şartları")
    ,
    newText("instructions-2", "<p>Katılımınız için gerekli olan koşul 18 yaşında veya daha büyük olmak ve (Türkiye’de) doğmuş ve büyümüş olmaktır.</p>")
    ,
    newText("instructions-3", "<p>Deneyle ilgili herhangi bir sorunuz olması durumunda araştırmadan sorumlu kişi olarak Onur Özsoy ile +49 163 49 82 930 numaralı telefondan veya oezsoy@leibniz-zas.de e-mail adresinden iletişime geçebilirsiniz.</p>")
    ,
  newButton("continue-start", "Devam etmek için tıklayınız.")
        .center()
        .print()
        .wait()
)

// information
newTrial("generalinfo",
    newText(`<p><b>Bilgilendirme Sayfası</b></p>
            <p>Bu araştırma projesi Leibniz Genel Dilbilim Merkezinde/ Leibniz-Centre General Linguistics'de (Berlin, Almanya) yürütülmektedir. Almanya ve Türkiye’de yaşayan Türkçe konuşmacıların dil bilgisi yeterliliklerini incelemeyi amaçlamaktadır.</p>
            <p>Deney bir dinleme-eşleştirme alıştırmasını ve dijital bir anketi içermektedir. Anket,  eğitim ve mesleki durumunuzla ilgili bazı soruları içermektedir. Bu araştırmanın sonuçları tamamen bilimsel amaçlarla kullanılacaktır. Sizden elde edilen tüm bilgiler gizli tutulacak ve sizinle tekrar araştırma sonrası iletişime geçilmeyecektir.</p>
            <p>Deney boyunca bilgisayar ekranındaki resimlere bakmanız, arka planda seslendirilen cümleleri dinlemeniz ve cümle-resim eşleşmesinin doğru olup olmadığına dair bir yanıt vermeniz gerekmektedir. Deney sırasında göz hareketleriniz web kameranız kullanılarak izlenecek ve koordinatlar olarak kaydedilecektir. </p>
            <p>Tüm oturum yaklaşık 20 dakika sürecektir ve deney sırasında video kaydı alınmayacaktır. Hiçbir resim ve metin duygusal olarak sizi rahatsız hissettirecek bir içeriğe sahip değildir. Herhangi bir stres ya da baskıya maruz kalmayacaksınız.</p>
            <p>Araştırmada yer almayı reddedebilirsiniz veya başladıktan sonra yarıda bırakabilirsiniz. Katılım ücretini alabilmeniz için sadece adınız, adresiniz ve imzanız idari departmanımıza iletilecektir. Verileriniz yasal ve bütçe kanunu düzenlemelerine göre işlenecek ve kaydedilecektir.</p>
            <p>Kaydedilecek olan tüm veriler, rastgele atanan bir katılımcı numarası ile eşleştirilecek ve isimsiz olarak saklanacak. Böylece kişisel verileriniz aracılığıyla kimliğiniz tespit edilemeyecektir. Deneyden hemen sonra, verilerinizin silinmesini talep edebilirsiniz.</p>
            <p>Veriler, Leibniz Genel Dilbilim Merkezinde /Leibniz-Centre General Linguistics'te yürütülen araştırma projesinin bir parçası olacaktır. Bu çalışma sonuçları akademik konferanslarda sunulacak ve akademik dergilerde yayınlanacaktır. Aşağıdaki bölümde veri koruması hakkında daha fazla bilgi bulabilirsiniz.</p>
		<p><b>Veri Koruması</b></p>
            <p>Bu deney sırasında sizden kişisel veriler toplayacağız. Bu çalışma için toplanan tüm bilgiler gizli tutulacak ve yalnızca araştırma ekibimizin üyeleri tarafından erişilebilir olacaktır. Gelecek araştırmalar için, veriler anonim olarak ve yasal düzenlemelere (GDPR) göre dağıtılacak, kaydedilecek ve işlenecektir.</p>
		<p>Katılımcıların anonimliği, rastgele atanan katılımcı numaraları kullanılarak sağlanacaktır. Verilerinizin analizinden, saklanmasından ve işlenmesinden sorumlu araştırmacı, Leibniz Genel Dilbilim Merkezinden/Leibniz-Centre General Linguistics Berlin'den Onur Özsoy'dur.</p>
        	<p>Veri korumasından sorumlu komisyon üyesi: <br>pico engineering GmbH<br>Jens Neumann<br>Oldenburger Allee 25a<br>30659 Hannover<br>+49 (0)511 – 165 911-51<br>jens.neumann(at)pico-engineering.de<br><br>Berliner Beauftragte für Datenschutz und Informationsfreiheit<br>Friedrichstr. 219<br>10969 Berlin</p>`)
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
    newText("concent-2", "<p>Leibniz Genel Dilbilim Merkezi tarafından yürütülen proje kapsamında, bu dil çalışmasına katılmayı kabul ediyorum. Kendi özgür irademle katılıyorum ve araştırmanın bilimsel altyapısı ve yöntemi hakkında bilgilendirildim. Veri toplama da dâhil olmak üzere, herhangi bir neden belirtmek zorunda kalmadan ve herhangi bir ceza veya olumsuz sonuç olmadan, deneyi istediğim zaman sonlandırabileceğimin farkındayım. Benden toplanan veriler (göz hareketleri) anonim hale getirilecek ve bilimsel/eğitimsel sunumlarda, sergilerde ve yayınlarda çevrimiçi ve çevrimdışı olarak tamamen bilimsel amaçlar için kullanılacaktır. Verilerimin anonimleştirilmiş biçimde yayınlanmasına izin veriyorum. Araştırma ekibinin üyeleri, kişisel verilerime ilişkin gizlilik yükümlülüğüne sahiptir. Bu imzalı bilgilendirilmiş onay formunun ve katılım ücreti (100 Türk Lirası) makbuzunun, şahsıma ait bilgileri içeren tek yazılı belgeler olduğu konusunda bana güvence verildi. Bunlar veri koruma yönetmeliklerine göre saklanacak ve üçüncü şahıslar tarafından erişilemeyecek. Proje liderlerine erişim, yalnızca faturalandırma amacıyla veya çalışmanın devam etmesi durumunda izin verilecektir.</<p>")
    ,
     newTextInput("name", "Adınız:")
    .log()
    .lines(0)
    .size(100, 50)
    .print()
    ,
     newText(`<br>`)
    .print()
    ,
newTextInput("birthday", "Doğum tarihiniz:")
    .log()
    .lines(0)
    .size(100, 50)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newTextInput("address", "Adresiniz:")
    .log()
    .lines(0)
    .size(300, 150)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newButton("continue-cosent", "Buraya tıklayarak yukarıdakileri kabul ediyorum.")
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
    newText("instructions-1", "<b>Yönergeler</b>")
    ,
    newText("instructions-2", "<p>Bu deney boyunca siz cümleleri dinlerken ekran üzerindeki göz hareketleriniz kaydedilecek. Deney yaklaşık 10-15 dakika sürecek.</p>")
    ,
    newText("instructions-3", "<p>Her denemede:<ul><li>Ekranın ortasında yeşil bir nokta göreceksiniz. Lütfen birkaç saniye bu yeşil noktaya bakınız ve fare imlecini yeşil noktanın üzerine getiriniz.</li><li>Sonrasında ekranda iki resim göreceksiniz. Aynı zamanda da bir cümle duyacaksınız. Lütfen duyduğunuz cümleye uygun resime bakınız.</li><li>Cümleyle uyumlu olan resmi seçiniz.<br>Eğer <b>SOL</b> diyorsanız, <b>F</b> tuşuna basın.<br>Eğer <b>SAĞ</b> diyorsanız, <b>J</b> tuşuna basın.<br><li>Siz F ya da J ye bastıktan sonra, benzer denemeler ekrana gelmeye devam edecek.</li></ul></p>")
    ,
    newText("instructions-4", "<p>Yapmanız gerekenler:<ul><li>Her denemenin başında ekranda gördüğünüz yeşil nokta göz takibinizin doğru ölçüldüğünden emin olmak içindir. Eğer bu ölçüm yeterince iyi değilse, tekrar ölçmeniz gerekir.</li><li>Deney boyunca başınızı çok fazla hareket ettirmemeye çalışın. Başınızın düz durması ve sadece gözlerinizin hareket etmesi önemlidir.</li><li>Deney en iyi “Edge, Firefox ve Chrome” da çalışmaktadır. Eğer farklı bir tarayıcı kullanıyorsanız, lütfen deneyi bu üçünden birinde tekrar açınız ve deneyi bu tarayıcılardan birinde tamamlayınız.</li><li>Ekran parlaklığını %100 e getiriniz.</li><li>Eğer karanlıksa odadaki ışıkları açınız.</li><li>Dikkat dağınıklığını en aza indirgemek için kapınızı kapatınız.</li><li>Lütfen deneyi sakin ve sessiz bir ortamda yaptığınızdan emin olunuz.</li><li>Eğer mümkünse kulaklık kullanınız.<li>Bilgisayarınızda ve tarayıcınızda açık olan bütün uygulamaları kapatınız. Açık kalan uygulamalar dikkat dağınıklığına ve ya bilgisayarınızın daha yavaş çalışmasına sebep olabilir.</li><li>Gözlük takıyorsanız kalibrasyon başarılı olmayabilir. Ekranda göreceğiniz resimler yeterince büyükse bu deneyi gözlüksüz de yapabilirsiniz.</li></ul></p>")
    ,
    newText("instructions-5", "<b>Kalibrasyon / Ölçümleme</b>:<ul><li>Bu aşama çok önemli. Deneyin bir sonraki sayfasında, ölçümleme başlayacak.</li><li>Yeşil nokta 3 saniye boyunca ekranın 9 farklı yerinde görünecek.</li><li>Yeşil noktayı gözlerinizle ve fare imleci ile takip ediniz.</li><li>Bu adım, deneyin düzgün çalışması için gereklidir.</li><li>Lütfen başınızı ölçümleme ve deney boyunca olabildiğince az hareket ettiriniz.</li><li>Birkaç denemeden sonra, ölçümleme tekrar gerekli olabilir.</li><li>Denemelerden sonra kısa bir anket olacak.</li><li>Sonrasında ödeme sayfasına yönlendirileceksiniz.</li><li>Bu noktada herhangi bir sorunuz varsa, Onur Özsoy’u arayabilir (+49 163 49 82 930) ya da ona mail atabilirsiniz (oezsoy@leibniz-zas.de).</li><li>Eğer sorularınız varsa, cevaplarını almadan deneye devam etmeyiniz.</li></ul></b>")
    ,
    EyeTrackerURL("https://amor.cms.hu-berlin.de/~oezsoyon/caseaspfiles.zip")
    ,
    newText("instructions-6", "<p>Yeşil noktayı gözlerinizle takip ediniz.!</p>")
    ,
    newText("instructions-7", "<p>Birkaç denemeden sonra, ölçümleme tekrar gerekli olabilir.</p>")
    ,
  newButton("continue-start", "Alıştırmaya başla.")
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
        newText("question", "Cümleyle uyumlu olan resmi seçiniz.<br>Eğer <b>SOL</b> diyorsanız, <b>F</b> tuşuna basın.<br>Eğer <b>SAĞ</b> diyorsanız, <b>J</b> tuşuna basın.")
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
    newText("meta-1", "Son olarak şu bilgileri isteyeceğiz :")
    ,
    newText("meta-2", "<p>Leibniz Genel Dilbilim Merkezi tarafından yürütülen proje kapsamında, bu dil çalışmasına katılmayı kabul ediyorum. Kendi özgür irademle katılıyorum ve araştırmanın bilimsel altyapısı ve yöntemi hakkında bilgilendirildim. Veri toplama da dâhil olmak üzere, herhangi bir neden belirtmek zorunda kalmadan ve herhangi bir ceza veya olumsuz sonuç olmadan, deneyi istediğim zaman sonlandırabileceğimin farkındayım. Benden toplanan veriler (göz hareketleri) anonim hale getirilecek ve bilimsel/eğitimsel sunumlarda, sergilerde ve yayınlarda çevrimiçi ve çevrimdışı olarak tamamen bilimsel amaçlar için kullanılacaktır. Verilerimin anonimleştirilmiş biçimde yayınlanmasına izin veriyorum. Araştırma ekibinin üyeleri, kişisel verilerime ilişkin gizlilik yükümlülüğüne sahiptir. Bu imzalı bilgilendirilmiş onay formunun ve katılım ücreti (100 Türk Lirası) makbuzunun, şahsıma ait bilgileri içeren tek yazılı belgeler olduğu konusunda bana güvence verildi. Bunlar veri koruma yönetmeliklerine göre saklanacak ve üçüncü şahıslar tarafından erişilemeyecek. Proje liderlerine erişim, yalnızca faturalandırma amacıyla veya çalışmanın devam etmesi durumunda izin verilecektir.</<p>")
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
newTextInput("birthplace", "Nerede doğdunuz? (en yakın il veya ilçe)")
    .log()
    .lines(0)
    .size(100, 50)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newTextInput("place", "Nerede yaşıyorsunuz? (en yakın il veya ilçe)")
    .log()
    .lines(0)
    .size(300, 150)
    .print()
    ,
    newText(`<br>`)
    .print()
    ,
    newButton("continue-end", "Çalışmayı bitirmek için burayı tıklayınız.")
        .center()
        .print()
        .wait()
        )
        
newTrial("final",
    defaultText
        .center()
        .print()
    ,
    newText("final-1", "Ellerinize ve gözlerinize sağlık.<br> Bu deney bitmiştir. Pencereyi kapatabilirsiniz.<br>Yorumlarınızı ve sorularınızı Onur Özsoy'a yönlendirebilirsiniz: oezsoy@leibniz-zas.de!")
    ,
    newButton("waitforever").wait() // Not printed: wait on this page forever
)
